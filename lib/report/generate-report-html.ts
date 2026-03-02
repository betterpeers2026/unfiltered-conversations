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

export function generateReportHTML(data: ReportData): string {
  const e = (s: string) => escapeHtml(s);

  const dimensionsHtml = data.dimensions
    .map((dim) => {
      const pct = Math.round((dim.score / dim.maxScore) * 100);
      return `<div class="dimension"><div class="dimension-top"><span class="dimension-name">${e(dim.name)}</span><span class="dimension-score">${dim.score.toFixed(1)} / ${dim.maxScore.toFixed(1)}</span></div><div class="dimension-bar-track"><div class="dimension-bar-fill" style="width:${pct}%"></div></div><div class="dimension-label">${e(dim.label)}</div><div class="dimension-desc">${e(dim.description)}</div></div>`;
    })
    .join("\n        ");

  const behaviorsHtml = data.tendencies
    .map((t) => `<div class="behavior">${e(t)}</div>`)
    .join("\n        ");

  const misreadMetricsHtml = data.misreadMetrics
    .map(
      (m) =>
        `<div class="misread-metric"><div class="misread-metric-label">${e(m.label)}</div><div class="misread-metric-value">${e(m.value)}</div></div>`
    )
    .join("\n          ");

  const roadmapHtml = data.roadmap
    .map(
      (month) =>
        `<div class="roadmap-month">
          <div class="roadmap-month-title">${e(month.monthTitle)}</div>
          ${month.items.map((item) => `<div class="roadmap-item">${e(item)}</div>`).join("\n          ")}
        </div>`
    )
    .join("\n        ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leadership Assessment Report</title>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'DM Sans',sans-serif;background:#fff;padding:0;line-height:1.6;color:#1a1a2e;font-weight:400}
    .page{background:#fff;width:816px;min-height:1056px;margin:0 auto;position:relative;overflow:hidden}
    .serif{font-family:'Libre Baskerville',serif}
    .page::after{content:"\\25C7";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:400px;color:rgba(45,58,140,.03);pointer-events:none;z-index:0}
    .page>*{position:relative;z-index:1}
    .cover{height:1056px;display:flex;flex-direction:column}
    .cover::after{display:none}
    .cover-confidential-bar{background:#1a1a2e;padding:10px 40px;display:flex;justify-content:space-between;align-items:center;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.7)}
    .cover-top{background:#2D3A8C;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:60px;position:relative}
    .cover-logo{position:absolute;top:40px;left:50%;transform:translateX(-50%)}
    .cover-icon{font-size:48px;color:#22D3EE;margin-bottom:24px}
    .cover-title{font-size:38px;font-weight:700;color:#fff;margin-bottom:12px;line-height:1.15}
    .cover-tagline{font-size:20px;font-style:italic;color:#22D3EE}
    .cover-bottom{height:45%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
    .cover-for{font-size:10px;text-transform:uppercase;letter-spacing:3px;color:#999;margin-bottom:8px}
    .cover-name{font-size:28px;font-weight:700;color:#1a1a2e;margin-bottom:6px}
    .cover-date{font-size:14px;color:#666;margin-bottom:24px}
    .cover-confidential-note{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#999;line-height:1.8;margin-bottom:40px}
    .cover-footer{font-size:12px;color:#bbb}
    .page-footer{position:absolute;bottom:32px;left:64px;right:64px;display:flex;justify-content:space-between;font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:#ccc}
    .content-page{padding:56px 64px 72px;min-height:1056px}
    .page-header{font-size:9px;text-transform:uppercase;letter-spacing:2px;color:#bbb;margin-bottom:40px;display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:16px}
    .section{margin-bottom:36px}
    .section-title{font-size:16px;font-weight:600;color:#2D3A8C;margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px}
    .section-body{font-size:14px;line-height:1.8;color:#444;font-weight:400}
    .page-summary .section-title,.page-pattern .section-title{padding-left:16px;border-left:3px solid #22D3EE}
    .exec-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 28px}
    .exec-item{background:#F8FAFC;padding:14px 18px;border-left:2px solid #22D3EE}
    .exec-label{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:#888;margin-bottom:4px}
    .exec-value{font-size:13px;color:#1a1a2e;font-weight:500;line-height:1.4}
    .exec-paragraph{background:#F0F7FF;padding:24px 28px;font-size:14px;line-height:1.8;color:#2D3A8C;margin-top:8px}
    .profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px}
    .profile-item{background:#F8FAFC;padding:14px 18px}
    .profile-label{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:#888;margin-bottom:4px}
    .profile-value{font-size:13px;color:#1a1a2e;line-height:1.4}
    .dimensions-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px 40px;margin-top:12px}
    .dimension{padding-bottom:18px;border-bottom:1px solid #f0f0f0}
    .dimension-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px}
    .dimension-name{font-size:13px;font-weight:600;color:#1a1a2e}
    .dimension-score{font-size:11px;color:#999}
    .dimension-bar-track{height:4px;background:#E8E8E8;border-radius:2px;margin-bottom:6px}
    .dimension-bar-fill{height:100%;background:linear-gradient(90deg,#22D3EE,#2D3A8C);border-radius:2px}
    .dimension-label{font-size:11px;font-weight:600;color:#2D3A8C}
    .dimension-desc{font-size:12px;color:#666;line-height:1.4;margin-top:4px}
    .behaviors-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px 32px;margin-top:12px}
    .behavior{font-size:13px;color:#444;padding:7px 0;border-bottom:1px solid #f5f5f5}
    .misread-box{background:#F8FAFC;padding:20px 24px;margin-top:12px}
    .misread-intro{font-size:13px;color:#555;margin-bottom:12px}
    .misread-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px}
    .misread-metric{text-align:center;padding:12px;background:#fff}
    .misread-metric-label{font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:4px}
    .misread-metric-value{font-size:14px;font-weight:600;color:#1a1a2e}
    .misread-outro{font-size:12px;color:#666;font-style:italic;margin-top:10px}
    .secondary-inline{background:#F8FAFC;padding:20px 24px;margin-top:12px}
    .secondary-name{font-size:15px;font-weight:700;color:#1a1a2e;display:inline}
    .secondary-tagline{font-size:14px;font-style:italic;color:#2D3A8C;display:inline;margin-left:8px}
    .secondary-desc{font-size:13px;color:#555;line-height:1.6;margin-top:10px}
    .action-page{padding:56px 64px 72px;min-height:1056px;display:flex;flex-direction:column}
    .action-page .page-header{margin-bottom:40px}
    .action-section{margin-bottom:36px}
    .action-label{font-size:16px;font-weight:600;color:#2D3A8C;margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px}
    .principle-text{font-size:15px;color:#444;line-height:1.7}
    .move-text{font-size:15px;color:#444;line-height:1.7}
    .roadmap{margin-top:8px}
    .roadmap-month{margin-bottom:20px;padding-left:20px;border-left:2px solid #22D3EE}
    .roadmap-month-title{font-size:13px;font-weight:600;color:#2D3A8C;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px}
    .roadmap-item{font-size:13px;color:#444;line-height:1.7;padding:2px 0}
    .grandfather-section{background:#F0F7FF;padding:28px 32px;margin-top:auto;margin-bottom:24px}
    .grandfather-text{font-size:15px;color:#2D3A8C;line-height:1.65;text-align:center}
    .closing-section{text-align:center;padding-top:24px;border-top:1px solid #eee}
    .closing-text{font-size:20px;color:#1a1a2e;margin-bottom:20px}
    .closing-cta{display:inline-block;background:#2D3A8C;color:#fff;padding:14px 32px;font-size:13px;font-weight:600;text-decoration:none;text-transform:uppercase;letter-spacing:1px}
    .closing-footer-url{margin-top:20px;font-size:11px;color:#999}
    .methodology{margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:10px;color:#aaa;line-height:1.6;text-align:center}
    .methodology-title{font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:#bbb;margin-bottom:4px}
    @media print{body{background:#fff;padding:0}.page{margin:0;box-shadow:none;page-break-after:always}}
  </style>
</head>
<body>
  <!-- Page 1: Cover -->
  <div class="page cover">
    <div class="cover-confidential-bar">
      <span>Confidential</span>
      <span>Assessment ID: ${e(data.assessmentId)}</span>
    </div>
    <div class="cover-top">
      <svg class="cover-logo" width="160" height="40" viewBox="0 0 160 40" fill="none">
        <text x="50%" y="14" fill="white" font-family="DM Sans" font-size="10" font-weight="600" letter-spacing="1.5" text-anchor="middle">UNFILTERED</text>
        <text x="50%" y="32" fill="white" font-family="DM Sans" font-size="14" font-weight="700" text-anchor="middle">CONVERSATIONS</text>
      </svg>
      <div class="cover-icon">&#9671;</div>
      <h1 class="cover-title serif">${e(data.primaryTitle)}</h1>
      <p class="cover-tagline serif">"${e(data.primaryTagline)}"</p>
      <div style="margin-top:20px;text-align:center">
        <span style="display:inline-block;padding:8px 18px;font-size:11px;letter-spacing:.5px;color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.25);border-radius:2px">Secondary: <b>${e(data.secondaryTitle)}</b></span>
      </div>
    </div>
    <div class="cover-bottom">
      <p class="cover-for">Prepared Exclusively For</p>
      <p class="cover-name">${e(data.userName)}</p>
      <p class="cover-date">${e(data.date)}</p>
      <div class="cover-confidential-note">Confidential Executive Assessment<br>For Internal Development Use Only</div>
      <p class="cover-footer">unfilteredconversations.com</p>
    </div>
  </div>

  <!-- Page 2: Executive Summary + Pattern -->
  <div class="page content-page page-summary">
    <div class="page-header">
      <span>Confidential Executive Assessment</span>
      <span>${e(data.userName)}</span>
    </div>
    <div class="section">
      <div class="section-title">Executive Summary</div>
      <div class="exec-grid">
        <div class="exec-item"><div class="exec-label">Primary Archetype</div><div class="exec-value">${e(data.primaryTitle)}</div></div>
        <div class="exec-item"><div class="exec-label">Secondary Influence</div><div class="exec-value">${e(data.secondaryTitle)}</div></div>
        <div class="exec-item"><div class="exec-label">Current Leadership Level</div><div class="exec-value">${e(data.currentLevel)}</div></div>
        <div class="exec-item"><div class="exec-label">Promotion Readiness Risk</div><div class="exec-value">${e(data.promotionRisk)}</div></div>
        <div class="exec-item"><div class="exec-label">Primary Development Lever</div><div class="exec-value">${e(data.developmentLever)}</div></div>
        <div class="exec-item"><div class="exec-label">Decision Principle</div><div class="exec-value">${e(data.decisionPrinciple)}</div></div>
      </div>
      <div class="exec-paragraph">${e(data.summaryParagraph)}</div>
    </div>
    <div class="section">
      <div class="section-title">Core Strength</div>
      <p class="section-body">${e(data.coreStrength)}</p>
    </div>
    <div class="section">
      <div class="section-title">Areas of Growth</div>
      <p class="section-body">${e(data.areasOfGrowth)}</p>
    </div>
    <div class="section">
      <div class="section-title">What This Pattern Is Costing You</div>
      <p class="section-body">${e(data.costStatement)}</p>
    </div>
    <div class="section">
      <div class="section-title">How Others Currently Perceive You</div>
      <p class="section-body">${e(data.howOthersSeeYou)}</p>
    </div>
    <div class="section">
      <div class="section-title">Overuse Risk</div>
      <p class="section-body">${e(data.overuseRisk)}</p>
    </div>
    <div class="page-footer"><span>Unfiltered Conversations</span><span>Page 2 of 5</span><span>Confidential</span></div>
  </div>

  <!-- Page 3: Diagnostic + Dimensions -->
  <div class="page content-page page-pattern">
    <div class="page-header">
      <span>Confidential Executive Assessment</span>
      <span>${e(data.userName)}</span>
    </div>
    <div class="section">
      <div class="section-title">Diagnostic Profile</div>
      <div class="profile-grid">
        <div class="profile-item"><div class="profile-label">Core Tension</div><div class="profile-value">${e(data.tension)}</div></div>
        <div class="profile-item"><div class="profile-label">Power Style</div><div class="profile-value">${e(data.powerStyle)}</div></div>
        <div class="profile-item"><div class="profile-label">Under Pressure</div><div class="profile-value">${e(data.pressureResponse)}</div></div>
        <div class="profile-item"><div class="profile-label">Primary Risk</div><div class="profile-value">${e(data.primaryRisk)}</div></div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Six Leadership Dimensions</div>
      <div class="dimensions-grid">
        ${dimensionsHtml}
      </div>
    </div>
    <div class="page-footer"><span>Unfiltered Conversations</span><span>Page 3 of 5</span><span>Confidential</span></div>
  </div>

  <!-- Page 4: Tendencies + Interpretation -->
  <div class="page content-page">
    <div class="page-header">
      <span>Confidential Executive Assessment</span>
      <span>${e(data.userName)}</span>
    </div>
    <div class="section">
      <div class="section-title">Observed Executive Tendencies</div>
      <div class="behaviors-grid">
        ${behaviorsHtml}
      </div>
    </div>
    <div class="section">
      <div class="section-title">Executive Interpretation Risk</div>
      <div class="misread-box">
        <p class="misread-intro">${e(data.misreadIntro)}</p>
        <div class="misread-grid">
          ${misreadMetricsHtml}
        </div>
        <p class="misread-outro">${e(data.misreadOutro)}</p>
      </div>
    </div>
    <div class="section">
      <div class="section-title">Secondary Pattern Influence</div>
      <div class="secondary-inline">
        <span class="secondary-name serif">${e(data.secondaryTitle)}</span>
        <span class="secondary-tagline serif">"${e(data.secondaryTagline)}"</span>
        <p class="secondary-desc">${e(data.secondaryDesc)}</p>
      </div>
    </div>
    <div class="page-footer"><span>Unfiltered Conversations</span><span>Page 4 of 5</span><span>Confidential</span></div>
  </div>

  <!-- Page 5: Action + Roadmap -->
  <div class="page action-page">
    <div class="page-header">
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
    <div class="grandfather-section">
      <p class="grandfather-text">"${e(data.grandfatherNote)}"</p>
    </div>
    <div class="closing-section">
      <p class="closing-text serif">Now you see the pattern. What you do next is yours.</p>
      <a href="https://unfilteredconversations.com" class="closing-cta">Book Your Decision Room Session</a>
      <p class="closing-footer-url">unfilteredconversations.com</p>
      <div class="methodology"><div class="methodology-title">Methodology</div>This assessment is based on the Unfiltered Conversations Leadership Signal Model, measuring six dimensions across strategic visibility, political acuity, assertive communication, decision velocity, network architecture, and operational load. Developed from 500+ leadership coaching engagements.</div>
    </div>
    <div class="page-footer"><span>Unfiltered Conversations</span><span>Page 5 of 5</span><span>Confidential</span></div>
  </div>
</body>
</html>`;
}
