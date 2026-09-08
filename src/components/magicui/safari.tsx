import * as React from "react";
import { cn } from "@/lib/utils";

interface SafariProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string;
  children: React.ReactNode;
}

export function Safari({
  url = "studio.studiopass.app/live",
  className,
  children,
  ...props
}: SafariProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/15 bg-[#0a0f1d] shadow-2xl shadow-black/80 overflow-hidden flex flex-col",
        className
      )}
      {...props}
    >
      {/* Safari Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1424] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center justify-center rounded-lg bg-white/5 px-4 py-1 text-xs text-slate-400 font-mono border border-white/5 w-1/2 max-w-xs truncate">
          🔒 {url}
        </div>
        <div className="w-10" />
      </div>

      {/* Safari Body Content */}
      <div className="relative flex-1 overflow-hidden bg-[#070b14]">
        {children}
      </div>
    </div>
  );
}
