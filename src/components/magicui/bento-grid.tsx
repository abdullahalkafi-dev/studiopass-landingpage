import * as React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-auto lg:auto-rows-[23rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl group/bento hover:shadow-2xl hover:shadow-[#1e60f2]/10 transition duration-300 shadow-input dark:shadow-none p-5 sm:p-6 bg-[#0c1322]/80 border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden backdrop-blur-sm",
        className
      )}
    >
      {/* Background/header visual */}
      <div className="flex flex-1 w-full h-full min-h-[6.5rem] rounded-xl overflow-hidden relative">
        {header}
      </div>

      {/* Content */}
      <div className="transition duration-200 z-10">
        <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-2.5 mb-2">
          <div className="flex items-center gap-2 min-w-0">
            {icon && <span className="text-[#38bdf8] shrink-0">{icon}</span>}
            <h3 className="font-bold text-slate-100 text-base sm:text-lg group-hover/bento:text-[#38bdf8] transition-colors">
              {title}
            </h3>
          </div>
          {badge && (
            <span className="shrink-0 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1e60f2]/20 text-[#38bdf8] border border-[#1e60f2]/30 whitespace-nowrap self-start">
              {badge}
            </span>
          )}
        </div>
        <p className="font-normal text-slate-400 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
