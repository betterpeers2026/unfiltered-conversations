export const DIMENSIONS = {
  visibility: { name: "Strategic Visibility", description: "How proactively you position yourself and your work with decision-makers" },
  political: { name: "Political Acumen", description: "How effectively you read and engage organizational power dynamics" },
  communication: { name: "Assertive Communication", description: "How clearly and assertively you express your perspective in high-stakes settings" },
  decisions: { name: "Decision Velocity", description: "How quickly you move from analysis to action when the stakes are real" },
  network: { name: "Network Architecture", description: "How strategically you build and maintain relationships beyond your immediate circle" },
  execution: { name: "Operational Load", description: "How much of your team's operational weight you carry and how tightly your identity is tied to being the reliable one" },
} as const;

export type DimensionSlug = keyof typeof DIMENSIONS;

export const DIMENSION_LEVELS: Record<DimensionSlug, { max: number; label: string; color: string; description: string }[]> = {
  visibility: [
    { max: 2.2, label: "Invisible by Default", color: "#2D3A8C", description: "You rely almost entirely on the quality of your work to speak for you. It doesn't. Good work without visibility is a career that depends on luck." },
    { max: 3.5, label: "Selectively Visible", color: "#5B6ABF", description: "You show up when invited but rarely position yourself or your work proactively. Visibility happens to you rather than being something you manage." },
    { max: 5, label: "Intentionally Positioned", color: "#22D3EE", description: "You understand that visibility is a skill, not a personality trait, and you're actively managing how your work and ideas reach the people who matter." },
  ],
  political: [
    { max: 2.2, label: "Under-Political", color: "#2D3A8C", description: "You either don't see the political landscape or you see it and choose to ignore it. This is costing you more than you realize." },
    { max: 3.5, label: "Politically Aware", color: "#5B6ABF", description: "You observe the dynamics around you but stay on the sidelines. You can read the room but you don't use that read to position yourself strategically." },
    { max: 5, label: "Politically Skilled", color: "#22D3EE", description: "You understand organizational power and navigate it with purpose. You know who influences what, and you engage those dynamics without compromising your integrity." },
  ],
  communication: [
    { max: 2.2, label: "Chronically Hedged", color: "#2D3A8C", description: "You qualify, soften, and dilute your message so consistently that the people around you may not actually know what you think." },
    { max: 3.5, label: "Situationally Direct", color: "#5B6ABF", description: "You can be direct when the stakes are low or the audience is safe, but you pull back in the moments that matter most." },
    { max: 5, label: "Calibrated and Clear", color: "#22D3EE", description: "You say what you mean with both conviction and awareness of the room. You adjust your directness to the situation without losing the substance of your message." },
  ],
  decisions: [
    { max: 2.2, label: "Analysis Loop", color: "#2D3A8C", description: "You delay decisions in search of a certainty that rarely arrives. The cost of waiting almost always exceeds the cost of being slightly wrong." },
    { max: 3.5, label: "Cautiously Decisive", color: "#5B6ABF", description: "You can make decisions when forced but tend to wait longer than necessary when the timeline is open. The quality of your decisions is high. The speed is what needs work." },
    { max: 5, label: "Moves at 80%", color: "#22D3EE", description: "You act when you have enough information, not all of it. You trust your judgment, decide, and adjust. Speed and quality are both working for you." },
  ],
  network: [
    { max: 2.2, label: "Comfort-Based", color: "#2D3A8C", description: "Your professional relationships are built around proximity and ease rather than strategy. You know people who like you, not necessarily people who can open doors for you." },
    { max: 3.5, label: "Organically Growing", color: "#5B6ABF", description: "You've built some relationships beyond your immediate circle, but without a deliberate strategy. Key gaps exist, especially with sponsors and senior leaders." },
    { max: 5, label: "Strategically Architected", color: "#22D3EE", description: "You build and maintain relationships based on mutual value, access, and strategic intent. Your network includes sponsors, informants, and peers across levels and functions." },
  ],
  execution: [
    { max: 2.2, label: "Appropriately Boundaried", color: "#22D3EE", description: "You carry your share without absorbing everyone else's. Your identity isn't tied to being the person who holds everything together." },
    { max: 3.5, label: "Load-Bearing", color: "#5B6ABF", description: "You carry more than your share and people have started to depend on it. The line between being helpful and being trapped is getting thin." },
    { max: 5, label: "Structurally Indispensable", color: "#2D3A8C", description: "You've become infrastructure. The organization depends on your presence so completely that your advancement has become a problem no one wants to create by moving you." },
  ],
};
