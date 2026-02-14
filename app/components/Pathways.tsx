const pathways = [
  {
    title: "The Podcast",
    price: "Free, Always",
    description:
      "Short episodes organized by archetype. The specific language, frameworks, and tension points for your pattern, not generic leadership content.",
    cta: "Listen Now",
    ctaHref: "#podcast",
    featured: false,
    badge: null,
  },
  {
    title: "The Decision Room",
    price: "$200 per session",
    description:
      "A private, 1:1 session to work a real decision through your archetype pattern. Not advice. Better judgment. One session, one decision, real clarity.",
    cta: "Book a Session",
    ctaHref: "#",
    featured: true,
    badge: "Most Popular",
  },
  {
    title: "Decision Labs",
    price: "Custom, For Teams",
    description:
      "Map your leadership team's archetypes together. Build shared language for how you make decisions and where patterns collide.",
    cta: "Learn More",
    ctaHref: "#",
    featured: false,
    badge: null,
  },
];

export default function Pathways() {
  return (
    <section id="solutions" className="bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky mb-4 block">
            Go Deeper
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            Start free. Go deeper when you&apos;re ready.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pathways.map((pathway, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-xl border overflow-hidden hover:shadow-lg transition-shadow ${
                pathway.featured
                  ? "border-sky shadow-md ring-1 ring-sky/20"
                  : "border-gray-200"
              }`}
            >
              {/* Photo placeholder */}
              <div
                className={`h-44 ${
                  pathway.featured
                    ? "bg-gradient-to-br from-sky/10 to-indigo/10"
                    : "bg-gradient-to-br from-ice-blue to-lavender/10"
                }`}
              />

              {pathway.badge && (
                <span className="absolute top-4 right-4 bg-sky text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {pathway.badge}
                </span>
              )}

              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  {pathway.title}
                </h3>
                <p className="text-sky font-medium text-sm mb-4">
                  {pathway.price}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {pathway.description}
                </p>
                <a
                  href={pathway.ctaHref}
                  className={`inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    pathway.featured
                      ? "bg-indigo text-white hover:bg-indigo/90"
                      : "border border-indigo/20 text-indigo hover:border-indigo/40"
                  }`}
                >
                  {pathway.cta}
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
