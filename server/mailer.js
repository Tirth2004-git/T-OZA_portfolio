import nodemailer from "nodemailer";

/**
 * Creates and returns a Nodemailer transporter using environment variables.
 */
export function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("Email service is not configured: EMAIL_USER or EMAIL_PASS environment variable is missing.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Send contact form submission notification email.
 */
export async function sendContactEmail({ name, email, message, ip }) {
  const transporter = getTransporter();
  const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

  if (!recipient) {
    throw new Error("Recipient email (EMAIL_USER or EMAIL_TO) is not set.");
  }

  const mailOptions = {
    from: `"${name} via Portfolio" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: recipient,
    subject: `Portfolio Contact: ${name}`,
    text: `You received a new message from your portfolio contact form:
    
Name: ${name}
Email: ${email}
IP Address: ${ip || "Unknown"}
Date: ${new Date().toISOString()}

Message:
${message}
`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <h2 style="color: #1a202c; border-bottom: 2px solid #e2984a; padding-bottom: 8px; margin-top: 0;">
          New Portfolio Contact Message
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px 0; color: #718096; width: 120px; font-weight: bold;">Sender Name:</td>
            <td style="padding: 8px 0; color: #2d3748; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #718096; font-weight: bold;">Sender Email:</td>
            <td style="padding: 8px 0; color: #2b6cb0;"><a href="mailto:${escapeHtml(email)}" style="color: #3182ce;">${escapeHtml(email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #718096; font-weight: bold;">IP Address:</td>
            <td style="padding: 8px 0; color: #4a5568;">${escapeHtml(ip || "Unknown")}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #718096; font-weight: bold;">Timestamp:</td>
            <td style="padding: 8px 0; color: #4a5568;">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</td>
          </tr>
        </table>
        <div style="background-color: #f7fafc; border-left: 4px solid #e2984a; padding: 16px; border-radius: 4px; margin-top: 16px;">
          <p style="margin: 0; color: #2d3748; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
        </div>
        <p style="font-size: 11px; color: #a0aec0; margin-top: 24px; text-align: center;">
          Sent from Tirth Oza's Portfolio Platform
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

/**
 * Send hidden visitor notification email.
 */
export async function sendVisitorEmail({ ip, location, userAgent, referrer, timestamp, path }) {
  const transporter = getTransporter();
  const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

  if (!recipient) {
    throw new Error("Recipient email (EMAIL_USER or EMAIL_TO) is not set.");
  }

  const locString = location
    ? `${location.city || "Unknown City"}, ${location.region || ""}, ${location.country || "Unknown Country"} (${location.org || location.isp || ""})`
    : "Location Unavailable";

  const mailOptions = {
    from: `"Portfolio Telemetry" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: `New portfolio visitor [${location?.city || location?.country || ip}]`,
    text: `New Visitor Activity Detected:
    
IP Address: ${ip}
Location: ${locString}
Path: ${path || "/"}
Referrer: ${referrer || "Direct Visit"}
User-Agent: ${userAgent || "Unknown"}
Timestamp: ${timestamp || new Date().toISOString()}
`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <h3 style="color: #2d3748; margin-top: 0; display: flex; align-items: center; gap: 8px;">
          <span style="display: inline-block; width: 10px; height: 10px; background-color: #4fd1c5; border-radius: 50%;"></span>
          New Portfolio Visitor Detected
        </h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 8px 0; color: #718096; width: 110px;">IP Address:</td>
            <td style="padding: 8px 0; color: #1a202c; font-family: monospace;">${escapeHtml(ip)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 8px 0; color: #718096;">Location:</td>
            <td style="padding: 8px 0; color: #1a202c; font-weight: 600;">${escapeHtml(locString)}</td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 8px 0; color: #718096;">Page Path:</td>
            <td style="padding: 8px 0; color: #2d3748; font-family: monospace;">${escapeHtml(path || "/")}</td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 8px 0; color: #718096;">Referrer:</td>
            <td style="padding: 8px 0; color: #2d3748;">${escapeHtml(referrer || "Direct")}</td>
          </tr>
          <tr style="border-bottom: 1px solid #edf2f7;">
            <td style="padding: 8px 0; color: #718096;">User Agent:</td>
            <td style="padding: 8px 0; color: #4a5568; font-size: 11px;">${escapeHtml(userAgent || "Unknown")}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #718096;">Timestamp:</td>
            <td style="padding: 8px 0; color: #4a5568;">${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</td>
          </tr>
        </table>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

function escapeHtml(string = "") {
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
