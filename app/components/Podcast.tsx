export default function Podcast() {
  return (
    <section id="podcast" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              Short episodes built around real leadership patterns. Each one
              tackles a specific archetype, decision point, or workplace dynamic.
              Not theory. Not motivation. Just clarity.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors"
            >
              Listen Now
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right - Apple Podcasts embed */}
          <div className="flex justify-center">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                borderRadius: "10px",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.podcasts.apple.com/us/podcast/unfiltered-conversations/id1853633247"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
