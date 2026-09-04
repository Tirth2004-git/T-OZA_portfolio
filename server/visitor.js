/**
 * In-memory map for visitor IP deduplication.
 * Key: IP string
 * Value: timestamp (number in ms)
 */
const visitorCache = new Map();

// Deduplication window: 24 hours (in ms)
const DEDUP_WINDOW_MS = 24 * 60 * 60 * 1000;

/**
 * Periodically purge entries older than 24h to avoid memory leaks.
 */
setInterval(() => {
  const now = Date.now();
  for (const [ip, lastTime] of visitorCache.entries()) {
    if (now - lastTime > DEDUP_WINDOW_MS) {
      visitorCache.delete(ip);
    }
  }
}, 60 * 60 * 1000); // Clean once per hour

/**
 * Check if the given IP was already notified within the dedup window.
 * If not, records the current timestamp and returns false (meaning "not deduplicated -> should notify").
 */
export function isDeduplicated(ip) {
  if (!ip) return false;
  const now = Date.now();
  const lastTime = visitorCache.get(ip);

  if (lastTime && now - lastTime < DEDUP_WINDOW_MS) {
    return true; // Already notified recently
  }

  // Record this visit
  visitorCache.set(ip, now);
  return false;
}

/**
 * Extract client IP from incoming request headers.
 */
export function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    // x-forwarded-for may be a comma-separated list of IPs; first is client
    return forwarded.split(",")[0].trim();
  }
  return req.headers["x-real-ip"] || req.socket?.remoteAddress || req.ip || "Unknown IP";
}

/**
 * Lookup approximate geolocation from IP via free API (with timeout).
 */
export async function getIpGeolocation(ip) {
  // If localhost or private IP range, skip remote call
  if (!ip || ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.") || ip === "Unknown IP") {
    return {
      city: "Localhost Development",
      region: "Local Network",
      country: "Local",
      org: "Local Environment",
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,isp,org`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data.status === "success") {
        return {
          city: data.city,
          region: data.regionName,
          country: data.country,
          org: data.org || data.isp,
        };
      }
    }
  } catch (err) {
    // Fail silently on geo lookup error / timeout
  }

  return null;
}
