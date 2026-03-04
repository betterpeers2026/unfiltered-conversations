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

            {/* Assessment preview card */}
            <div
              className="absolute -bottom-8 right-0 lg:-right-20 overflow-hidden"
              style={{
                width: 360,
                background: "#fff",
                borderRadius: 16,
                boxShadow:
                  "0 12px 48px rgba(42,56,143,0.15), 0 2px 8px rgba(0,0,0,0.06)",
                border: "1px solid #D8E0EA",
              }}
            >
              {/* Royal header */}
              <div
                className="text-center"
                style={{ background: "#2a388f", padding: "22px 26px" }}
              >
                <p
                  className="uppercase"
                  style={{
                    fontSize: 7,
                    letterSpacing: 2,
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 8,
                  }}
                >
                  Sample Result
                </p>
                <p style={{ fontSize: 22, color: "#00b8fb", marginBottom: 6 }}>
                  ◇
                </p>
                <p
                  className="font-serif"
                  style={{ fontSize: 15, color: "#fff", marginBottom: 4 }}
                >
                  The Over-Prepared Strategist
                </p>
                <p
                  className="font-serif italic"
                  style={{ fontSize: 11, color: "#00b8fb" }}
                >
                  &ldquo;How visible can I be?&rdquo;
                </p>
              </div>

              {/* Six Dimensions */}
              <div style={{ padding: "22px 26px 18px" }}>
                <p
                  className="uppercase"
                  style={{
                    fontSize: 9,
                    letterSpacing: 2,
                    color: "#7A8098",
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Six Dimensions
                </p>
                {[
                  { name: "Strategic Visibility", score: "2.2", pct: 44 },
                  { name: "Political Acumen", score: "3.1", pct: 62 },
                  { name: "Assertive Communication", score: "2.5", pct: 50 },
                  { name: "Decision Velocity", score: "2.0", pct: 40 },
                  { name: "Network Architecture", score: "1.8", pct: 36 },
                  { name: "Operational Load", score: "3.8", pct: 76 },
                ].map((d) => (
                  <div key={d.name} style={{ marginBottom: 10 }}>
                    <div
                      className="flex justify-between items-baseline"
                      style={{ marginBottom: 4 }}
                    >
                      <span style={{ fontSize: 11, fontWeight: 500, color: "#1E2548" }}>
                        {d.name}
                      </span>
                      <span style={{ fontSize: 9, color: "#7A8098" }}>
                        {d.score}
                      </span>
                    </div>
                    <div style={{ height: 4, background: "#ebf6fb", borderRadius: 2 }}>
                      <div
                        style={{
                          width: `${d.pct}%`,
                          height: "100%",
                          borderRadius: 2,
                          background: "linear-gradient(90deg, #00b8fb, #33C9FC)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Blurred teaser */}
              <div style={{ padding: "0 26px 22px" }}>
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: 10,
                    padding: "14px 18px",
                    background: "#F4F6FA",
                  }}
                >
                  <div
                    style={{
                      filter: "blur(4px)",
                      userSelect: "none",
                      WebkitUserSelect: "none",
                    }}
                  >
                    <p style={{ fontSize: 10, fontWeight: 600, color: "#1E2548", marginBottom: 4 }}>
                      Core Strength
                    </p>
                    <p style={{ fontSize: 11, color: "#4A5068", lineHeight: 1.5 }}>
                      You see what others miss. While people around you react,
                      you&apos;re already three steps ahead...
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#2a388f",
                        background: "rgba(255,255,255,0.92)",
                        padding: "5px 14px",
                        borderRadius: 6,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                      }}
                    >
                      In your full report
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
