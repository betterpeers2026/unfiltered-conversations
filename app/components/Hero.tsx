"use client";

import { useState, useEffect } from "react";

const rotatingWords = ["trajectory", "decisions", "narrative", "career", "leadership"];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-ice-blue/50 to-sky/5">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left column */}
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Name the pattern.
              <br />
              Change your{" "}
              <span className="inline-block overflow-hidden align-bottom h-[1.2em]">
                <span
                  className={`inline-block text-sky italic transition-all duration-400 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                >
                  {rotatingWords[currentIndex]}.
                </span>
              </span>
            </h1>

            <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-lg">
              There&apos;s a narrative forming about you in rooms you&apos;re not
              in. Your default pattern under pressure is writing it. Name the
              pattern, change the narrative.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <a
                href="/assessment"
                className="inline-flex items-center px-6 py-3 bg-indigo text-white font-medium rounded-lg hover:bg-indigo/90 transition-colors"
              >
                Take the Assessment
                <span className="ml-2">→</span>
              </a>
              <a
                href="#podcast"
                className="inline-flex items-center px-6 py-3 border border-indigo/20 text-indigo font-medium rounded-lg hover:border-indigo/40 transition-colors"
              >
                Listen to the Podcast
              </a>
            </div>

            <p className="text-sm text-foreground/50">
              50 questions · 10 minutes · Personalized report available
            </p>
          </div>

          {/* Right column */}
          <div className="relative lg:-ml-8">
            <div className="w-[340px] h-[420px] mx-auto lg:mr-auto rounded-[14px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <img
                src="/hero-photo.jpg"
                alt="Unfiltered Conversations"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Assessment result card */}
            <div className="absolute -bottom-8 right-0 lg:-right-20 w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-indigo px-4 py-2.5">
                <span className="text-white text-sm font-medium">
                  Your Pattern
                </span>
              </div>

              <div className="px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-sky">
                  Your Archetype
                </span>
                <p className="font-serif font-bold text-foreground mt-1 text-[15px]">
                  The Over-Relied-On Stabilizer
                </p>
                <p className="font-serif italic text-sky text-sm mt-1">
                  &ldquo;How much can I carry?&rdquo;
                </p>

                <div className="border-t border-gray-100 mt-3 pt-3 space-y-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-foreground/40 block">
                      Your tension
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Reliability vs. growth
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-foreground/40 block">
                      Blind spot
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Saying yes to avoid conflict
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wide text-foreground/40 block">
                      Growth edge
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      Let something drop on purpose
                    </span>
                  </div>
                </div>

                <a
                  href="/assessment"
                  className="text-sky text-xs font-medium mt-3 block hover:underline"
                >
                  See your full archetype breakdown →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
