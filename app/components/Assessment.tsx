export default function Assessment() {
  return (
    <section id="assessment" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky mb-4 block">
              The Assessment
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
              50 questions. Six dimensions. One pattern you can act on today.
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8">
              This isn&apos;t a personality test. It measures the specific
              decision-making pattern that shows up when you&apos;re under
              pressure, navigating politics, or deciding how visible to be.
              Grounded in hundreds of real coaching conversations with leaders
              who were performing well but stuck in place.
            </p>

            <a
              href="/assessment"
              className="inline-flex items-center px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors"
            >
              Start the Assessment
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right side - Feature list */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-sky"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  10 minutes
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Thoughtful questions across six leadership dimensions. No
                  filler.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-sky"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  Private and confidential
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Your results are yours. No one sees them unless you choose to
                  share.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-sky"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                  Personalized to your pattern
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Not generic feedback. A specific archetype with specific next
                  steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
