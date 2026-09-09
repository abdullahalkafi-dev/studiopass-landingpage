"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/utils";

export interface StackingCardItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  accentColor: string;
  bgGradient: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  badgeText?: string;
}

interface StackingCardsProps {
  items: StackingCardItem[];
}

interface CardProps {
  item: StackingCardItem;
  index: number;
  total: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}

function Card({
  item,
  index,
  total,
  range,
  targetScale,
  progress,
}: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const isLast = index === total - 1;

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center sticky top-0 py-4 sm:py-6 ${
        isLast ? "min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh]" : "min-h-[98vh] lg:min-h-[102vh]"
      }`}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${index * 24}px)`,
        }}
        className="w-full min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] xl:min-h-[520px] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 xl:p-12 border border-slate-200/90 shadow-2xl shadow-slate-200/70 relative overflow-hidden bg-white origin-top transition-shadow duration-300 flex flex-col justify-center"
      >
        {/* Soft background gradient tint */}
        <div
          className="absolute inset-0 opacity-90 -z-10 pointer-events-none"
          style={{ background: item.bgGradient }}
        />

        {/* Ambient subtle light glow */}
        <div
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
          style={{ background: item.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Role Details, Highlights & Action */}
          <div className="lg:col-span-6 space-y-4 lg:space-y-5">
            {/* Header Badge */}
            <div className="flex items-center gap-3">
              <div
                className="h-11 w-11 rounded-2xl flex items-center justify-center text-white shadow-md shadow-[#1e60f2]/20 shrink-0"
                style={{ background: item.accentColor }}
              >
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-xs">
                {item.tag}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-black text-slate-900 tracking-tight leading-[1.18]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>

            {/* Feature Bullets in 2 columns */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1.5">
              {item.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-white/85 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-slate-200/70 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#1e60f2] shrink-0" />
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={item.ctaHref}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1e60f2] hover:bg-[#185adb] text-white text-sm sm:text-base font-bold shadow-lg shadow-[#1e60f2]/25 hover:shadow-xl hover:shadow-[#1e60f2]/35 transition-all hover:gap-3.5 group"
              >
                <span>{item.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Artwork with Scroll Parallax Zoom */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] xl:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100">
              <motion.div
                className="w-full h-full relative"
                style={{ scale: imageScale }}
              >
                <Image
                  src={withBasePath(item.image)}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Decorative subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge Tag (without AI sparkles icon, without StudioPass Platform watermark) */}
              {item.badgeText && (
                <div className="absolute bottom-4 left-4 flex items-center text-white pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-lg border border-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1e60f2] animate-pulse shrink-0" />
                    <span>{item.badgeText}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StackingCards({ items }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative pb-0 sm:pb-2">
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.035;
        const range: [number, number] = [i * (1 / items.length), 1];

        return (
          <Card
            key={item.id}
            item={item}
            index={i}
            total={items.length}
            range={range}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}
