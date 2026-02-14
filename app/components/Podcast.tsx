const episodes = [
  {
    archetype: "Over-Prepared Strategist",
    title: "When You See It Before Leadership Does",
    duration: "12 min",
    color: "bg-sky/10 text-sky",
  },
  {
    archetype: "Over-Relied-On Stabilizer",
    title: "Reliability Is Not Leadership",
    duration: "9 min",
    color: "bg-indigo/10 text-indigo",
  },
  {
    archetype: "System Corrector",
    title: "Why They Resist You Even When You're Right",
    duration: "14 min",
    color: "bg-lavender/10 text-lavender",
  },
  {
    archetype: "Expansive Optimizer",
    title: "The Cost of Keeping Every Door Open",
    duration: "11 min",
    color: "bg-sky/10 text-sky",
  },
  {
    archetype: "Reflective Builder",
    title: "Thinking Is Not Progress",
    duration: "10 min",
    color: "bg-indigo/10 text-indigo",
  },
];

export default function Podcast() {
  return (
    <section id="podcast" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky mb-4 block">
              The Podcast
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Episodes built for <em className="text-sky not-italic">your</em>{" "}
              pattern
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Each episode maps to a specific archetype, with the language,
              frameworks, and tension points you&apos;ll actually recognize. Not
              generic leadership advice. The specific patterns holding you back,
              explained in terms you can act on immediately.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors"
            >
              Listen Now
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right - Episode list */}
          <div className="space-y-3">
            {episodes.map((episode, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo/5 group-hover:bg-indigo/10 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg
                    className="w-4 h-4 text-indigo ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${episode.color} mb-1`}
                  >
                    {episode.archetype}
                  </span>
                  <p className="text-sm font-medium text-foreground truncate">
                    {episode.title}
                  </p>
                </div>

                <span className="text-xs text-foreground/40 flex-shrink-0">
                  {episode.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
