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

          {/* Right column - Report Showcase */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex-shrink-0 w-full max-w-[560px] lg:max-w-none lg:w-[540px]">
              <div
                className="rounded-2xl p-10 pb-8"
                style={{
                  background: "linear-gradient(135deg, #151D4F 0%, #2a388f 100%)",
                  boxShadow: "0 16px 48px rgba(42,56,143,0.2)",
                }}
              >
                {/* Four mini report pages */}
                <div className="flex justify-center gap-4">
                  {/* Page 1: Cover */}
                  <div
                    className="w-[110px] md:w-[140px] h-[145px] md:h-[185px] bg-white rounded-md overflow-hidden"
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
                  >
                    <div className="h-1/2 bg-[#2a388f] flex flex-col items-center justify-center p-2.5 text-center">
                      <span className="text-[#00b8fb] text-sm mb-1">◇</span>
                      <span className="font-serif text-[8px] text-white leading-tight">
                        The Over-Prepared Strategist
                      </span>
                      <span className="text-[6px] text-[#00b8fb] italic mt-0.5">
                        &ldquo;How visible can I be?&rdquo;
                      </span>
                    </div>
                    <div className="p-2.5 text-center">
                      <div className="text-[6px] uppercase tracking-wider text-[#7A8098] mb-1">
                        Prepared for
                      </div>
                      <div className="text-[8px] font-bold text-[#1E2548]">Your Name Here</div>
                    </div>
                  </div>

                  {/* Page 2: Your Pattern */}
                  <div
                    className="hidden md:block w-[140px] h-[185px] bg-white rounded-md overflow-hidden"
                    style={{
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                      transform: "translateY(-8px)",
                    }}
                  >
                    <div className="flex justify-between px-2.5 pt-2.5">
                      <span className="text-[5px] uppercase tracking-wide text-[#7A8098]">
                        Assessment Report
                      </span>
                      <span className="text-[5px] text-[#7A8098]">2</span>
                    </div>
                    <div className="px-2.5 pt-2">
                      <div className="text-[7px] font-bold text-[#2a388f] mb-1.5">Your Pattern</div>
                      {[100, 100, 80, 100, 70].map((w, i) => (
                        <div
                          key={`p2a-${i}`}
                          className="h-[2px] bg-gray-200 rounded-sm mb-[3px]"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                      <div className="h-1.5" />
                      {[100, 90, 100, 80].map((w, i) => (
                        <div
                          key={`p2b-${i}`}
                          className="h-[2px] bg-gray-200 rounded-sm mb-[3px]"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Page 3: Dimensions */}
                  <div
                    className="w-[110px] md:w-[140px] h-[145px] md:h-[185px] bg-white rounded-md overflow-hidden"
                    style={{
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                      transform: "translateY(-4px)",
                    }}
                  >
                    <div className="flex justify-between px-2.5 pt-2.5">
                      <span className="text-[5px] uppercase tracking-wide text-[#7A8098]">
                        Assessment Report
                      </span>
                      <span className="text-[5px] text-[#7A8098]">3</span>
                    </div>
                    <div className="px-2.5 pt-2">
                      <div className="text-[7px] font-bold text-[#2a388f] mb-1.5">Dimensions</div>
                      {[60, 70, 50, 58, 45, 65].map((w, i) => (
                        <div key={`p3a-${i}`} className="flex items-center gap-1 mb-[3px]">
                          <div className="h-[1.5px] w-7 bg-gray-200 rounded-sm" />
                          <div className="h-[2px] flex-1 bg-gray-100 rounded-sm overflow-hidden">
                            <div
                              className="h-full rounded-sm"
                              style={{
                                width: `${w}%`,
                                background: "rgba(0, 184, 251, 0.5)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                      <div className="h-1.5" />
                      {[100, 80, 90, 100, 70, 85, 100, 60].map((w, i) => (
                        <div
                          key={`p3b-${i}`}
                          className="h-[1.5px] bg-gray-200 rounded-sm mb-[2px]"
                          style={{ width: `${w * 0.9}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Page 4: What To Do */}
                  <div
                    className="hidden md:block w-[140px] h-[185px] bg-white rounded-md overflow-hidden"
                    style={{
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                      transform: "translateY(4px)",
                    }}
                  >
                    <div className="flex justify-between px-2.5 pt-2.5">
                      <span className="text-[5px] uppercase tracking-wide text-[#7A8098]">
                        Assessment Report
                      </span>
                      <span className="text-[5px] text-[#7A8098]">4</span>
                    </div>
                    <div className="px-2.5 pt-2">
                      <div className="text-[7px] font-bold text-[#2a388f] mb-1.5">What To Do</div>
                      <div className="text-[6px] italic text-[#4A5068] leading-snug mb-2">
                        &ldquo;Say the next true thing.&rdquo;
                      </div>
                      {[100, 90, 70].map((w, i) => (
                        <div
                          key={`p4a-${i}`}
                          className="h-[2px] bg-gray-200 rounded-sm mb-[3px]"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                      <div className="h-2" />
                      <div className="bg-[#F0F7FF] rounded-sm p-1.5">
                        {[100, 80, 90].map((w, i) => (
                          <div
                            key={`p4b-${i}`}
                            className="h-[1.5px] rounded-sm mb-[2px]"
                            style={{
                              width: `${w}%`,
                              background: "rgba(42, 56, 143, 0.15)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-center text-[11px] mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Your complete 5-page leadership assessment report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
