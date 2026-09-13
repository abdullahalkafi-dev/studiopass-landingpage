"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-white text-slate-900 font-sans p-6">
        <div className="max-w-md text-center space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600 font-bold text-lg">
            !
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Something went wrong</h2>
          <p className="text-sm text-slate-600">
            An unexpected error occurred while loading this page.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-xl bg-[#1e60f2] text-white font-semibold text-sm hover:bg-[#185adb] transition-colors cursor-pointer"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
