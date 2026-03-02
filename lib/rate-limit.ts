const rateLimitMap = new Map<
  string,
  { count: number; resetAt: number }
>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

export function checkRateLimit(key: string): {
  allowed: boolean;
  retryAfterMs?: number;
} {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterMs: entry.resetAt - now };
  }

  entry.count++;
  return { allowed: true };
}
