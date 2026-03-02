import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { assembleReportData } from "@/lib/report/assemble-report";
import { generateReportHTML } from "@/lib/report/generate-report-html";
import chromium from "@sparticuz/chromium";
import puppeteerCore from "puppeteer-core";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { responseId: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body.responseId) {
    return NextResponse.json(
      { error: "responseId is required" },
      { status: 400 }
    );
  }

  const response = await prisma.assessmentResponse.findUnique({
    where: { id: body.responseId },
    include: {
      resultArchetype: true,
      secondaryArchetype: true,
    },
  });

  if (!response) {
    return NextResponse.json(
      { error: "Assessment response not found" },
      { status: 404 }
    );
  }

  if (response.userId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (!user.reportPurchasedAt) {
    return NextResponse.json(
      { error: "Report not purchased" },
      { status: 402 }
    );
  }

  if (!response.resultArchetype || !response.secondaryArchetype) {
    return NextResponse.json(
      { error: "Assessment data incomplete" },
      { status: 422 }
    );
  }

  const reportData = assembleReportData(
    { name: user.name || "", email: user.email },
    {
      id: response.id,
      dimensionScores: response.dimensionScores,
      completedAt: response.completedAt,
      resultArchetype: response.resultArchetype,
      secondaryArchetype: response.secondaryArchetype,
    }
  );

  const html = generateReportHTML(reportData);

  let browser;
  try {
    browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: { width: 816, height: 1056 },
      executablePath: await chromium.executablePath(),
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { reportGeneratedAt: new Date() },
    });

    const pdfBuffer = Buffer.from(pdf);

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="UC-Assessment-Report-${reportData.assessmentId}.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
