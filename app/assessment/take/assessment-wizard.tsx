"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/lib/assessment/questions";
import { DIMENSIONS } from "@/lib/assessment/dimensions";

const LIKERT_LABELS = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export default function AssessmentWizard() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showReminder, setShowReminder] = useState(false);

  const total = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / total) * 100;
  const dimensionName = DIMENSIONS[currentQuestion.dimension].name;

  const submitAnswers = useCallback(async (finalAnswers: Record<number, number>) => {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (res.status === 401) {
          sessionStorage.setItem("pendingAssessment", JSON.stringify(finalAnswers));
          router.push("/sign-in?callbackUrl=/assessment/take?pending=true");
          return;
        }
        setError(data.error || "Failed to submit assessment");
        setSubmitting(false);
        return;
      }

      const { id } = await res.json();
      router.push(`/assessment/results/${id}`);
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }, [router]);

  // Recover pending answers after sign-in redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("pending") === "true") {
      const saved = sessionStorage.getItem("pendingAssessment");
      if (saved) {
        try {
          const savedAnswers = JSON.parse(saved) as Record<number, number>;
          sessionStorage.removeItem("pendingAssessment");
          submitAnswers(savedAnswers);
        } catch {
          // Invalid stored data, ignore
        }
      }
    }
  }, [submitAnswers]);

  const handleSelect = useCallback(
    (value: number) => {
      const newAnswers = { ...answers, [currentIndex]: value };
      setAnswers(newAnswers);

      // Auto-advance after 200ms
      setTimeout(() => {
        if (currentIndex < total - 1) {
          const nextIndex = currentIndex + 1;
          setCurrentIndex(nextIndex);

          // Show reminder at questions 15 and 30
          if (nextIndex + 1 === 15 || nextIndex + 1 === 30) {
            setShowReminder(true);
          }
        } else {
          // Last question answered, submit
          submitAnswers(newAnswers);
        }
      }, 200);
    },
    [currentIndex, answers, total, submitAnswers]
  );

  if (submitting) {
    return (
      <div className="min-h-screen bg-royal flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center text-white text-3xl mb-6 animate-pulse">
            ◇
          </div>
          <p className="text-white/80 text-lg">Generating your report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-cyan transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-foreground/40 text-sm">
            {currentIndex + 1} of {total}
          </span>
          <span className="text-royal/60 text-xs font-medium uppercase tracking-wider">
            {dimensionName}
          </span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20 pb-12">
        <div className="w-full max-w-2xl">
          {/* Dimension label */}
          <div className="text-center mb-8">
            <span className="inline-block bg-royal/5 text-royal text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full">
              {dimensionName}
            </span>
          </div>

          {/* Question text */}
          <h2 className="font-serif text-xl md:text-2xl text-foreground text-center leading-relaxed mb-12">
            {currentQuestion.prompt}
          </h2>

          {/* Likert scale */}
          <div className="space-y-3">
            {LIKERT_LABELS.map((label, i) => {
              const value = i + 1;
              const isSelected = answers[currentIndex] === value;

              return (
                <button
                  key={value}
                  onClick={() => handleSelect(value)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                    isSelected
                      ? "border-royal bg-royal/5 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-medium ${
                      isSelected
                        ? "border-royal bg-royal text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {value}
                  </span>
                  <span
                    className={`text-sm ${
                      isSelected ? "text-foreground font-medium" : "text-foreground/70"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Microcopy */}
          <p className="text-center text-foreground/30 text-xs mt-6">
            Don't solve the question. Notice yourself.
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mt-4">{error}</p>
          )}
        </div>
      </div>

      {/* Reminder modal */}
      {showReminder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-6 text-center">
            <div className="w-10 h-10 mx-auto rounded-lg bg-cyan/10 flex items-center justify-center text-cyan text-xl mb-4">
              ◇
            </div>
            <p className="font-serif text-lg text-foreground mb-2">
              Keep moving.
            </p>
            <p className="text-foreground/60 text-sm mb-6">
              Your first answer is usually the most accurate.
            </p>
            <button
              onClick={() => setShowReminder(false)}
              className="px-6 py-2.5 bg-royal text-white font-medium rounded-lg hover:bg-royal/90 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
