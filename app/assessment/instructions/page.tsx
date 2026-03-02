import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Link from "next/link";

export default async function InstructionsPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/assessment");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-[#2D3A8C] px-6 lg:px-12 py-4">
        <Link href="/">
          <img src="/logo-white.png" alt="Unfiltered Conversations" className="h-10" />
        </Link>
      </nav>

      {/* Main Content */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-[640px] mx-auto">
          {/* Header */}
          <div className="text-center">
            <h1 className="font-serif text-[36px] font-bold text-[#1a1a2e] mb-2">
              Before You Start
            </h1>
            <p className="text-[#1a1a2e]/50 text-[16px]">
              Read this once, then begin.
            </p>
          </div>

          {/* Instructions Card */}
          <div className="bg-white rounded-[12px] border border-[#e5e7eb] p-8 mt-8">
            <div className="space-y-6 text-[#1a1a2e]/70 text-[16px] leading-[1.7]">
              <p>
                This assessment works best when you answer from your first, honest instinct. Not your best day and not your worst day. Choose the option that describes what you do most of the time over the last 90 days.
              </p>
              <p>
                If you feel torn between two answers, pick the one that is more typical, not more flattering.
              </p>
              <p className="font-semibold text-[#1a1a2e]">
                Don&apos;t overthink. You cannot go back and change an answer once you move on. That&apos;s by design.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center">
            <div>
              <div className="text-[11px] uppercase tracking-[1px] text-[#1a1a2e]/40 mb-1">Target Pace</div>
              <div className="font-serif text-[20px] font-semibold text-[#2D3A8C]">~15 sec</div>
              <div className="text-[13px] text-[#1a1a2e]/40">per question</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[1px] text-[#1a1a2e]/40 mb-1">Total Time</div>
              <div className="font-serif text-[20px] font-semibold text-[#2D3A8C]">7-10 min</div>
              <div className="text-[13px] text-[#1a1a2e]/40">start to finish</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[1px] text-[#1a1a2e]/40 mb-1">Best Approach</div>
              <div className="font-serif text-[20px] font-semibold text-[#2D3A8C]">First instinct</div>
              <div className="text-[13px] text-[#1a1a2e]/40">don&apos;t analyze</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/assessment/take"
              className="inline-flex items-center gap-2 bg-[#2D3A8C] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1E2666] transition-colors text-lg"
            >
              I&apos;m Ready
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
