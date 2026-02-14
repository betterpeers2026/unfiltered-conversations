export default function Founder() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo left */}
          <div className="aspect-[3/4] max-h-[520px] rounded-xl overflow-hidden">
            <img
              src="/founder-photo.jpg"
              alt="Trevor, Founder of Unfiltered Conversations"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text right */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky mb-4 block">
              The story behind the framework
            </span>

            <blockquote className="border-l-4 border-sky pl-6 my-6">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic">
                &ldquo;I kept seeing the same five patterns. Directors passed
                over. Senior managers told they &lsquo;weren&apos;t
                ready.&rsquo; High performers stuck, not because they lacked
                ability, but because they couldn&apos;t{" "}
                <em>name</em> what was driving their
                decisions.&rdquo;
              </p>
            </blockquote>

            <p className="text-foreground/70 leading-relaxed mb-4">
              The framework behind Unfiltered Conversations didn&apos;t come
              from a lab or a textbook. It came from hundreds of real coaching
              conversations with leaders who were performing well but stuck in
              place. The same patterns kept surfacing. Five distinct ways that
              capable people unknowingly limit their own trajectory.
            </p>

            <p className="text-foreground/70 leading-relaxed mb-8">
              This work is grounded in 15 years of organizational behavior
              practice, studying how people navigate power, make decisions under
              pressure, and communicate in high-stakes environments. The
              archetypes aren&apos;t theoretical. They&apos;re lived.
            </p>

            <div>
              <p className="font-serif text-lg font-bold text-foreground">
                Trevor Jenkins
              </p>
              <p className="text-sm text-foreground/50">
                MPM, MDiv, SHRM-CP, PHR
              </p>
              <p className="text-sm text-foreground/50">
                Founder, Unfiltered Conversations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}