"use client";

import { useState } from "react";

export default function ReportDownloadButton({
  responseId,
  userName,
}: {
  responseId: string;
  userName: string;
}) {
  const [loading, setLoading] = useState(false);

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
      const safeName = userName.replace(/[^a-zA-Z0-9\s-]/g, "").replace(/\s+/g, "-");
      a.download = `Leadership-Assessment-${safeName}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-[#2D3A8C] text-white font-semibold px-7 py-3.5 rounded-[10px] hover:bg-[#222d6e] transition-colors disabled:opacity-50"
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
