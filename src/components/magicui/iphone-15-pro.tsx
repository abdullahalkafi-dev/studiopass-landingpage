import * as React from "react";
import { cn } from "@/lib/utils";

interface Iphone15ProProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Iphone15Pro({
  className,
  children,
  ...props
}: Iphone15ProProps) {
  return (
    <div
      className={cn(
        "relative mx-auto rounded-[48px] border-[6px] border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-black ring-1 ring-white/20 aspect-[9/19.5] w-[280px] sm:w-[310px] max-w-full overflow-hidden flex flex-col",
        className
      )}
      {...props}
    >
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 h-5 w-24 rounded-full bg-black flex items-center justify-between px-2">
        <div className="h-2.5 w-2.5 rounded-full bg-slate-950/80" />
        <div className="h-2 w-2 rounded-full bg-blue-900/40" />
      </div>

      {/* Screen Container */}
      <div className="relative flex-1 w-full h-full rounded-[40px] overflow-hidden bg-[#0a0f1d] border border-white/5 flex flex-col pt-8">
        {children}
      </div>
    </div>
  );
}
