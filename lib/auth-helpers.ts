import { randomInt } from "crypto";
import bcrypt from "bcryptjs";

export const OTP_EXPIRY_MINUTES = 10;

export function generateOTP(): string {
  return String(randomInt(100000, 999999));
}

export async function hashOTP(code: string): Promise<string> {
  return bcrypt.hash(code, 10);
}

export async function verifyOTP(
  code: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(code, hash);
}
