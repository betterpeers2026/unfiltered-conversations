-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "name" TEXT,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'client',
    "company" TEXT,
    "archetypeId" TEXT,
    "assessmentCompletedAt" TIMESTAMP(3),
    "stripeCustomerId" TEXT,
    "teamId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationCode" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Archetype" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "coreQuestion" TEXT NOT NULL,
    "decisionPrinciple" TEXT NOT NULL,
    "coreStrength" TEXT NOT NULL,
    "areasOfGrowth" TEXT NOT NULL,
    "costStatement" TEXT NOT NULL,
    "howOthersSeeYou" TEXT NOT NULL,
    "overuseRisk" TEXT NOT NULL,
    "firstMove" TEXT NOT NULL,
    "tension" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "pressureResponse" TEXT NOT NULL,
    "risk" TEXT NOT NULL,
    "focusTogether" TEXT,
    "honestAbout" TEXT,
    "glyph" TEXT,
    "tensionLeft" TEXT,
    "tensionRight" TEXT,
    "stuckInsight" TEXT,
    "strength" TEXT,
    "growthEdge" TEXT,
    "needsLess" TEXT,
    "needsMore" TEXT,
    "fiveMinuteSignal" TEXT,
    "coreTension" TEXT,
    "preDecisionQuestions" TEXT[],
    "bossWorksWell" TEXT[],
    "bossStruggles" TEXT[],

    CONSTRAINT "Archetype_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssessmentQuestion" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "reverse" BOOLEAN NOT NULL DEFAULT false,
    "weights" JSONB NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "options" JSONB,

    CONSTRAINT "AssessmentQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssessmentResponse" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "answers" JSONB NOT NULL,
    "scores" JSONB NOT NULL,
    "dimensionScores" JSONB NOT NULL,
    "archetypeZScores" JSONB NOT NULL,
    "resultArchetypeId" TEXT NOT NULL,
    "secondaryArchetypeId" TEXT,
    "overuseLevel" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssessmentResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dimension" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Dimension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DimensionLevel" (
    "id" TEXT NOT NULL,
    "dimensionId" TEXT NOT NULL,
    "tier" INTEGER NOT NULL,
    "maxScore" DOUBLE PRECISION NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "DimensionLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phase" (
    "id" TEXT NOT NULL,
    "archetypeId" TEXT NOT NULL,
    "phaseNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "weeks" TEXT NOT NULL,
    "objective" TEXT NOT NULL,

    CONSTRAINT "Phase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "inputType" TEXT NOT NULL,
    "inputs" JSONB NOT NULL,
    "prompt" TEXT,
    "promptParts" JSONB,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GateCriterion" (
    "id" TEXT NOT NULL,
    "phaseId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "GateCriterion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competency" (
    "id" TEXT NOT NULL,
    "archetypeId" TEXT NOT NULL,
    "dimensionSlug" TEXT NOT NULL,
    "fromLevel" TEXT NOT NULL,
    "toLevel" TEXT NOT NULL,
    "phaseRange" TEXT NOT NULL,

    CONSTRAINT "Competency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientPlan" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "coachId" TEXT,
    "assessmentId" TEXT NOT NULL,
    "archetypeSlug" TEXT NOT NULL,
    "currentPhase" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'active',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "ClientPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionResponse" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "values" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'not_started',
    "savedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "ActionResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoachNote" (
    "id" TEXT NOT NULL,
    "actionResponseId" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "CoachNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GateReview" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "phaseNumber" INTEGER NOT NULL,
    "criteriaMet" JSONB NOT NULL,
    "coachApproved" BOOLEAN NOT NULL DEFAULT false,
    "coachNotes" TEXT,
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "advancedAt" TIMESTAMP(3),

    CONSTRAINT "GateReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_stripeCustomerId_key" ON "User"("stripeCustomerId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "VerificationCode_email_expiresAt_idx" ON "VerificationCode"("email", "expiresAt");

-- CreateIndex
CREATE UNIQUE INDEX "Archetype_slug_key" ON "Archetype"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "AssessmentQuestion_order_key" ON "AssessmentQuestion"("order");

-- CreateIndex
CREATE INDEX "AssessmentResponse_userId_idx" ON "AssessmentResponse"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Dimension_slug_key" ON "Dimension"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Dimension_order_key" ON "Dimension"("order");

-- CreateIndex
CREATE UNIQUE INDEX "DimensionLevel_dimensionId_tier_key" ON "DimensionLevel"("dimensionId", "tier");

-- CreateIndex
CREATE UNIQUE INDEX "Phase_archetypeId_phaseNumber_key" ON "Phase"("archetypeId", "phaseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Action_phaseId_order_key" ON "Action"("phaseId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "GateCriterion_phaseId_order_key" ON "GateCriterion"("phaseId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Competency_archetypeId_dimensionSlug_key" ON "Competency"("archetypeId", "dimensionSlug");

-- CreateIndex
CREATE UNIQUE INDEX "ClientPlan_assessmentId_key" ON "ClientPlan"("assessmentId");

-- CreateIndex
CREATE INDEX "ClientPlan_clientId_idx" ON "ClientPlan"("clientId");

-- CreateIndex
CREATE INDEX "ClientPlan_coachId_idx" ON "ClientPlan"("coachId");

-- CreateIndex
CREATE INDEX "ActionResponse_planId_idx" ON "ActionResponse"("planId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionResponse_planId_actionId_key" ON "ActionResponse"("planId", "actionId");

-- CreateIndex
CREATE INDEX "GateReview_planId_idx" ON "GateReview"("planId");

-- CreateIndex
CREATE UNIQUE INDEX "GateReview_planId_phaseNumber_key" ON "GateReview"("planId", "phaseNumber");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_archetypeId_fkey" FOREIGN KEY ("archetypeId") REFERENCES "Archetype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentResponse" ADD CONSTRAINT "AssessmentResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentResponse" ADD CONSTRAINT "AssessmentResponse_resultArchetypeId_fkey" FOREIGN KEY ("resultArchetypeId") REFERENCES "Archetype"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentResponse" ADD CONSTRAINT "AssessmentResponse_secondaryArchetypeId_fkey" FOREIGN KEY ("secondaryArchetypeId") REFERENCES "Archetype"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DimensionLevel" ADD CONSTRAINT "DimensionLevel_dimensionId_fkey" FOREIGN KEY ("dimensionId") REFERENCES "Dimension"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phase" ADD CONSTRAINT "Phase_archetypeId_fkey" FOREIGN KEY ("archetypeId") REFERENCES "Archetype"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateCriterion" ADD CONSTRAINT "GateCriterion_phaseId_fkey" FOREIGN KEY ("phaseId") REFERENCES "Phase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competency" ADD CONSTRAINT "Competency_archetypeId_fkey" FOREIGN KEY ("archetypeId") REFERENCES "Archetype"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientPlan" ADD CONSTRAINT "ClientPlan_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientPlan" ADD CONSTRAINT "ClientPlan_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientPlan" ADD CONSTRAINT "ClientPlan_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "AssessmentResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionResponse" ADD CONSTRAINT "ActionResponse_planId_fkey" FOREIGN KEY ("planId") REFERENCES "ClientPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionResponse" ADD CONSTRAINT "ActionResponse_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionResponse" ADD CONSTRAINT "ActionResponse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoachNote" ADD CONSTRAINT "CoachNote_actionResponseId_fkey" FOREIGN KEY ("actionResponseId") REFERENCES "ActionResponse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateReview" ADD CONSTRAINT "GateReview_planId_fkey" FOREIGN KEY ("planId") REFERENCES "ClientPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GateReview" ADD CONSTRAINT "GateReview_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
