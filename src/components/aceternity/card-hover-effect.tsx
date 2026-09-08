"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    badge: string;
    icon: React.ReactNode;
    features: string[];
    visualPreview?: React.ReactNode;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full select-none"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#1e60f2]/15 rounded-3xl block -z-0 border border-[#38bdf8]/30"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>

          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-[#0c1424]/90 border border-white/10 group-hover:border-[#38bdf8]/50 relative z-10 flex flex-col justify-between transition-colors duration-300 shadow-xl shadow-black/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#1e60f2]/20 text-[#38bdf8] border border-[#1e60f2]/30 shadow-sm shadow-[#1e60f2]/20">
                  {item.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  {item.badge}
                </span>
              </div>

              <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#38bdf8] transition-colors">
                {item.title}
              </h4>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Rich Visual Mini Preview */}
              {item.visualPreview && (
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-[#070c18] p-2.5 shadow-inner">
                  {item.visualPreview}
                </div>
              )}
            </div>

            <ul className="space-y-2 pt-4 border-t border-white/5 text-xs text-slate-300">
              {item.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
