export default function CTABanner() {
  return (
    <section className="relative bg-indigo py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,173,239,0.15),transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4">
          Name the pattern. Change the{" "}
          <em className="text-sky italic">narrative</em>.
        </h2>
        <p className="text-white/70 text-lg mb-8">
          There&apos;s a narrative forming about you in rooms you&apos;re not
          in. Your pattern under pressure is writing it.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/assessment"
            className="inline-flex items-center px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors"
          >
            Take the Assessment
            <span className="ml-2">→</span>
          </a>
          <a
            href="#podcast"
            className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 transition-colors"
          >
            Listen to the Podcast
          </a>
        </div>
      </div>
    </section>
  );
}
