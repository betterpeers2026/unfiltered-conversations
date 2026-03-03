export type ReportData = {
  userName: string;
  date: string;
  assessmentId: string;
  primaryTitle: string;
  primaryTagline: string;
  secondaryTitle: string;
  secondaryTagline: string;
  secondaryDesc: string;
  currentLevel: string;
  promotionRisk: string;
  developmentLever: string;
  decisionPrinciple: string;
  summaryParagraph: string;
  coreStrength: string;
  areasOfGrowth: string;
  costStatement: string;
  howOthersSeeYou: string;
  overuseRisk: string;
  tension: string;
  powerStyle: string;
  pressureResponse: string;
  primaryRisk: string;
  dimensions: Array<{
    name: string;
    score: number;
    maxScore: number;
    label: string;
    description: string;
  }>;
  tendencies: string[];
  misreadIntro: string;
  misreadOutro: string;
  misreadMetrics: Array<{
    label: string;
    value: string;
  }>;
  firstMove: string;
  roadmap: Array<{
    monthTitle: string;
    items: string[];
  }>;
  grandfatherNote: string;
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const CALENDLY_URL = "https://calendly.com/trevor-uc/decision-room";

export function generateReportHTML(data: ReportData): string {
  const e = (s: string) => escapeHtml(s);

  // Build dimension HTML for page 3
  const dimensionsHtml = data.dimensions
    .map((dim) => {
      const pct = Math.round((dim.score / dim.maxScore) * 100);
      return `
            <div class="dim">
              <div class="dim-header">
                <span class="dim-name">${e(dim.name)}</span>
                <span class="dim-score">${dim.score.toFixed(1)} / ${dim.maxScore.toFixed(1)}</span>
              </div>
              <div class="dim-track"><div class="dim-fill" style="width:${pct}%"></div></div>
              <div class="dim-label">${e(dim.label)}</div>
              <div class="dim-desc">${e(dim.description)}</div>
            </div>`;
    })
    .join("");

  // Build tendencies HTML for page 4
  const tendenciesHtml = data.tendencies
    .map((t) => `<div class="tendency">${e(t)}</div>`)
    .join("");

  // Build misread metrics for page 4
  const misreadMetricsHtml = data.misreadMetrics
    .map(
      (m) =>
        `<div class="metric-card">
                <div class="metric-label">${e(m.label)}</div>
                <div class="metric-value">${e(m.value)}</div>
              </div>`
    )
    .join("");

  // Build roadmap for page 5
  const roadmapHtml = data.roadmap
    .map(
      (month) =>
        `<div class="roadmap-month">
              <div class="roadmap-title">${e(month.monthTitle)}</div>
              ${month.items.map((item) => `<div class="roadmap-item">${e(item)}</div>`).join("")}
            </div>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leadership Assessment Report</title>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Reset */
    *{margin:0;padding:0;box-sizing:border-box}

    /* Base */
    body{font-family:'DM Sans',sans-serif;background:#fff;color:#1a1a2e;line-height:1.6;font-weight:400;-webkit-font-smoothing:antialiased}
    .serif{font-family:'Libre Baskerville',serif}

    /* Page container */
    .page{width:816px;height:1056px;background:#fff;margin:0 auto;position:relative;overflow:hidden}
    .page>*{position:relative;z-index:1}

    /* Watermark on content pages */
    .page-content::after{content:"\\25C7";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:400px;color:rgba(45,58,140,.03);pointer-events:none;z-index:0}

    /* ===== PAGE 1: COVER ===== */
    .cover{display:flex;flex-direction:column}
    .cover::after{display:none}

    .conf-bar{background:#1a1a2e;padding:10px 40px;display:flex;justify-content:space-between;align-items:center;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.7)}

    .cover-hero{background:#2D3A8C;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:60px;position:relative}
    .cover-logo{position:absolute;top:40px;left:50%;transform:translateX(-50%)}
    .cover-symbol{font-size:48px;color:#22D3EE;margin-bottom:24px}
    .cover-title{font-family:'Libre Baskerville',serif;font-size:38px;font-weight:700;color:#fff;margin-bottom:12px;line-height:1.15}
    .cover-tagline{font-family:'Libre Baskerville',serif;font-size:20px;font-style:italic;color:#22D3EE}
    .cover-pill{display:inline-block;margin-top:20px;padding:8px 18px;font-size:11px;letter-spacing:.5px;color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.25);border-radius:2px}

    .cover-bottom{height:45%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
    .cover-for{font-size:10px;text-transform:uppercase;letter-spacing:3px;color:#999;margin-bottom:8px}
    .cover-name{font-size:28px;font-weight:700;color:#1a1a2e;margin-bottom:6px}
    .cover-date{font-size:14px;color:#666;margin-bottom:24px}
    .cover-note{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#999;line-height:1.8;margin-bottom:40px}
    .cover-url{font-size:12px;color:#bbb}

    /* ===== SHARED CONTENT PAGE ELEMENTS ===== */
    .content{padding:56px 64px 72px}

    .pg-header{font-size:9px;text-transform:uppercase;letter-spacing:2px;color:#bbb;margin-bottom:40px;display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:16px}

    .pg-footer{position:absolute;bottom:32px;left:64px;right:64px;display:flex;justify-content:space-between;font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:#ccc}

    .section{margin-bottom:32px}
    .section-label{font-size:16px;font-weight:600;color:#2D3A8C;margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px;padding-left:16px;border-left:3px solid #22D3EE}
    .section-body{font-size:14px;line-height:1.8;color:#444}

    /* ===== PAGE 2: EXECUTIVE SUMMARY ===== */
    .exec-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 28px}
    .exec-card{background:#F8FAFC;padding:14px 18px;border-left:2px solid #22D3EE}
    .exec-card-label{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:#888;margin-bottom:4px}
    .exec-card-value{font-size:13px;color:#1a1a2e;font-weight:500;line-height:1.4}

    .summary-box{background:#F0F7FF;padding:24px 28px;font-size:14px;line-height:1.8;color:#2D3A8C;margin-top:8px;margin-bottom:32px}

    /* ===== PAGE 3: DIAGNOSTIC + DIMENSIONS ===== */
    .profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px}
    .profile-card{background:#F8FAFC;padding:14px 18px}
    .profile-card-label{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:#888;margin-bottom:4px}
    .profile-card-value{font-size:13px;color:#1a1a2e;line-height:1.4}

    .dim-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px 40px;margin-top:12px}
    .dim{padding-bottom:18px;border-bottom:1px solid #f0f0f0}
    .dim-header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
    .dim-name{font-size:13px;font-weight:600;color:#1a1a2e}
    .dim-score{font-size:11px;color:#999}
    .dim-track{height:4px;background:#E8E8E8;border-radius:2px;margin-bottom:6px}
    .dim-fill{height:100%;background:linear-gradient(90deg,#22D3EE,#2D3A8C);border-radius:2px}
    .dim-label{font-size:11px;font-weight:600;color:#2D3A8C}
    .dim-desc{font-size:12px;color:#666;line-height:1.4;margin-top:4px}

    /* ===== PAGE 4: TENDENCIES + MISREAD + SECONDARY ===== */
    .tendency-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 32px;margin-top:12px}
    .tendency{font-size:13px;color:#444;padding:7px 0;border-bottom:1px solid #f5f5f5}

    .misread-box{background:#F8FAFC;padding:20px 24px;margin-top:12px}
    .misread-intro{font-size:13px;color:#555;margin-bottom:12px}
    .metric-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px}
    .metric-card{text-align:center;padding:12px;background:#fff}
    .metric-label{font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:4px}
    .metric-value{font-size:14px;font-weight:600;color:#1a1a2e}
    .misread-outro{font-size:12px;color:#666;font-style:italic;margin-top:10px}

    .secondary-box{background:#F8FAFC;padding:20px 24px;margin-top:12px}
    .secondary-name{font-size:15px;font-weight:700;color:#1a1a2e;display:inline}
    .secondary-tagline{font-family:'Libre Baskerville',serif;font-size:14px;font-style:italic;color:#2D3A8C;display:inline;margin-left:8px}
    .secondary-desc{font-size:13px;color:#555;line-height:1.6;margin-top:10px}

    /* ===== PAGE 5: ACTION + ROADMAP + CLOSING ===== */
    .action-page .content{display:flex;flex-direction:column;height:calc(1056px - 0px)}

    .action-section{margin-bottom:32px}
    .action-label{font-size:16px;font-weight:600;color:#2D3A8C;margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px}
    .principle-text{font-family:'Libre Baskerville',serif;font-size:15px;color:#444;line-height:1.7}
    .move-text{font-size:15px;color:#444;line-height:1.7}

    .roadmap{margin-top:8px}
    .roadmap-month{margin-bottom:20px;padding-left:20px;border-left:2px solid #22D3EE}
    .roadmap-title{font-size:13px;font-weight:600;color:#2D3A8C;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}
    .roadmap-item{font-size:13px;color:#444;line-height:1.7;padding:2px 0}

    .gf-box{background:#F0F7FF;padding:28px 32px;margin-top:auto;margin-bottom:24px}
    .gf-text{font-family:'Libre Baskerville',serif;font-size:15px;color:#2D3A8C;line-height:1.65;text-align:center}

    .closing{text-align:center;padding-top:32px;border-top:1px solid #eee;margin-top:auto}
    .closing-heading{font-family:'Libre Baskerville',serif;font-size:22px;color:#1a1a2e;margin-bottom:12px}
    .closing-offer{font-size:15px;color:#555;margin-bottom:6px;line-height:1.6}
    .closing-details{font-size:13px;color:#888;margin-bottom:28px;line-height:1.6}
    .closing-cta{display:inline-block;background:#2D3A8C;color:#fff;padding:14px 40px;font-size:14px;font-weight:600;text-decoration:none;font-family:'DM Sans',sans-serif}
    .closing-price{margin-top:16px;font-size:13px;color:#999}
    .closing-footer{margin-top:20px;font-size:12px;color:#bbb}

    .methodology{margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:10px;color:#aaa;line-height:1.6;text-align:center}
    .methodology-label{font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:#bbb;margin-bottom:4px}

    /* Print */
    @media print{
      body{background:#fff;padding:0}
      .page{margin:0;box-shadow:none;page-break-after:always}
    }
  </style>
</head>
<body>

  <!-- ==================== PAGE 1: COVER ==================== -->
  <div class="page cover">
    <div class="conf-bar">
      <span>Confidential</span>
      <span>Assessment ID: ${e(data.assessmentId)}</span>
    </div>
    <div class="cover-hero">
      <svg class="cover-logo" width="160" height="40" viewBox="0 0 160 40" fill="none">
        <text x="50%" y="14" fill="white" font-family="DM Sans, sans-serif" font-size="10" font-weight="600" letter-spacing="1.5" text-anchor="middle">UNFILTERED</text>
        <text x="50%" y="32" fill="white" font-family="DM Sans, sans-serif" font-size="14" font-weight="700" text-anchor="middle">CONVERSATIONS</text>
      </svg>
      <div class="cover-symbol">&#9671;</div>
      <h1 class="cover-title">${e(data.primaryTitle)}</h1>
      <p class="cover-tagline">"${e(data.primaryTagline)}"</p>
      <div style="text-align:center">
        <span class="cover-pill">Secondary: <b>${e(data.secondaryTitle)}</b></span>
      </div>
    </div>
    <div class="cover-bottom">
      <p class="cover-for">Prepared Exclusively For</p>
      <p class="cover-name">${e(data.userName)}</p>
      <p class="cover-date">${e(data.date)}</p>
      <div class="cover-note">Confidential Executive Assessment<br>For Internal Development Use Only</div>
      <p class="cover-url">unfilteredconversations.com</p>
    </div>
  </div>

  <!-- ==================== PAGE 2: EXECUTIVE SUMMARY ==================== -->
  <div class="page page-content">
    <div class="content">
      <div class="pg-header">
        <span>Confidential Executive Assessment</span>
        <span>${e(data.userName)}</span>
      </div>

      <div class="section">
        <div class="section-label">Executive Summary</div>
        <div class="exec-grid">
          <div class="exec-card"><div class="exec-card-label">Primary Archetype</div><div class="exec-card-value">${e(data.primaryTitle)}</div></div>
          <div class="exec-card"><div class="exec-card-label">Secondary Influence</div><div class="exec-card-value">${e(data.secondaryTitle)}</div></div>
          <div class="exec-card"><div class="exec-card-label">Current Leadership Level</div><div class="exec-card-value">${e(data.currentLevel)}</div></div>
          <div class="exec-card"><div class="exec-card-label">Promotion Readiness Risk</div><div class="exec-card-value">${e(data.promotionRisk)}</div></div>
          <div class="exec-card"><div class="exec-card-label">Primary Development Lever</div><div class="exec-card-value">${e(data.developmentLever)}</div></div>
          <div class="exec-card"><div class="exec-card-label">Decision Principle</div><div class="exec-card-value">${e(data.decisionPrinciple)}</div></div>
        </div>
        <div class="summary-box">${e(data.summaryParagraph)}</div>
      </div>

      <div class="section">
        <div class="section-label">Core Strength</div>
        <p class="section-body">${e(data.coreStrength)}</p>
      </div>

      <div class="section">
        <div class="section-label">Areas of Growth</div>
        <p class="section-body">${e(data.areasOfGrowth)}</p>
      </div>

      <div class="section">
        <div class="section-label">What This Pattern Is Costing You</div>
        <p class="section-body">${e(data.costStatement)}</p>
      </div>

      <div class="section">
        <div class="section-label">How Others Currently Perceive You</div>
        <p class="section-body">${e(data.howOthersSeeYou)}</p>
      </div>

      <div class="section">
        <div class="section-label">Overuse Risk</div>
        <p class="section-body">${e(data.overuseRisk)}</p>
      </div>

      <div class="pg-footer">
        <span>Unfiltered Conversations</span>
        <span>Page 2 of 5</span>
        <span>Confidential</span>
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 3: DIAGNOSTIC + DIMENSIONS ==================== -->
  <div class="page page-content">
    <div class="content">
      <div class="pg-header">
        <span>Confidential Executive Assessment</span>
        <span>${e(data.userName)}</span>
      </div>

      <div class="section">
        <div class="section-label">Diagnostic Profile</div>
        <div class="profile-grid">
          <div class="profile-card"><div class="profile-card-label">Core Tension</div><div class="profile-card-value">${e(data.tension)}</div></div>
          <div class="profile-card"><div class="profile-card-label">Power Style</div><div class="profile-card-value">${e(data.powerStyle)}</div></div>
          <div class="profile-card"><div class="profile-card-label">Under Pressure</div><div class="profile-card-value">${e(data.pressureResponse)}</div></div>
          <div class="profile-card"><div class="profile-card-label">Primary Risk</div><div class="profile-card-value">${e(data.primaryRisk)}</div></div>
        </div>
      </div>

      <div class="section">
        <div class="section-label">Six Leadership Dimensions</div>
        <div class="dim-grid">
          ${dimensionsHtml}
        </div>
      </div>

      <div class="pg-footer">
        <span>Unfiltered Conversations</span>
        <span>Page 3 of 5</span>
        <span>Confidential</span>
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 4: TENDENCIES + MISREAD + SECONDARY ==================== -->
  <div class="page page-content">
    <div class="content">
      <div class="pg-header">
        <span>Confidential Executive Assessment</span>
        <span>${e(data.userName)}</span>
      </div>

      <div class="section">
        <div class="section-label">Observed Executive Tendencies</div>
        <div class="tendency-grid">
          ${tendenciesHtml}
        </div>
      </div>

      <div class="section">
        <div class="section-label">Executive Interpretation Risk</div>
        <div class="misread-box">
          <p class="misread-intro">${e(data.misreadIntro)}</p>
          <div class="metric-grid">
            ${misreadMetricsHtml}
          </div>
          <p class="misread-outro">${e(data.misreadOutro)}</p>
        </div>
      </div>

      <div class="section">
        <div class="section-label">Secondary Pattern Influence</div>
        <div class="secondary-box">
          <span class="secondary-name">${e(data.secondaryTitle)}</span>
          <span class="secondary-tagline">"${e(data.secondaryTagline)}"</span>
          <p class="secondary-desc">${e(data.secondaryDesc)}</p>
        </div>
      </div>

      <div class="pg-footer">
        <span>Unfiltered Conversations</span>
        <span>Page 4 of 5</span>
        <span>Confidential</span>
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 5: ACTION + ROADMAP + CLOSING ==================== -->
  <div class="page page-content action-page">
    <div class="content">
      <div class="pg-header">
        <span>Confidential Executive Assessment</span>
        <span>${e(data.userName)}</span>
      </div>

      <div class="action-section">
        <div class="action-label">Your Decision Principle</div>
        <p class="principle-text">"${e(data.decisionPrinciple)}."</p>
      </div>

      <div class="action-section">
        <div class="action-label">Your First Move</div>
        <p class="move-text">${e(data.firstMove)}</p>
      </div>

      <div class="action-section">
        <div class="action-label">90-Day Activation Plan</div>
        <div class="roadmap">
          ${roadmapHtml}
        </div>
      </div>

      <div class="gf-box">
        <p class="gf-text">"${e(data.grandfatherNote)}"</p>
      </div>

      <div class="closing">
        <p class="closing-heading">Now you see the pattern. What you do next is yours.</p>
        <p class="closing-offer">If you want to talk through your results, I'm available.</p>
        <p class="closing-details">60 minutes. Your report. Your situation. No pitch, no program. Just the conversation.</p>
        <a href="${CALENDLY_URL}" class="closing-cta">Book a Session</a>
        <p class="closing-price">$200  ·  Includes follow-up</p>
        <p class="closing-footer">unfilteredconversations.com</p>
        <div class="methodology">
          <div class="methodology-label">Methodology</div>
          This assessment is based on the Unfiltered Conversations Leadership Signal Model, measuring six dimensions across strategic visibility, political acuity, assertive communication, decision velocity, network architecture, and operational load. Developed from 500+ leadership coaching engagements.
        </div>
      </div>

      <div class="pg-footer">
        <span>Unfiltered Conversations</span>
        <span>Page 5 of 5</span>
        <span>Confidential</span>
      </div>
    </div>
  </div>

</body>
</html>`;
}
