"use client";

import { useState } from "react";

export default function ReportDownloadButton({
  responseId,
  hasPurchased,
}: {
  responseId: string;
  hasPurchased: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [purchased, setPurchased] = useState(hasPurchased);

  async function handlePurchase() {
    setLoading(true);
    try {
      const res = await fetch("/api/report/purchase", { method: "POST" });
      if (res.ok) {
        setPurchased(true);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleDownload() {
    setLoading(true);
    try {
      const res = await fetch("/api/report/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responseId }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.error || "Failed to generate report");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `UC-Assessment-Report.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  if (!purchased) {
    return (
      <button
        onClick={handlePurchase}
        disabled={loading}
        className="inline-flex items-center gap-2 bg-[#22D3EE] text-[#1a1a2e] font-semibold px-7 py-3.5 rounded-[10px] hover:bg-white transition-colors disabled:opacity-50"
      >
        {loading ? "Processing..." : "Purchase Report - $50"}
        {!loading && (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-[#22D3EE] text-[#1a1a2e] font-semibold px-7 py-3.5 rounded-[10px] hover:bg-white transition-colors disabled:opacity-50"
    >
      {loading ? "Generating PDF..." : "Download Your Full Report"}
      {!loading && (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )}
    </button>
  );
}
