// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { api, AppApiError } from "@/lib/api";

export default function HomePage() {
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  useEffect(() => {
    // Intentionally hitting a non-existent route on the backend base target
    api.get("/non-existent-endpoint-test").catch((err) => {
      // Assert that the error is cleanly parsed into an AppApiError instance
      if (err instanceof AppApiError) {
        setErrorStatus(
          `Normalized! Message: "${err.message}" | Status Code: ${err.statusCode ?? "N/A"} | Network Issue: ${err.isNetworkError}`,
        );
      } else {
        setErrorStatus("Failed: Error was not properly normalized.");
      }
    });
  }, []);

  return (
    <main className="p-8 font-sans">
      <h1 className="text-xl font-bold mb-4">Error Architecture Checkpoint</h1>
      <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg max-w-2xl font-mono text-sm">
        {errorStatus || "Running test fetch query..."}
      </div>
    </main>
  );
}
