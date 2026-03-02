import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { ARCHETYPES } from "@/lib/assessment/archetypes";
import { DIMENSIONS, DIMENSION_LEVELS, type DimensionSlug } from "@/lib/assessment/dimensions";
import { dimensionScaleLabels } from "@/lib/archetype-content";
import ReportDownloadButton from "./ReportDownloadButton";

function getDimensionLevel(dimension: DimensionSlug, score: number) {
  const levels = DIMENSION_LEVELS[dimension];
  for (const level of levels) {
    if (score <= level.max) return level;
  }
  return levels[levels.length - 1];
}

function getScaleLabel(dimension: string, score: number) {
  const labels = dimensionScaleLabels[dimension];
  if (!labels) return null;
  const rounded = Math.max(1, Math.min(5, Math.round(score)));
  return labels[rounded] || null;
}

function OveruseBadge({ level }: { level: string }) {
  const config = {
    moderate: { bg: "bg-[#F0F7FF]", text: "text-[#2D3A8C]", border: "border-[#2D3A8C]/20", label: "Moderate" },
    elevated: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", label: "Elevated" },
    high: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", label: "High" },
  }[level] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", label: level };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
}

export default async function ResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/assessment");
  }

  const { id } = await params;

  const response = await prisma.assessmentResponse.findUnique({
    where: { id },
    include: {
      resultArchetype: true,
      secondaryArchetype: true,
    },
  });

  if (!response || response.userId !== session.user.id) {
    notFound();
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { reportPurchasedAt: true },
  });

  const dimensionScores = response.dimensionScores as Record<string, number>;

  const primary = ARCHETYPES[response.resultArchetype!.slug as keyof typeof ARCHETYPES];
  const secondary = ARCHETYPES[response.secondaryArchetype!.slug as keyof typeof ARCHETYPES];

  const dims = Object.keys(DIMENSIONS) as DimensionSlug[];

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-[#2D3A8C] px-6 lg:px-12 py-4">
        <Link href="/">
          <img src="/logo-white.png" alt="Unfiltered Conversations" className="h-10" />
        </Link>
      </nav>

      {/* 1. Header */}
      <section className="bg-[#2D3A8C] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">{primary.symbol}</div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            {primary.title}
          </h1>
          <p className="font-serif text-[#22D3EE] text-xl italic mb-8">
            &ldquo;{primary.coreQuestion}&rdquo;
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-white/10 rounded-lg px-4 py-2 text-sm">
              <span className="text-white/60">Secondary: </span>
              <span>{secondary.title}</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 text-sm">
              <span className="text-white/60">Overuse Risk: </span>
              <OveruseBadge level={response.overuseLevel} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Strength */}
      <section className="bg-[#F0F7FF] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-2">Core Strength</h2>
          <div className="w-12 h-1 bg-[#22D3EE] rounded mb-6" />
          <p className="text-[#1a1a2e]/80 leading-[1.7] text-lg">{primary.coreStrength}</p>
        </div>
      </section>

      {/* 3. Areas of Growth */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-[#2D3A8C] pl-6">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-2">Areas of Growth</h2>
            <div className="w-12 h-1 bg-[#2D3A8C]/20 rounded mb-6" />
            <p className="text-[#1a1a2e]/80 leading-[1.7] text-lg">{primary.areasOfGrowth}</p>
          </div>
        </div>
      </section>

      {/* 4. What This Pattern Is Costing You */}
      <section className="bg-[#2D3A8C] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-[#22D3EE] pl-6">
            <h2 className="font-serif text-2xl font-bold mb-2">What This Pattern Is Costing You</h2>
            <div className="w-12 h-1 bg-white/20 rounded mb-6" />
            <p className="text-white/90 leading-[1.7] text-lg">{primary.costStatement}</p>
          </div>
        </div>
      </section>

      {/* 5. How Others Currently See You */}
      <section className="bg-[#F0F7FF] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-[#22D3EE] pl-6">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-2">How Others Currently See You</h2>
            <div className="w-12 h-1 bg-[#22D3EE]/30 rounded mb-6" />
            <p className="text-[#1a1a2e]/80 leading-[1.7] text-lg">{primary.howOthersSeeYou}</p>
          </div>
        </div>
      </section>

      {/* 6. Your Overuse Risk */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#1a1a2e]">Your Overuse Risk</h2>
            <OveruseBadge level={response.overuseLevel} />
          </div>
          <p className="text-[#1a1a2e]/80 leading-[1.7] text-lg">{primary.overuseRisk}</p>
        </div>
      </section>

      {/* 7. Diagnostic Profile */}
      <section className="bg-[#F0F7FF] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] text-center mb-10">Diagnostic Profile</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Core Tension", value: primary.tension },
              { label: "Power Style", value: primary.power },
              { label: "Under Pressure", value: primary.pressureResponse },
              { label: "Primary Risk", value: primary.risk },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-[12px] p-5 border border-[#2D3A8C]/5">
                <div className="text-[#1a1a2e]/40 text-xs uppercase tracking-wider mb-2">{item.label}</div>
                <div className="text-[#1a1a2e] font-medium text-sm leading-relaxed">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Your Six Dimensions */}
      <section className="bg-[#2D3A8C] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-white text-center mb-10">Your Six Dimensions</h2>
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <div className="space-y-8">
              {dims.map((dim) => {
                const score = dimensionScores[dim] || 0;
                const percentage = (score / 5) * 100;
                const scaleLabel = getScaleLabel(dim, score);

                return (
                  <div key={dim}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#1a1a2e]">
                        {DIMENSIONS[dim].name}
                      </span>
                      <span className="text-xs font-medium text-[#2D3A8C]">
                        {scaleLabel} ({score.toFixed(1)})
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#22D3EE] rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Behavioral Patterns */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-2">Behavioral Patterns</h2>
          <p className="text-[#1a1a2e]/50 text-sm mb-8">Do any of these sound familiar?</p>
          <div className="space-y-4">
            {primary.behavioralPatterns.map((pattern, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                <span className="w-6 h-6 rounded bg-[#F0F7FF] text-[#2D3A8C] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[#1a1a2e]/70 leading-relaxed">{pattern}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. The Executive Misread */}
      <section className="bg-[#2D3A8C] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-6">The Executive Misread</h2>
          <p className="text-white/70 leading-relaxed mb-6">{primary.executiveMisread.intro}</p>
          <div className="space-y-3 mb-6">
            {primary.executiveMisread.misreads.map((misread, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-3">
                <span className="text-[#22D3EE] font-bold">{i + 1}</span>
                <span className="text-white/90 font-medium">&ldquo;{misread}&rdquo;</span>
              </div>
            ))}
          </div>
          <p className="text-white/70 leading-relaxed italic">{primary.executiveMisread.outro}</p>
        </div>
      </section>

      {/* 11. The 90-Day Test */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-2">The 90-Day Test</h2>
          <p className="text-[#1a1a2e]/60 leading-relaxed mb-6">{primary.ninetyDayTest.intro}</p>
          <div className="space-y-3 mb-6">
            {primary.ninetyDayTest.questions.map((q, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#F0F7FF] rounded-[12px] px-5 py-4">
                <span className="w-8 h-8 rounded-lg bg-[#2D3A8C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-[#1a1a2e]/80 font-medium">{q}</span>
              </div>
            ))}
          </div>
          <p className="text-[#1a1a2e]/80 leading-relaxed font-semibold">{primary.ninetyDayTest.outro}</p>
        </div>
      </section>

      {/* 12. Your Secondary Pattern */}
      <section className="bg-[#F0F7FF] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-2">Your Secondary Pattern</h2>
          <div className="w-12 h-1 bg-[#22D3EE] rounded mb-6" />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-[#2D3A8C] text-2xl border border-[#22D3EE]/20">
              {secondary.symbol}
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1a1a2e]">{secondary.title}</h3>
              <p className="text-[#22D3EE] italic">&ldquo;{secondary.coreQuestion}&rdquo;</p>
            </div>
          </div>
          <p className="text-[#1a1a2e]/80 leading-[1.7] mb-4">{primary.secondaryPattern.description}</p>
          <p className="text-[#1a1a2e]/70 leading-[1.7]">{secondary.coreStrength}</p>
        </div>
      </section>

      {/* 13. Your Decision Principle */}
      <section className="bg-[#2D3A8C] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-2">Your Decision Principle</h2>
          <div className="w-12 h-1 bg-[#22D3EE] rounded mx-auto mb-6" />
          <p className="text-white/90 text-xl font-serif italic">
            &ldquo;{primary.decisionPrinciple}&rdquo;
          </p>
        </div>
      </section>

      {/* 14. Grandfather Note */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#F0F7FF] rounded-2xl p-8 md:p-12 border border-[#2D3A8C]/5">
            <div className="text-4xl mb-6">{primary.symbol}</div>
            <p className="font-serif text-xl text-[#1a1a2e] leading-relaxed italic">
              &ldquo;{primary.grandfatherNote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 15. Your First Move */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#1a1a2e] text-center mb-2">Your First Move</h2>
          <div className="w-12 h-1 bg-[#22D3EE] rounded mx-auto mb-8" />
          <div className="bg-[#F0F7FF] rounded-2xl p-8 border border-[#2D3A8C]/5">
            <p className="text-[#1a1a2e]/80 leading-[1.7] text-lg text-center">{primary.firstMove}</p>
          </div>
        </div>
      </section>

      {/* 16. CTA */}
      <section className="bg-[#2D3A8C] py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="font-serif text-2xl text-white mb-4">
            Now you see the pattern. What you do next is yours.
          </p>
          <p className="text-white/70 text-sm mb-8">
            Get your personalized 5-page executive assessment report with your full diagnostic profile, behavioral tendencies, and 90-day activation plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ReportDownloadButton
              responseId={id}
              hasPurchased={!!user?.reportPurchasedAt}
            />
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium px-7 py-3.5 transition-colors"
            >
              Back to Home
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
