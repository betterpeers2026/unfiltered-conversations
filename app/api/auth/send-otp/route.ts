import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateOTP, hashOTP, OTP_EXPIRY_MINUTES } from "@/lib/auth-helpers";
import { getResend } from "@/lib/resend";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    const rateCheck = checkRateLimit(`otp:${normalizedEmail}`);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const code = generateOTP();
    const hashedCode = await hashOTP(code);

    // Invalidate existing unused codes for this email
    await prisma.verificationCode.updateMany({
      where: { email: normalizedEmail, used: false },
      data: { used: true },
    });

    // Store the new code
    await prisma.verificationCode.create({
      data: {
        email: normalizedEmail,
        code: hashedCode,
        expiresAt: new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000),
      },
    });

    // Send email via Resend
    await getResend().emails.send({
      from: "onboarding@resend.dev",
      to: normalizedEmail,
      subject: "Your verification code",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 400px; margin: 0 auto; padding: 40px 20px;">
          <h2 style="color: #2A388F; font-size: 20px; margin-bottom: 8px;">Your verification code</h2>
          <p style="color: #666; font-size: 14px; margin-bottom: 24px;">Enter this code to sign in to Unfiltered Conversations.</p>
          <div style="background: #EBF6FB; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 24px;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #2A388F;">${code}</span>
          </div>
          <p style="color: #999; font-size: 12px;">This code expires in ${OTP_EXPIRY_MINUTES} minutes. If you did not request this code, you can safely ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send OTP error:", error);
    return NextResponse.json(
      { error: "Failed to send verification code" },
      { status: 500 }
    );
  }
}
