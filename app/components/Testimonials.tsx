const testimonials = [
  {
    quote:
      "I've taken every assessment out there. This is the first one that told me why I kept getting passed over instead of what I was good at. That's the difference.",
    name: "Senior Director, Operations",
    detail: "Passed over twice before naming her pattern",
  },
  {
    quote:
      "The Decision Room gave me more perspective in 60 minutes than six months of going back and forth in my own head. I made the call the next day and got the role three months later.",
    name: "Director of Product",
    detail: "Promoted to VP within the quarter",
  },
  {
    quote:
      "We mapped our team's archetypes and finally understood why our leadership meetings felt like everyone was absorbing and no one was deciding.",
    name: "VP of People",
    detail: "200-person organization",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ice-blue py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16">
          What People Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <span className="text-sky/30 text-5xl font-serif leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-medium text-sm text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-foreground/50 mt-0.5">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
