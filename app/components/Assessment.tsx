import Image from "next/image";

const dimensions = [
  { name: "Strategic Visibility", score: "2.2", pct: 44 },
  { name: "Political Acumen", score: "3.1", pct: 62 },
  { name: "Assertive Communication", score: "2.5", pct: 50 },
  { name: "Decision Velocity", score: "2.0", pct: 40 },
  { name: "Network Architecture", score: "1.8", pct: 36 },
  { name: "Operational Load", score: "3.8", pct: 76 },
];

export default function Assessment() {
  return (
    <section id="assessment" className="bg-white py-20 lg:py-28 px-6 lg:px-10">
      <div
        className="mx-auto flex flex-col lg:flex-row items-center gap-12"
        style={{ maxWidth: 1060 }}
      >
        {/* Left Column */}
        <div className="flex-1 min-w-0">
          <span
            className="block uppercase font-semibold mb-4"
            style={{
              fontSize: 9,
              letterSpacing: 3,
              color: "#00b8fb",
              fontWeight: 600,
            }}
          >
            The Assessment + Report
          </span>

          <h2
            className="font-serif mb-4"
            style={{
              fontSize: 28,
              color: "#1E2548",
              lineHeight: 1.35,
            }}
          >
            See the pattern that&apos;s shaping your career.
          </h2>

          {/* Photo */}
          <div
            className="relative w-full overflow-hidden mb-7"
            style={{ height: 320, borderRadius: 14 }}
          >
            <Image
              src="/hero-photo.jpg"
              alt="Leadership assessment"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent 40%, rgba(244,246,250,0.4) 100%)",
              }}
            />
          </div>

          <p
            className="mb-6"
            style={{
              fontSize: 14,
              color: "#4A5068",
              lineHeight: 1.7,
            }}
          >
            50 questions across six leadership dimensions. Your complete
            five-page report with executive summary, scored dimensions,
            behavioral tendencies, and your decision principle.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="/assessment/instructions"
              className="inline-flex items-center gap-2"
              style={{
                background: "#2a388f",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Take the Assessment
              <span>→</span>
            </a>
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#2a388f",
              }}
            >
              $50
            </span>
          </div>
        </div>

        {/* Right Column - Preview Card */}
        <div
          className="flex-shrink-0 w-full lg:w-auto"
          style={{ marginTop: -40 }}
        >
          <div
            className="mx-auto lg:mx-0"
            style={{
              width: 360,
              maxWidth: "100%",
              background: "#fff",
              borderRadius: 16,
              boxShadow:
                "0 12px 48px rgba(42,56,143,0.15), 0 2px 8px rgba(0,0,0,0.06)",
              border: "1px solid #D8E0EA",
              overflow: "hidden",
            }}
          >
            {/* Card Header */}
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
              <p style={{ fontSize: 22, color: "#22D3EE", marginBottom: 6 }}>
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
                style={{ fontSize: 11, color: "#22D3EE" }}
              >
                &ldquo;How visible can I be?&rdquo;
              </p>
            </div>

            {/* Card Body - Six Dimensions */}
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

              {dimensions.map((d) => (
                <div key={d.name} style={{ marginBottom: 10 }}>
                  <div
                    className="flex justify-between items-baseline"
                    style={{ marginBottom: 4 }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: "#1E2548",
                      }}
                    >
                      {d.name}
                    </span>
                    <span style={{ fontSize: 9, color: "#7A8098" }}>
                      {d.score}
                    </span>
                  </div>
                  <div
                    style={{
                      height: 4,
                      background: "#ebf6fb",
                      borderRadius: 2,
                    }}
                  >
                    <div
                      style={{
                        width: `${d.pct}%`,
                        height: "100%",
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg, #00b8fb, #33C9FC)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer - Blurred Teaser */}
            <div style={{ padding: "0 26px 22px" }}>
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: 10,
                  padding: "14px 18px",
                  background: "#F4F6FA",
                }}
              >
                {/* Blurred content */}
                <div
                  style={{
                    filter: "blur(4px)",
                    userSelect: "none",
                    WebkitUserSelect: "none",
                  }}
                >
                  <p
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#1E2548",
                      marginBottom: 4,
                    }}
                  >
                    Core Strength
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#4A5068",
                      lineHeight: 1.5,
                    }}
                  >
                    You see what others miss. While people around you react,
                    you&apos;re already three steps ahead...
                  </p>
                </div>

                {/* Overlay label */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                >
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

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1023px) {
          #assessment > div > div:last-child { margin-top: 0 !important; }
        }
        @media (max-width: 767px) {
          #assessment h2 { font-size: 24px !important; }
          #assessment .relative[style*="height: 320"] { height: 240px !important; }
        }
      `}</style>
    </section>
  );
}
