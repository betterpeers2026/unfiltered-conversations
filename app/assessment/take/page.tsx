import { redirect } from "next/navigation";
import { auth } from "@/auth";
import AssessmentWizard from "./assessment-wizard";

export default async function TakeAssessmentPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in?callbackUrl=/assessment/take");
  }

  return <AssessmentWizard />;
}
