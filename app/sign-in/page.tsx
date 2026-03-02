"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/assessment";

  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to send code");
        return;
      }

      setStep("code");
      startCooldown();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Verification failed");
        return;
      }

      router.push(callbackUrl);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to resend code");
        return;
      }

      startCooldown();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const startCooldown = () => {
    setResendCooldown(60);
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-ice-blue/30 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/">
            <img
              src="/logo.png"
              alt="Unfiltered Conversations"
              className="h-auto w-[180px] mx-auto mb-6"
            />
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          {step === "email" ? (
            <>
              <h1 className="font-serif text-2xl text-foreground text-center mb-2">
                Sign in
              </h1>
              <p className="text-foreground/60 text-sm text-center mb-8">
                Enter your email to receive a verification code.
              </p>

              <form onSubmit={handleSendOTP}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                />

                {error && (
                  <p className="text-red-500 text-sm mt-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full mt-6 px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send verification code"}
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 className="font-serif text-2xl text-foreground text-center mb-2">
                Check your email
              </h1>
              <p className="text-foreground/60 text-sm text-center mb-8">
                We sent a 6-digit code to{" "}
                <span className="font-medium text-foreground">{email}</span>
              </p>

              <form onSubmit={handleVerifyOTP}>
                <label
                  htmlFor="code"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Verification code
                </label>
                <input
                  id="code"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  value={code}
                  onChange={(e) =>
                    setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  placeholder="000000"
                  required
                  autoFocus
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-foreground text-center text-2xl tracking-[0.5em] font-mono placeholder:text-foreground/20 placeholder:tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-sky/30 focus:border-sky transition-colors"
                />

                {error && (
                  <p className="text-red-500 text-sm mt-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || code.length !== 6}
                  className="w-full mt-6 px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <button
                  onClick={handleResend}
                  disabled={resendCooldown > 0 || loading}
                  className="text-sky text-sm font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline"
                >
                  {resendCooldown > 0
                    ? `Resend code in ${resendCooldown}s`
                    : "Resend code"}
                </button>
                <button
                  onClick={() => {
                    setStep("email");
                    setCode("");
                    setError("");
                  }}
                  className="block mx-auto text-foreground/40 text-sm hover:text-foreground/60"
                >
                  Use a different email
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
