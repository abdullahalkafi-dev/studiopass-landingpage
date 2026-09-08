"use client";

import { cn } from "@/lib/utils";

export function AudioVisualizer({
  className,
  barCount = 16,
  color = "#38bdf8",
}: {
  className?: string;
  barCount?: number;
  color?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-end justify-center gap-[3px] h-6 px-2 py-1 rounded-md bg-black/40 border border-white/10",
        className
      )}
    >
      {Array.from({ length: barCount }).map((_, i) => {
        const animClasses = [
          "animate-[wave-anim_0.9s_ease-in-out_infinite_alternate]",
          "animate-[wave-anim_1.3s_ease-in-out_infinite_alternate_0.2s]",
          "animate-[wave-anim_0.7s_ease-in-out_infinite_alternate_0.4s]",
          "animate-[wave-anim_1.1s_ease-in-out_infinite_alternate_0.1s]",
          "animate-[wave-anim_1.5s_ease-in-out_infinite_alternate_0.3s]",
        ];
        const chosenAnim = animClasses[i % animClasses.length];

        return (
          <span
            key={i}
            style={{ backgroundColor: color }}
            className={cn("w-[3px] rounded-full min-h-[4px]", chosenAnim)}
          />
        );
      })}
    </div>
  );
}
