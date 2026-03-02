import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Link from "next/link";

export default async function AssessmentLandingPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/assessment");
  }

  const discover = [
    { title: "Your Archetype", desc: "Which of five career patterns is shaping your trajectory", icon: "◇" },
    { title: "Your Core Strength", desc: "What you do better than most, and why it matters", icon: "★" },
    { title: "Your Blind Spots", desc: "Where your strengths have become liabilities", icon: "◐" },
    { title: "What It's Costing You", desc: "The career impact of your current pattern", icon: "↯" },
    { title: "How Others See You", desc: "What's being said in talent reviews you're not in", icon: "◎" },
    { title: "Six Dimensions Scored", desc: "Your profile across six behavioral dimensions", icon: "▣" },
    { title: "Your Overuse Risk", desc: "How close you are to overplaying your hand", icon: "⚠" },
    { title: "Your Growth Edge", desc: "The one shift that unlocks your next level", icon: "↗" },
  ];

  const dimensions = [
    { num: 1, title: "Strategic Visibility", desc: "How your work gets noticed by decision-makers" },
    { num: 2, title: "Political Acumen", desc: "Reading rooms and navigating dynamics" },
    { num: 3, title: "Assertive Communication", desc: "Advocating without undermining" },
    { num: 4, title: "Decision Velocity", desc: "Moving with incomplete information" },
    { num: 5, title: "Network Architecture", desc: "Building relationships that open doors" },
    { num: 6, title: "Operational Load", desc: "Managing capacity without becoming trapped" },
  ];

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes rotateWord {
          0% { opacity: 0; transform: translateY(20px); }
          5% { opacity: 1; transform: translateY(0); }
          28% { opacity: 1; transform: translateY(0); }
          33% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .rotate-word {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          animation: rotateWord 9s infinite;
        }
        .rotate-word:nth-child(2) { animation-delay: 0s; }
        .rotate-word:nth-child(3) { animation-delay: 3s; }
        .rotate-word:nth-child(4) { animation-delay: 6s; }
      `}</style>

      {/* Nav */}
      <nav className="bg-[#2D3A8C] px-6 lg:px-12 py-4">
        <Link href="/">
          <img src="/logo-white.png" alt="Unfiltered Conversations" className="h-10" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-white px-6 lg:px-12 py-20 pb-[100px]">
        <div className="max-w-[720px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F0F7FF] text-[#2D3A8C] text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span>◇</span>
            <span>Leadership Assessment</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-[48px] md:text-[52px] font-bold text-[#1a1a2e] leading-[1.15] mb-6">
            Name the pattern.
            <br />
            <span className="italic text-[#2D3A8C] whitespace-nowrap">
              Change your{" "}
              <span className="relative inline-block align-bottom">
                <span className="invisible">trajectory.</span>
                <span className="rotate-word">decisions.</span>
                <span className="rotate-word">leadership.</span>
                <span className="rotate-word">trajectory.</span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#1a1a2e]/60 text-[18px] leading-[1.7] mb-8 max-w-[540px] mx-auto">
            Five patterns. One is shaping your career. This assessment reveals which one, and what to do about it.
          </p>

          {/* CTA */}
          <Link
            href="/assessment/instructions"
            className="inline-flex items-center gap-2 bg-[#2D3A8C] text-white font-semibold px-7 py-3.5 rounded-[10px] hover:bg-[#1E2666] transition-colors mb-3"
          >
            Take the Assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Meta */}
          <p className="text-[#1a1a2e]/40 text-[14px]">
            8 min · 50 questions · Free
          </p>
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="bg-[#FAFBFC] px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-[36px] font-bold text-[#1a1a2e] text-center mb-4">
            What you&apos;ll discover
          </h2>
          <p className="text-[#1a1a2e]/60 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            Your report delivers a complete diagnostic of how you operate under pressure, make decisions, and show up to the people who determine your trajectory.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {discover.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[12px] p-5 border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] flex items-center justify-center text-[#2D3A8C] text-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-[#1a1a2e] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Dimensions */}
      <section className="bg-white px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-[36px] font-bold text-[#1a1a2e] text-center mb-4">
            Six dimensions measured
          </h2>
          <p className="text-[#1a1a2e]/60 text-center mb-14 max-w-2xl mx-auto">
            The behaviors that determine whether you advance or get passed over.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {dimensions.map((dim) => (
              <div key={dim.num} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F0F7FF] text-[#2D3A8C] flex items-center justify-center font-bold flex-shrink-0">
                  {dim.num}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-1">
                    {dim.title}
                  </h3>
                  <p className="text-[#1a1a2e]/60 text-sm leading-relaxed">
                    {dim.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#2D3A8C] px-6 lg:px-12 py-20">
        <div className="max-w-xl mx-auto text-center">
          <img src="/logo-white.png" alt="Unfiltered Conversations" className="h-12 mx-auto mb-8" />
          <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-white mb-4">
            Ready to see the pattern?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            50 questions. 8 minutes. Real answers.
          </p>
          <Link
            href="/assessment/instructions"
            className="inline-flex items-center gap-2 bg-[#22D3EE] text-[#1a1a2e] font-semibold px-7 py-3.5 rounded-[10px] hover:bg-white transition-colors"
          >
            Begin Assessment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
