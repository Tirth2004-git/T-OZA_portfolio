import { sendVisitorEmail } from "../server/mailer.js";
import { getClientIp, getIpGeolocation, isDeduplicated } from "../server/visitor.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Acknowledge request immediately
  res.status(200).json({ received: true });

  // Asynchronous telemetry dispatch
  try {
    const clientIp = getClientIp(req);
    const userAgent = req.headers["user-agent"] || "Unknown";
    const referrer = req.body?.referrer || req.headers["referer"] || "Direct";
    const path = req.body?.path || "/";

    if (isDeduplicated(clientIp)) {
      return;
    }

    const location = await getIpGeolocation(clientIp);

    await sendVisitorEmail({
      ip: clientIp,
      location,
      userAgent,
      referrer,
      path,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    // Fail silently in production
  }
}
