// Complete report content for all 5 archetypes
// Content pulled verbatim from reference HTML files for PDF report generation

export type ArchetypeReportContent = {
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
  tendencies: string[];
  misreadIntro: string;
  misreadOutro: string;
  misreadMetrics: { label: string; value: string }[];
  firstMove: string;
  roadmap: { monthTitle: string; items: string[] }[];
  grandfatherNote: string;
};

export const REPORT_CONTENT: Record<string, ArchetypeReportContent> = {
  strategist: {
    primaryTitle: "The Over-Prepared Strategist",
    primaryTagline: "How visible can I be?",
    secondaryTitle: "The Over-Relied-On Stabilizer",
    secondaryTagline: "When is it my turn?",
    secondaryDesc:
      "You share the instinct to prove yourself through the work instead of through your voice. Where the Strategist holds back insight, the Stabilizer holds back need. Together, they create someone who is deeply competent and almost invisible. That's exactly the pattern this assessment is built to surface and redirect.",
    currentLevel: "High Potential, Under-Signaled",
    promotionRisk: "Visibility Gap",
    developmentLever: "Strategic Expression",
    decisionPrinciple: "Say the next true thing",
    summaryParagraph:
      "You think clearly, you see what matters, and your judgment holds up under pressure. But you've made a habit of staying quiet when it counts. Not because you don't have the answer, but because speaking up still feels like a risk. It's not. The work from here isn't about getting ready. You're already ready. It's about being seen.",
    coreStrength:
      "You see what other people miss. While the room is reacting, you're already two steps ahead. When things get chaotic, you get sharper. People trust your judgment because you've earned it, consistently, over time. That's not common. Don't underestimate what that's worth.",
    areasOfGrowth:
      "Your insight is strong. You just don't let people hear it often enough. You hold back in meetings, wait until you're certain, and over-prepare because it feels safer than being seen before you're ready. But you've been ready. The issue isn't preparation. It's that staying quiet became a habit, and habits don't announce when they stop serving you.",
    costStatement:
      "You're performing below what you're capable of. Not because something's wrong, but because you keep your best thinking to yourself. That made sense at some point. It doesn't anymore. Every month you stay quiet, someone more visible gets the opportunity that should have been yours. That's not a theory. That's how organizations work.",
    howOthersSeeYou:
      'In talent reviews, the words that come up about you are "solid," "reliable," "dependable." Those sound like compliments. They\'re not. They\'re what people say about someone they value but haven\'t imagined in a bigger role. There\'s a neutral story forming about you in rooms you\'re not in. Neutral stories don\'t get you sponsored, stretched, or promoted.',
    overuseRisk:
      "The same foresight that makes you valuable can hold you back when it keeps you from acting. You see so many ways things could go wrong that you never find out what could go right. Good judgment that stays unspoken doesn't move anything forward.",
    tension: "Visibility vs. Safety",
    powerStyle: "Under-leveraged influence capacity",
    pressureResponse: "Cognitive sharpening while others escalate",
    primaryRisk: "Sustained invisibility while awaiting external validation",
    tendencies: [
      "Prepares thoroughly but holds back in live discussions",
      "Rewrites emails several times before sending",
      "Shares the real insight after the meeting, not during it",
      "Has strong opinions but presents them as suggestions",
      'Says "just a thought" when you actually know the answer',
      "Waits for 100% certainty when 70% would be enough",
      "Gets frustrated watching someone more visible command the room",
      "Carries extra work as a way to justify your seat at the table",
    ],
    misreadIntro:
      "When you stay quiet, senior leaders don't think you're being strategic. They fill in the blanks with what they can see, and what they see is silence.",
    misreadOutro:
      "None of these reflect who you actually are or what you're capable of. But leaders respond to what's visible, not what's intended.",
    misreadMetrics: [
      { label: "Perceived Ambition", value: "Moderate" },
      { label: "Perceived Readiness", value: "Conditional" },
      { label: "Perceived Growth Drive", value: "Unclear" },
    ],
    firstMove:
      "This week, share one unsolicited perspective with a senior stakeholder. Not a question. Not a hedge. A clear, direct statement of what you see. That's it. One sentence, one meeting, one time. Start there.",
    roadmap: [
      {
        monthTitle: "Month 1: Signal",
        items: [
          "Commit to contributing early in at least one meeting per week, even when the room feels uncertain",
          "Share one observation with a senior leader outside of your normal check-ins",
          "Catch yourself hedging and replace it with a direct statement. Once a week is enough to start.",
        ],
      },
      {
        monthTitle: "Month 2: Position",
        items: [
          "Raise your hand for one cross-functional initiative where leadership will see your work",
          "Ask someone senior how they perceive your contributions. Listen to what they say and what they don't.",
          "Identify two people whose advocacy would change your trajectory",
        ],
      },
      {
        monthTitle: "Month 3: Leverage",
        items: [
          "Present a strategic recommendation to leadership. Invited or not.",
          "Build a real, ongoing relationship with at least two executive sponsors",
          "Hand off one piece of operational work that's keeping you anchored to your current level",
        ],
      },
    ],
    grandfatherNote:
      "You did what you were told would work. It worked for a while. It's not working anymore, and that's not your fault. But what happens next is your move.",
  },

  stabilizer: {
    primaryTitle: "The Over-Relied-On Stabilizer",
    primaryTagline: "When is it my turn?",
    secondaryTitle: "The Over-Prepared Strategist",
    secondaryTagline: "How visible can I be?",
    secondaryDesc:
      "You share the tendency to let your work speak for itself and avoid drawing attention. Where the Strategist holds back insight, you hold back need. The combination means you're both undervalued and overworked, and no one around you realizes it's a problem because you've never let it become one.",
    currentLevel: "High Performer, Over-Utilized",
    promotionRisk: "Indispensability Trap",
    developmentLever: "Strategic Self-Advocacy",
    decisionPrinciple: "Your needs are not a burden",
    summaryParagraph:
      "You're the person everyone counts on. You hold things together, absorb the work others won't do, and rarely complain. People trust you because you've never let them down. But somewhere along the way, being reliable became a trap. You're so good at carrying the weight that no one thinks to ask if you want something different. The work ahead isn't about doing more. It's about asking for what you've earned.",
    coreStrength:
      "You are the person the organization leans on when things need to hold together. You absorb complexity, manage through ambiguity, and deliver consistently without requiring recognition. When a team is under pressure, you're the one who steadies it. That kind of reliability is rare, and people around you know it even if they don't say it often enough.",
    areasOfGrowth:
      "You've built your reputation on being the person who never drops the ball. The problem is, you've also become the person who never asks for anything. You absorb extra work, cover for others, and say yes when you should be negotiating. Not because you can't set boundaries, but because reliability became your identity. That identity served you well for a long time. It's now the thing keeping you in place.",
    costStatement:
      "You've become too valuable where you are. That sounds like a compliment. It's not. When leadership can't imagine your team functioning without you, they stop imagining you anywhere else. Every time you absorb more, you reinforce the story that you belong exactly where you are. The opportunities go to people who create space for themselves, not people who fill every gap for everyone else.",
    howOthersSeeYou:
      'In talent conversations, you\'re described as "essential," "the glue," "the one who keeps things running." Leadership values you. They also take you for granted. The narrative about you is one of maintenance, not momentum. No one is asking "what\'s next for them?" because the current arrangement works too well for everyone except you.',
    overuseRisk:
      'Your willingness to carry the load is real. But when carrying becomes the default, it stops being generosity and starts being avoidance. The harder question isn\'t "can I handle more?" It\'s "why haven\'t I asked for what I actually want?" That question has been waiting for you, and it\'s not going away.',
    tension: "Loyalty vs. Self-Advocacy",
    powerStyle: "Earned through indispensability",
    pressureResponse: "Absorbs more while others step back",
    primaryRisk: "Becoming too essential to move",
    tendencies: [
      "Says yes to requests before considering the cost to your own priorities",
      "Covers for underperformers rather than letting the gap become visible",
      "Feels resentment building but doesn't name it until it's too late",
      "Puts the team's needs ahead of your own development, consistently",
      "Waits to be recognized rather than asking for what you want",
      'Describes your own accomplishments using "we" even when it was you',
      'Takes on thankless operational work because "someone has to"',
      "Quietly tracks what you've done, hoping someone else will notice",
    ],
    misreadIntro:
      "When you don't advocate for yourself, senior leaders don't assume you're being selfless. They assume you're satisfied. And they plan accordingly.",
    misreadOutro:
      "None of these reflect what you actually want. But silence gets interpreted as satisfaction, and satisfaction doesn't get promoted.",
    misreadMetrics: [
      { label: "Perceived Ambition", value: "Low" },
      { label: "Perceived Readiness", value: "Current-Level" },
      { label: "Perceived Growth Drive", value: "Content" },
    ],
    firstMove:
      'This week, say no to one request that isn\'t yours to carry. Not dramatically. Just clearly. "I can\'t take that on right now." That\'s the whole sentence. Use it once and see what happens.',
    roadmap: [
      {
        monthTitle: "Month 1: Boundaries",
        items: [
          "Decline one request per week that doesn't align with your priorities",
          "Name one thing you want in your next one-on-one with your manager. Not a hint. A direct ask.",
          "Stop covering for one underperformer. Let the gap become visible.",
        ],
      },
      {
        monthTitle: "Month 2: Signal",
        items: [
          "Share a specific career goal with your manager, in writing, with a timeline",
          'Take credit for one accomplishment using "I" instead of "we"',
          "Identify one person above you who should know your name and your ambition",
        ],
      },
      {
        monthTitle: "Month 3: Reposition",
        items: [
          "Delegate one operational responsibility you've been holding onto",
          "Volunteer for a stretch assignment that puts you in front of senior leadership",
          'Have a direct conversation about your next role. Not "someday." This quarter.',
        ],
      },
    ],
    grandfatherNote:
      "You've spent years proving you can carry anything. You don't need to prove that anymore. The question now is whether you're willing to put something down long enough to reach for what's next.",
  },

  corrector: {
    primaryTitle: "The System Corrector",
    primaryTagline: "Why doesn't anyone else see this?",
    secondaryTitle: "The Expansive Optimizer",
    secondaryTagline: "What else could this become?",
    secondaryDesc:
      "You share the drive to make things better. Where the Optimizer expands outward, you drill inward. The combination means you see both the systemic flaw and the bigger possibility, but your instinct is to lead with the flaw. Learning to lead with the possibility instead changes how every conversation lands.",
    currentLevel: "High Impact, Polarizing",
    promotionRisk: "Intensity Perception",
    developmentLever: "Calibrated Delivery",
    decisionPrinciple: "Be right and be heard",
    summaryParagraph:
      "You see what's broken. You've always seen it. And you have a hard time not saying something about it. That instinct has made you valuable in every role you've held. It's also made you exhausting to the people who aren't ready to hear it. The work from here isn't about softening your message. It's about learning when and how to deliver it so that people can actually receive it.",
    coreStrength:
      "You see problems that other people walk past. Broken processes, misaligned incentives, decisions that look good on paper but won't hold up in practice. You don't just notice these things. You feel them. And your instinct to fix what's wrong has made you one of the most impactful people in every room you've been in. When you're right, you're really right. And you're right more often than people give you credit for.",
    areasOfGrowth:
      "You lead with the problem. That's honest, and it's often necessary. But it also means people brace when they see you coming. Not because your observations are wrong, but because the way they land can feel like an indictment. You've probably noticed that some people listen to you and some people avoid you, and the split doesn't always track with who's competent. That gap isn't about them. It's about delivery, and delivery is a skill you haven't needed to develop until now.",
    costStatement:
      'You\'re being filtered out of conversations where your perspective is needed most. Not because you\'re wrong, but because the people making decisions have decided you\'re hard to manage. "Brilliant but difficult" is a label that follows people like you, and it\'s a label that caps careers. The frustrating part is that you didn\'t earn it by being wrong. You earned it by being right in a way that made someone uncomfortable.',
    howOthersSeeYou:
      'Some people see you as the most honest person in the room. Others see you as the most draining. Both are true, depending on the day. In talent reviews, the words that come up are "intense," "high standards," "doesn\'t let things go." Leadership respects your capability. They\'re less sure about your judgment on people and timing. That perception gap is the thing standing between you and the next level.',
    overuseRisk:
      "When the instinct to correct goes unchecked, it becomes the only thing people see. You stop being the person who makes things better and start being the person who makes things tense. The irony is that the more you push, the less people listen. And the less they listen, the harder you push. That cycle will wear you out before it wears them down.",
    tension: "Accuracy vs. Influence",
    powerStyle: "Earned through being right",
    pressureResponse: "Gets sharper and more direct while others get cautious",
    primaryRisk:
      "Being right but being excluded from the rooms that matter",
    tendencies: [
      "Names problems in meetings before building any alignment",
      "Feels personally responsible for fixing things that aren't working",
      "Gets frustrated when others accept broken systems without pushback",
      "Follows up on issues others have moved past",
      "Frames feedback as urgency when the audience hears criticism",
      "Builds a case before checking whether anyone wants to hear it",
      "Struggles to let a bad decision play out without intervening",
      "Earns deep loyalty from some and careful distance from others",
    ],
    misreadIntro:
      "When your intensity leads, senior leaders don't hear the insight. They hear the friction. And they make decisions based on the friction.",
    misreadOutro:
      "Your capability isn't in question. Your predictability is. And at senior levels, predictability matters as much as performance.",
    misreadMetrics: [
      { label: "Perceived Ambition", value: "High" },
      { label: "Perceived Readiness", value: "Conditional" },
      { label: "Perceived Temperament", value: "Unpredictable" },
    ],
    firstMove:
      "In your next meeting, before you name a problem, start with the outcome you want. One sentence about where things should be headed. Then the issue. That sequence changes everything about how you're received.",
    roadmap: [
      {
        monthTitle: "Month 1: Sequence",
        items: [
          "Practice leading with the recommendation before the diagnosis. Every meeting, once.",
          'Before raising an issue, ask yourself: "Does this person need to hear this from me, right now, in this way?"',
          "Identify one relationship you've damaged with directness and repair it with a conversation, not a performance.",
        ],
      },
      {
        monthTitle: "Month 2: Allies",
        items: [
          "Build alignment with one stakeholder before bringing an issue to the group",
          'Ask a trusted peer: "When do I lose the room?" Listen without defending.',
          "Find one person in leadership who values what you see and invest in that relationship",
        ],
      },
      {
        monthTitle: "Month 3: Influence",
        items: [
          "Let one broken thing stay broken. Watch what happens. Practice the discipline of choosing your battles.",
          "Present a strategic fix to leadership that includes their perspective, not just yours",
          "Ask for honest feedback on whether your presence in rooms has shifted. It will have.",
        ],
      },
    ],
    grandfatherNote:
      "You've been fighting the right fights in the wrong order. The instinct is good. The sequencing is what needs to change. You don't need to care less. You need to be heard more. Those are different problems.",
  },

  optimizer: {
    primaryTitle: "The Expansive Optimizer",
    primaryTagline: "What else could this become?",
    secondaryTitle: "The System Corrector",
    secondaryTagline: "Why doesn't anyone else see this?",
    secondaryDesc:
      "You share the drive to improve things. Where the Corrector focuses on what's broken, you focus on what's possible. The combination gives you a powerful instinct for change, but it also means you're pulled in two directions: fix and expand. Learning to choose one lane per initiative is the discipline that unlocks the next level.",
    currentLevel: "High Energy, Under-Focused",
    promotionRisk: "Execution Perception",
    developmentLever: "Strategic Focus",
    decisionPrinciple: "Finish before you expand",
    summaryParagraph:
      "You see possibility everywhere. New ideas, better approaches, connections other people miss. That's a genuine gift. But you've started more things than you've finished, and the people around you have noticed. The work from here isn't about generating fewer ideas. It's about choosing fewer and driving them all the way through. That's the difference between being seen as creative and being seen as a leader.",
    coreStrength:
      "You see what things could become, not just what they are. Where others see a finished plan, you see three better versions. You connect dots across teams, functions, and strategies in ways that genuinely create value. People come to you when they need energy, vision, and the kind of thinking that opens up a room. That's not something you can teach. It's something you have.",
    areasOfGrowth:
      "You start strong. The energy is real, the ideas are sharp, and people get excited. But somewhere between the launch and the finish, something newer catches your attention. You don't abandon things, exactly. You just stop giving them your best focus. Over time, that creates a trail of 80%-done initiatives, and the people who were counting on you start to hedge their expectations. Not because your ideas were wrong, but because they've learned you might move on before the work is complete.",
    costStatement:
      "Leadership sees you as someone with great ideas and inconsistent follow-through. That's a hard label to carry, because it's half right. You do follow through. Just not on everything, and not always on the thing that matters most. Every unfinished initiative chips away at trust, and trust at the senior level is built on predictability, not potential. The opportunities that should be yours are going to people who deliver less but deliver consistently.",
    howOthersSeeYou:
      'People enjoy working with you. That\'s real. You bring energy and optimism that others don\'t. But in talent reviews, the conversation turns careful. "Great ideas, but can they execute at scale?" "Incredible in the first 60 days, what about day 120?" These aren\'t insults. They\'re honest observations from people who want to promote you but need a reason to trust that you\'ll stay with the thing long enough to prove it out.',
    overuseRisk:
      "When you expand without completing, you don't just lose momentum on one thing. You dilute your credibility across everything. People stop bringing you their most important problems because they're not sure you'll still be focused on it in six weeks. The risk isn't running out of ideas. It's running out of people who trust you'll see them through.",
    tension: "Expansion vs. Completion",
    powerStyle: "Earned through vision and energy",
    pressureResponse: "Generates more options when fewer are needed",
    primaryRisk: "Being seen as a starter, not a finisher",
    tendencies: [
      "Proposes new initiatives before current ones are fully delivered",
      "Gets visibly energized by brainstorming and visibly restless during execution",
      "Commits to timelines with genuine intent, then quietly adjusts them",
      "Has more active projects than any one person can realistically drive",
      "Delegates execution but checks in less as the work becomes routine",
      'Reframes scope changes as "improvements" when they\'re really pivots',
      "Gets frustrated by people who want to slow down and finish",
      "Leaves meetings with more action items than you came in with",
    ],
    misreadIntro:
      "When you keep expanding, leadership doesn't see vision. They see someone who can't commit. And commitment is the currency of senior leadership.",
    misreadOutro:
      "They see the talent. They're waiting for proof that you can channel it. One completed, high-impact initiative changes that story faster than five new ideas ever will.",
    misreadMetrics: [
      { label: "Perceived Ambition", value: "High" },
      { label: "Perceived Readiness", value: "Uncertain" },
      { label: "Perceived Reliability", value: "Variable" },
    ],
    firstMove:
      "This week, pick one initiative that's 70% done and commit to finishing it. Not improving it. Not expanding it. Finishing it. Ship it, close it, and let the completion speak for itself.",
    roadmap: [
      {
        monthTitle: "Month 1: Focus",
        items: [
          "Reduce your active initiatives to three. Write them down. Say no to everything else for 30 days.",
          "Complete one in-progress project fully before starting anything new",
          "Tell your manager which initiative you're prioritizing and why. Put it in writing.",
        ],
      },
      {
        monthTitle: "Month 2: Depth",
        items: [
          "Stay with one initiative through the unglamorous middle. Don't pivot. Don't expand scope.",
          "Ask your team what it's like when you shift focus. Listen to the answer.",
          "Build a relationship with one operational leader who can help you see things through",
        ],
      },
      {
        monthTitle: "Month 3: Proof",
        items: [
          "Present completed results to leadership. Not a plan. Not a vision. Results.",
          "Use that proof point to propose your next initiative, this time with a track record behind you",
          "Ask for feedback on whether the perception of your follow-through has shifted",
        ],
      },
    ],
    grandfatherNote:
      "You've never lacked ideas. You've never lacked energy. What you've lacked is the willingness to stay boring long enough to let something work. That's not a weakness. It's just the next thing to learn.",
  },

  builder: {
    primaryTitle: "The Reflective Builder",
    primaryTagline: "Just tell me the right next step.",
    secondaryTitle: "The Over-Relied-On Stabilizer",
    secondaryTagline: "When is it my turn?",
    secondaryDesc:
      "You share the instinct to earn your place through the quality of your work rather than the volume of your voice. Where the Stabilizer holds back need, you hold back action. The combination creates someone who is deeply competent, quietly frustrated, and waiting for a signal that's already been given. The signal is this report.",
    currentLevel: "Capable, Under-Directed",
    promotionRisk: "Initiative Gap",
    developmentLever: "Self-Directed Action",
    decisionPrinciple: "Act before the map is complete",
    summaryParagraph:
      "You think carefully, you build things that last, and you take your work seriously. But you've been waiting for someone to tell you it's time to move. No one is coming to do that. Not because they don't see you, but because at this level, the people who advance are the ones who move without being told. You have the skills. What's missing is the willingness to act before you feel completely ready.",
    coreStrength:
      "You think before you act, and what you build holds up. While others are rushing to ship and fix later, you're designing things that work the first time. You bring a thoughtfulness to your work that creates real, lasting value. People trust what you deliver because it's been considered, tested, and built with care. In a world full of speed, that kind of craftsmanship matters more than people say.",
    areasOfGrowth:
      "You wait for the plan. The framework. The clear directive. And when it comes, you execute beautifully. But the next level doesn't come with instructions. The people who get there are the ones who create the plan, not the ones who wait for it. You've been looking for structure that isn't going to appear. At some point, the structure has to come from you. That's not a comfort zone problem. It's a permission problem. And the permission is yours to give.",
    costStatement:
      'While you\'re thinking, other people are moving. Not because they\'re smarter or more capable. Most of the time, they\'re not. But they\'ve decided that a good-enough plan executed now is worth more than a perfect plan delivered later. And organizations reward motion. The opportunities you want are going to people who take action with less information than you require, and that pattern will continue until you change your threshold for "ready enough."',
    howOthersSeeYou:
      'In talent reviews, you\'re described as "thoughtful," "thorough," "high-quality work." But the next sentence is usually a question: "Can they lead without a roadmap?" "Will they step up when no one\'s directing?" Leadership sees your capability. They\'re waiting to see your initiative. And the longer they wait, the more the narrative settles into "strong contributor" instead of "future leader."',
    overuseRisk:
      "Reflection is a strength until it becomes a stall. When you think too long, the window closes. Not because you made the wrong call, but because you didn't make one at all. The cost of inaction at the senior level isn't a missed deadline. It's a missed narrative. People need to see you in motion to imagine you at the next level.",
    tension: "Reflection vs. Action",
    powerStyle: "Earned through quality and dependability",
    pressureResponse: "Slows down to think while others accelerate",
    primaryRisk: "Waiting for direction that isn't coming",
    tendencies: [
      "Waits for clear direction before taking action on ambiguous problems",
      'Asks "what does success look like?" when others have already started moving',
      "Produces exceptional work but rarely promotes it without being asked",
      "Defers to others in meetings even when you have the strongest perspective",
      "Seeks validation before committing to a path forward",
      "Spends more time planning than executing, especially on high-stakes work",
      "Feels uncomfortable making decisions without comprehensive information",
      "Quietly resents others who move fast with less rigor",
    ],
    misreadIntro:
      "When you wait to be directed, senior leaders don't see patience. They see someone who needs to be managed. And people who need to be managed don't get promoted into ambiguity.",
    misreadOutro:
      "None of these describe your actual capability. But the people making decisions about your career can only see what you show them. And right now, you're showing them someone who waits.",
    misreadMetrics: [
      { label: "Perceived Ambition", value: "Low" },
      { label: "Perceived Readiness", value: "Dependent" },
      { label: "Perceived Initiative", value: "Reactive" },
    ],
    firstMove:
      "This week, take one action on something you've been thinking about without asking anyone's permission first. Not a big thing. A meeting you schedule, an opinion you share, a proposal you draft. Just move. See what happens when you stop waiting.",
    roadmap: [
      {
        monthTitle: "Month 1: Move",
        items: [
          "Make one decision per week without waiting for full information. Track what happens.",
          "Volunteer for one thing before you feel ready. Not after.",
          "Share one idea with your manager that you came up with on your own, not in response to a prompt.",
        ],
      },
      {
        monthTitle: "Month 2: Initiate",
        items: [
          "Propose a project or improvement that no one asked for. Own it from start to finish.",
          "Schedule a meeting with someone two levels above you. Bring a perspective, not a question.",
          'Stop asking "what should I do?" and start saying "here\'s what I\'m planning to do."',
        ],
      },
      {
        monthTitle: "Month 3: Lead",
        items: [
          "Take visible ownership of one outcome that doesn't have a playbook",
          "Present something to leadership that you built without being asked",
          'Ask your manager directly: "What do you need to see from me to support my promotion?"',
        ],
      },
    ],
    grandfatherNote:
      "You've been building carefully and waiting for someone to notice. They noticed a long time ago. What they're waiting for now is to see you move without being asked. That's the only thing left.",
  },
};
