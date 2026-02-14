"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is a leadership archetype?",
    answer:
      "A leadership archetype is a recurring decision-making pattern that shows up under pressure. It's not a personality type. It's the default way you respond to uncertainty, navigate power, and make high-stakes calls.",
  },
  {
    question: "Is this a scientifically validated assessment?",
    answer:
      "Grounded in practical organizational behavior and patterns from hundreds of real coaching conversations, not academic psychological research. A simpler, more actionable alternative to traditional assessments. Think Working Genius or Enneagram: useful, grounded, immediately applicable.",
  },
  {
    question: "Who is this for?",
    answer:
      'Senior managers, directors, and high-performing leaders who deliver results but can\'t seem to break through to the next level. If you\'ve been told you\'re "not ready" without explanation, passed over for a role you were qualified for, or keep performing well without advancing.',
  },
  {
    question: "What happens in a Decision Room session?",
    answer:
      "You bring a real decision. We work it through your archetype pattern. 60-minute session + 30-minute follow-up + written decision summary.",
  },
  {
    question: "Can I use this with my team?",
    answer:
      "Yes. Decision Labs map team archetypes and build shared decision-making vocabulary. Virtual or on-site.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-foreground/40 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-foreground/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
