const options = [
  "Map out every scenario before making a move",
  "Take on more to make sure nothing falls apart",
  "Name what's broken and push to fix it",
  "Explore new options and keep my choices open",
  "Reflect and wait until I'm sure of the right path",
];

export default function Assessment() {
  return (
    <section id="assessment" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky mb-4 block">
              The Clarity Assessment
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Five questions. 90 seconds. A pattern you can act on today.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              This diagnostic isn&apos;t about personality. It&apos;s about the
              specific pattern driving your decisions under pressure, and why it
              might be keeping you from the role, the influence, or the impact
              you&apos;re capable of.
            </p>

            <div className="bg-surface border-l-4 border-sky rounded-r-lg px-6 py-4 mb-8">
              <p className="text-foreground/70 text-sm leading-relaxed">
                Not a personality test. Grounded in practical organizational
                behavior and patterns from hundreds of real coaching
                conversations. Simple, actionable, and built to apply to the
                decision on your desk right now.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors"
            >
              Start the Assessment
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right side - Assessment preview */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-indigo px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
                </svg>
                <span className="text-white font-medium">
                  The Five Archetypes
                </span>
              </div>
              <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                1 of 5
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-lg font-bold text-foreground mb-6">
                When you&apos;re under pressure at work, what&apos;s your first
                instinct?
              </h3>

              <div className="space-y-3">
                {options.map((option, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                      i === 1
                        ? "border-indigo bg-indigo/5"
                        : "border-gray-200"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        i === 1 ? "border-indigo" : "border-gray-300"
                      }`}
                    >
                      {i === 1 && (
                        <span className="w-2 h-2 rounded-full bg-indigo" />
                      )}
                    </span>
                    <span className="text-sm text-foreground/80">{option}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="flex items-center justify-between text-xs text-foreground/40 mb-2">
                <span>Progress</span>
                <span>Question 1 of 5</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/5 bg-sky rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
