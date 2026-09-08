"use client";

import { cn } from "@/lib/utils";

export function LiveBadge({
  text = "LIVE ON AIR",
  subtext,
  className,
}: {
  text?: string;
  subtext?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e60f2]/15 border border-[#38bdf8]/30 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]",
        className
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
      </span>
      <span className="text-xs font-bold uppercase tracking-wider text-white">
        {text}
      </span>
      {subtext && (
        <>
          <span className="text-slate-500">|</span>
          <span className="text-xs text-slate-300 font-medium">{subtext}</span>
        </>
      )}
    </div>
  );
}
