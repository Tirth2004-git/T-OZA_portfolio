import { sendContactEmail } from "../server/mailer.js";
import { getClientIp } from "../server/visitor.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, message, _hp } = req.body || {};
    const clientIp = getClientIp(req);

    // 1. Honeypot check
    if (_hp) {
      return res.status(200).json({ success: true, message: "Transmission received." });
    }

    // 2. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: "Please provide a valid name (at least 2 characters)." });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: "Please provide a message with at least 5 characters." });
    }

    // 3. Send email
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
    console.error("[Contact Serverless Error]:", error?.message || error);
    return res.status(500).json({
      success: false,
      error: "Failed to transmit message due to a server error. Please try again later.",
    });
  }
}
