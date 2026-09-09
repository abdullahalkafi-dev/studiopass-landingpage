"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 h-8 gap-1.5",
      md: "text-sm px-4 py-2.5 h-10 gap-2",
      lg: "text-base px-6 py-3.5 h-12 gap-2.5 font-semibold",
    };

    const variantStyles = {
      default:
        "bg-[#1e60f2] hover:bg-[#1950cc] text-white shadow-lg shadow-[#1e60f2]/20 border border-[#3b82f6]/30",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200",
      outline:
        "bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400",
      ghost:
        "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900",
      glow:
        "relative bg-gradient-to-r from-[#1e60f2] to-[#38bdf8] text-white font-semibold shadow-[0_0_20px_rgba(30,96,242,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] border border-cyan-300/40",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
