import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

// Temporary test endpoint - sets reportPurchasedAt for testing
// Replace with Stripe integration later
export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { reportPurchasedAt: new Date() },
  });

  return NextResponse.json({ success: true });
}
