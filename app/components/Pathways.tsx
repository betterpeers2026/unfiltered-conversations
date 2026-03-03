export default function Pathways() {
  return (
    <section id="solutions" className="py-20 lg:py-28" style={{ background: "#F4F6FA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-3xl md:text-[38px] text-[#1E2548] text-center leading-tight mb-14 lg:mb-16">
          Start free. Go deeper when you&apos;re ready.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: The Podcast */}
          <div
            className="flex flex-col bg-white rounded-xl p-7"
            style={{ border: "1px solid #D8E0EA", borderTop: "4px solid #D8E0EA" }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-bold text-[#1E2548]">The Podcast</h3>
              <span className="text-xl text-[#7A8098]/50">🎧</span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-lg font-bold text-[#2a388f]">Free</span>
              <span className="text-[13px] text-[#4A5068]">· Always</span>
            </div>
            <p className="text-sm text-[#4A5068] leading-[1.65] mb-auto pb-7">
              Short episodes organized by archetype. The specific language, frameworks, and tension points for your pattern, not generic leadership content.
            </p>
            <a
              href="#podcast"
              className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-semibold text-[#2a388f] rounded-lg transition-colors hover:bg-[#2a388f]/5"
              style={{ border: "1.5px solid #D8E0EA" }}
            >
              Listen Now
              <span>→</span>
            </a>
          </div>

          {/* Card 2: The Assessment + Report (HIGHLIGHTED) */}
          <div
            className="flex flex-col bg-white rounded-xl p-7"
            style={{
              border: "2px solid #00b8fb",
              borderTop: "4px solid #00b8fb",
              boxShadow: "0 8px 32px rgba(42,56,143,0.12)",
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-bold text-[#1E2548]">The Assessment + Report</h3>
              <span className="text-xl text-[#7A8098]/50">◇</span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-lg font-bold text-[#00b8fb]">$50</span>
            </div>
            <p className="text-sm text-[#4A5068] leading-[1.65] mb-auto pb-7">
              50 questions across six leadership dimensions. Your complete five-page report with executive summary, scored dimensions, behavioral tendencies, interpretation risk, 90-day activation plan, and your decision principle.
            </p>
            <a
              href="/assessment/instructions"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold text-white bg-[#2a388f] rounded-lg transition-colors hover:bg-[#222d6e]"
            >
              Take the Assessment
              <span>→</span>
            </a>
          </div>

          {/* Card 3: The Decision Room */}
          <div
            className="flex flex-col bg-white rounded-xl p-7"
            style={{ border: "1px solid #D8E0EA", borderTop: "4px solid #D8E0EA" }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-bold text-[#1E2548]">The Decision Room</h3>
              <span className="text-xl text-[#7A8098]/50">◎</span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-sm font-bold text-[#2a388f]">By Application</span>
            </div>
            <p className="text-sm text-[#4A5068] leading-[1.65] mb-auto pb-7">
              A private session for leaders navigating a critical decision, transition, or high-stakes moment. Not advice. Better judgment. Built on your assessment results.
            </p>
            <a
              href="#"
              className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-semibold text-[#2a388f] rounded-lg transition-colors hover:bg-[#2a388f]/5"
              style={{ border: "1.5px solid #D8E0EA" }}
            >
              Apply Now
              <span>→</span>
            </a>
          </div>

          {/* Card 4: Decision Labs */}
          <div
            className="flex flex-col bg-white rounded-xl p-7"
            style={{ border: "1px solid #D8E0EA", borderTop: "4px solid #D8E0EA" }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-bold text-[#1E2548]">Decision Labs</h3>
              <span className="text-xl text-[#7A8098]/50">◈</span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-sm font-bold text-[#2a388f]">Custom</span>
              <span className="text-[13px] text-[#4A5068]">· For Teams</span>
            </div>
            <p className="text-sm text-[#4A5068] leading-[1.65] mb-auto pb-7">
              Map your leadership team&apos;s archetypes together. Build shared language for how you make decisions and where patterns collide.
            </p>
            <a
              href="mailto:trevor@unfilteredconversations.com"
              className="inline-flex items-center self-start gap-2 px-6 py-3 text-sm font-semibold text-[#2a388f] rounded-lg transition-colors hover:bg-[#2a388f]/5"
              style={{ border: "1.5px solid #D8E0EA" }}
            >
              Inquire
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
