const outcomes = [
  {
    icon: "◎",
    title: "Your decisions get faster",
    description:
      "You stop second-guessing and start examining the pattern driving the hesitation. The decision doesn't change. Your relationship to it does.",
  },
  {
    icon: "△",
    title: "Your ideas actually land",
    description:
      "Each archetype has a default way of framing ideas to leadership. Once you see yours, you adjust the delivery, not the substance.",
  },
  {
    icon: "○",
    title: "Your team stops colliding",
    description:
      "When a team maps their archetypes, the conversations shift from blame to understanding. You build shared language for how you decide together.",
  },
  {
    icon: "⬡",
    title: "You stop repeating the pattern",
    description:
      "Your archetype is most visible under pressure. Naming it gives you a pause between instinct and action so you stop defaulting to what's comfortable.",
  },
];

export default function Outcomes() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky mb-4 block">
            What changes when you name it
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight max-w-2xl mx-auto">
            The pattern is the problem. Naming it is the fix.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left - Photo */}
          <div className="rounded-[14px] overflow-hidden max-h-[560px]">
            <img
              src="/outcomes-photo.jpg"
              alt="Leadership outcomes"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right - Stacked outcome cards */}
          <div className="space-y-4">
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg text-sky flex-shrink-0">
                    {outcome.icon}
                  </span>
                  <h3 className="font-serif text-base font-bold text-foreground">
                    {outcome.title}
                  </h3>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed pl-8">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
