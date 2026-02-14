const archetypes = [
  {
    name: "The Over-Prepared Strategist",
    icon: "◇",
    question: "How visible can I be?",
    description:
      "You see the system before anyone else does. But you hide it behind preparation, and leadership never sees your thinking.",
  },
  {
    name: "The Over-Relied-On Stabilizer",
    icon: "○",
    question: "How much can I carry?",
    description:
      "You hold everything together. But you're too valuable where you are to promote, and too exhausted to notice.",
  },
  {
    name: "The System Corrector",
    icon: "△",
    question: "How hard should I push?",
    description:
      "You're right about what's broken. But the way you deliver it creates resistance and gets you labeled 'not ready.'",
  },
  {
    name: "The Expansive Optimizer",
    icon: "⬡",
    question: "What should I not pursue?",
    description:
      "Every door feels like the right door. But you never commit to the one lane that would make you promotable.",
  },
  {
    name: "The Reflective Builder",
    icon: "□",
    question: "Where do I start?",
    description:
      "You have the insight but not the momentum. You keep thinking instead of building the track record that gets noticed.",
  },
];

export default function Archetypes() {
  return (
    <section
      id="archetypes"
      className="bg-indigo border-t-4 border-sky py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-serif text-lg italic text-white/70 mb-4">
            The pattern has a name. The name changes the decision. The
            decision changes the trajectory.
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight max-w-2xl mx-auto">
            Five patterns that keep capable leaders from the next level
          </h2>
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {archetypes.map((archetype, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-ice-blue flex items-center justify-center text-indigo text-xl mb-4">
                {archetype.icon}
              </div>
              <h3 className="font-serif font-bold text-indigo text-sm mb-2">
                {archetype.name}
              </h3>
              <p className="font-serif italic text-sky text-sm mb-3">
                &ldquo;{archetype.question}&rdquo;
              </p>
              <p className="text-[#3d3d5c] text-sm leading-relaxed">
                {archetype.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#assessment"
            className="inline-flex items-center px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors"
          >
            Which one are you? Take the Assessment
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
