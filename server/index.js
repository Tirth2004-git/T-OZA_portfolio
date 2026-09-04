import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendContactEmail, sendVisitorEmail } from "./mailer.js";
import { getClientIp, getIpGeolocation, isDeduplicated } from "./visitor.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "100kb" }));

// Basic in-memory rate limiting map for contact submissions
const contactRateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 mins
const MAX_CONTACT_PER_WINDOW = 5;

function checkContactRateLimit(ip) {
  const now = Date.now();
  const entry = contactRateLimit.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > entry.resetTime) {
    entry.count = 1;
    entry.resetTime = now + RATE_LIMIT_WINDOW_MS;
    contactRateLimit.set(ip, entry);
    return true;
  }

  if (entry.count >= MAX_CONTACT_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  contactRateLimit.set(ip, entry);
  return true;
}

/**
 * Health check
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

/**
 * POST /api/contact
 * Handles contact form submissions with server-side validation and honeypot spam protection.
 */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message, _hp } = req.body || {};
    const clientIp = getClientIp(req);

    // 1. Honeypot check: if bot filled hidden field, return success silently
    if (_hp) {
      return res.status(200).json({ success: true, message: "Transmission received." });
    }

    // 2. Simple IP rate throttle
    if (!checkContactRateLimit(clientIp)) {
      return res.status(429).json({
        success: false,
        error: "Too many contact submissions from this address. Please try again later.",
      });
    }

    // 3. Server-side field validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: "Please provide a valid name (at least 2 characters)." });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: "Please provide a message with at least 5 characters." });
    }

    // 4. Send email via Nodemailer
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ip: clientIp,
    });

    return res.status(200).json({
      success: true,
      message: "Message successfully transmitted to Tirth Oza.",
    });
  } catch (error) {
    console.error("[Contact API Error]:", error?.message || error);
    return res.status(500).json({
      success: false,
      error: "Failed to transmit message due to a server error. Please try again later.",
    });
  }
});

/**
 * POST /api/visitor-log
 * Silent, non-blocking visitor activity logging endpoint.
 */
app.post("/api/visitor-log", async (req, res) => {
  // Always return immediately to avoid blocking client
  res.status(200).json({ received: true });

  // Process logging asynchronously in background
  (async () => {
    try {
      const clientIp = getClientIp(req);
      const userAgent = req.headers["user-agent"] || "Unknown";
      const referrer = req.body?.referrer || req.headers["referer"] || "Direct";
      const path = req.body?.path || "/";

      // Deduplicate: send email only once per IP per 24 hours
      if (isDeduplicated(clientIp)) {
        return;
      }

      // Geolocation lookup
      const location = await getIpGeolocation(clientIp);

      // Dispatch notification
      await sendVisitorEmail({
        ip: clientIp,
        location,
        userAgent,
        referrer,
        path,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      // Fail completely silently in production
      if (process.env.NODE_ENV !== "production") {
        console.warn("[VisitorLog Background Warning]:", err?.message || err);
      }
    }
  })();
});

app.listen(PORT, () => {
  console.log(`[Portfolio Server] API service listening on http://localhost:${PORT}`);
});
