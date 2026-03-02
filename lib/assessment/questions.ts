export type QuestionWeight = {
  str: number; // Over-Prepared Strategist
  stb: number; // Over-Relied-On Stabilizer
  cor: number; // System Corrector
  opt: number; // Expansive Optimizer
  bld: number; // Reflective Builder
};

export type Question = {
  prompt: string;
  dimension: "visibility" | "political" | "communication" | "decisions" | "network" | "execution";
  reverse?: boolean;
  weights: QuestionWeight;
};

export const QUESTIONS: Question[] = [
  // STRATEGIC VISIBILITY (8 items)
  { prompt: "When I do strong work, I trust that the right people will notice without me having to draw attention to it.", dimension: "visibility", weights: { str: 5, stb: 4, cor: 2, opt: 2, bld: 4 } },
  { prompt: "I tend to wait until I'm fully prepared before sharing an idea with leadership.", dimension: "visibility", weights: { str: 5, stb: 3, cor: 2, opt: 2, bld: 4 } },
  { prompt: "If asked what story is being told about me in rooms I'm not in, I honestly wouldn't know.", dimension: "visibility", weights: { str: 4, stb: 4, cor: 2, opt: 3, bld: 5 } },
  { prompt: "I regularly share my perspective in meetings before being asked.", dimension: "visibility", reverse: true, weights: { str: 2, stb: 3, cor: 5, opt: 4, bld: 2 } },
  { prompt: "I feel more comfortable perfecting my work than promoting it.", dimension: "visibility", weights: { str: 5, stb: 3, cor: 2, opt: 2, bld: 4 } },
  { prompt: "I sometimes miss windows of influence because I was still preparing.", dimension: "visibility", weights: { str: 5, stb: 2, cor: 1, opt: 2, bld: 4 } },
  { prompt: "I have a deliberate strategy for how decision-makers perceive me.", dimension: "visibility", reverse: true, weights: { str: 2, stb: 2, cor: 3, opt: 3, bld: 2 } },
  { prompt: "I would rather be thorough than visible.", dimension: "visibility", weights: { str: 5, stb: 3, cor: 2, opt: 1, bld: 5 } },

  // POLITICAL ACUMEN (8 items)
  { prompt: "I can name the three people who most influence decisions about my career trajectory.", dimension: "political", reverse: true, weights: { str: 3, stb: 2, cor: 3, opt: 3, bld: 2 } },
  { prompt: "I tend to avoid organizational politics because I believe good work should speak for itself.", dimension: "political", weights: { str: 4, stb: 5, cor: 3, opt: 2, bld: 4 } },
  { prompt: "I sometimes learn about important decisions after they've already been made.", dimension: "political", weights: { str: 4, stb: 4, cor: 3, opt: 3, bld: 5 } },
  { prompt: "I analyze stakeholder dynamics before initiating important conversations.", dimension: "political", reverse: true, weights: { str: 5, stb: 2, cor: 2, opt: 3, bld: 3 } },
  { prompt: "I understand who has informal power in my organization and how to engage them.", dimension: "political", reverse: true, weights: { str: 3, stb: 2, cor: 3, opt: 3, bld: 2 } },
  { prompt: "I have at least one senior leader who actively advocates for my advancement.", dimension: "political", reverse: true, weights: { str: 2, stb: 2, cor: 3, opt: 3, bld: 2 } },
  { prompt: "I prefer to anticipate objections rather than surface ideas early and iterate.", dimension: "political", weights: { str: 5, stb: 3, cor: 2, opt: 2, bld: 4 } },
  { prompt: "I am more skilled at reading a room than at shaping what happens in it.", dimension: "political", weights: { str: 5, stb: 4, cor: 2, opt: 2, bld: 4 } },

  // ASSERTIVE COMMUNICATION (8 items)
  { prompt: "I often soften my language with qualifiers like 'I could be wrong, but...' or 'just a thought...'", dimension: "communication", weights: { str: 5, stb: 4, cor: 1, opt: 3, bld: 4 } },
  { prompt: "When I disagree with a senior leader, I say so directly.", dimension: "communication", reverse: true, weights: { str: 2, stb: 2, cor: 5, opt: 3, bld: 2 } },
  { prompt: "People sometimes miss my point because I bury the lead or over-qualify my statements.", dimension: "communication", weights: { str: 5, stb: 3, cor: 1, opt: 3, bld: 4 } },
  { prompt: "I am comfortable advocating for myself in compensation, promotion, or assignment conversations.", dimension: "communication", reverse: true, weights: { str: 2, stb: 1, cor: 4, opt: 3, bld: 2 } },
  { prompt: "I can articulate my professional value in two clear sentences.", dimension: "communication", reverse: true, weights: { str: 2, stb: 2, cor: 4, opt: 3, bld: 2 } },
  { prompt: "I have been told my feedback lands harder than I intend.", dimension: "communication", weights: { str: 1, stb: 1, cor: 5, opt: 2, bld: 1 } },
  { prompt: "I hesitate to speak if I cannot answer every possible follow-up question.", dimension: "communication", weights: { str: 5, stb: 3, cor: 1, opt: 2, bld: 4 } },
  { prompt: "People around me sometimes seem surprised by how directly I identify problems.", dimension: "communication", reverse: true, weights: { str: 1, stb: 1, cor: 5, opt: 2, bld: 1 } },

  // DECISION VELOCITY (8 items)
  { prompt: "I often delay important decisions because I want more information before committing.", dimension: "decisions", weights: { str: 5, stb: 3, cor: 2, opt: 3, bld: 5 } },
  { prompt: "I am comfortable making a call with 80% of the information and adjusting later.", dimension: "decisions", reverse: true, weights: { str: 2, stb: 3, cor: 5, opt: 4, bld: 2 } },
  { prompt: "I have at least one important decision I've been sitting on for longer than I should.", dimension: "decisions", weights: { str: 4, stb: 3, cor: 2, opt: 4, bld: 5 } },
  { prompt: "When I look back at decisions I delayed, the outcome was usually fine and the waiting wasn't worth it.", dimension: "decisions", weights: { str: 5, stb: 3, cor: 2, opt: 3, bld: 4 } },
  { prompt: "I tend to start new initiatives rather than commit fully to one direction.", dimension: "decisions", weights: { str: 2, stb: 2, cor: 2, opt: 5, bld: 3 } },
  { prompt: "I fix problems faster than most people around me realize there was a problem.", dimension: "decisions", reverse: true, weights: { str: 2, stb: 2, cor: 5, opt: 3, bld: 1 } },
  { prompt: "I have abandoned a good idea because a newer, more exciting one appeared.", dimension: "decisions", weights: { str: 1, stb: 1, cor: 1, opt: 5, bld: 2 } },
  { prompt: "I refine plans repeatedly before distributing them.", dimension: "decisions", weights: { str: 5, stb: 2, cor: 2, opt: 1, bld: 4 } },

  // NETWORK ARCHITECTURE (8 items)
  { prompt: "Most of my professional relationships are with peers at my level or below.", dimension: "network", weights: { str: 4, stb: 5, cor: 3, opt: 3, bld: 4 } },
  { prompt: "I have relationships that I maintain specifically because they give me access to information or opportunities.", dimension: "network", reverse: true, weights: { str: 2, stb: 2, cor: 3, opt: 4, bld: 2 } },
  { prompt: "I avoid reaching out to senior leaders unless I have a specific reason to.", dimension: "network", weights: { str: 5, stb: 4, cor: 3, opt: 2, bld: 5 } },
  { prompt: "My network has grown mostly through proximity rather than intention.", dimension: "network", weights: { str: 4, stb: 4, cor: 3, opt: 3, bld: 4 } },
  { prompt: "I could name three people outside my immediate team who would sponsor me for a new opportunity.", dimension: "network", reverse: true, weights: { str: 2, stb: 2, cor: 3, opt: 3, bld: 2 } },
  { prompt: "People tend to come to me for help more than I go to others for access.", dimension: "network", weights: { str: 3, stb: 5, cor: 3, opt: 2, bld: 3 } },
  { prompt: "I know many people broadly but few people strategically.", dimension: "network", weights: { str: 3, stb: 3, cor: 2, opt: 5, bld: 3 } },
  { prompt: "I invest more in deepening existing relationships than in building new ones.", dimension: "network", weights: { str: 3, stb: 4, cor: 2, opt: 1, bld: 5 } },

  // OPERATIONAL LOAD (10 items)
  { prompt: "My team would struggle to function if I took two weeks off.", dimension: "execution", weights: { str: 3, stb: 5, cor: 3, opt: 2, bld: 2 } },
  { prompt: "I am usually the person who picks up work that falls through the cracks.", dimension: "execution", weights: { str: 2, stb: 5, cor: 4, opt: 2, bld: 2 } },
  { prompt: "People describe me as the person who holds things together.", dimension: "execution", weights: { str: 2, stb: 5, cor: 3, opt: 1, bld: 2 } },
  { prompt: "I take on extra work rather than risk it being done poorly by someone else.", dimension: "execution", weights: { str: 3, stb: 5, cor: 4, opt: 2, bld: 2 } },
  { prompt: "I have difficulty saying no to requests, even when I'm already at capacity.", dimension: "execution", weights: { str: 2, stb: 5, cor: 2, opt: 2, bld: 3 } },
  { prompt: "My value to the organization is most visible in crisis moments.", dimension: "execution", weights: { str: 3, stb: 5, cor: 4, opt: 2, bld: 2 } },
  { prompt: "I often feel that my reliability is what people value most about me.", dimension: "execution", weights: { str: 3, stb: 5, cor: 2, opt: 1, bld: 3 } },
  { prompt: "I rarely delegate tasks that I know I could do better myself.", dimension: "execution", weights: { str: 3, stb: 4, cor: 4, opt: 2, bld: 2 } },
  { prompt: "When asked what makes me indispensable, I think about what I do, not what I've changed.", dimension: "execution", weights: { str: 3, stb: 5, cor: 2, opt: 2, bld: 3 } },
  { prompt: "I spend more time maintaining systems than building new ones.", dimension: "execution", weights: { str: 2, stb: 5, cor: 3, opt: 1, bld: 3 } },
];
