"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withBasePath } from "@/lib/utils";

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  color?: string;
}

interface CampaignCarouselProps {
  campaigns: Campaign[];
}

export function CampaignCarousel({ campaigns }: CampaignCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [campaigns]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <div className="relative">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#1e60f2] px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 inline-flex items-center gap-1.5 mb-3">
            Campaigns
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Creative Campaign Gallery
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Real stories. Real engagement. See how StudioPass helps broadcasters and brands bring people closer to the moments that matter.
          </p>
        </div>

        {/* Carousel Arrow Navigation Buttons */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`h-11 w-11 rounded-2xl border flex items-center justify-center transition-all ${
              canScrollLeft
                ? "bg-white border-slate-300 text-slate-800 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] shadow-sm cursor-pointer hover:scale-105"
                : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
            }`}
            aria-label="Previous campaign"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`h-11 w-11 rounded-2xl border flex items-center justify-center transition-all ${
              canScrollRight
                ? "bg-white border-slate-300 text-slate-800 hover:bg-[#1e60f2] hover:text-white hover:border-[#1e60f2] shadow-sm cursor-pointer hover:scale-105"
                : "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
            }`}
            aria-label="Next campaign"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="flex-none w-[290px] sm:w-[330px] lg:w-[360px] snap-start group cursor-pointer"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 border border-slate-200/90 shadow-lg group-hover:shadow-2xl group-hover:border-[#1e60f2]/40 transition-all duration-300">
              <Image
                src={withBasePath(campaign.image)}
                alt={campaign.title}
                fill
                sizes="(max-width: 768px) 85vw, 360px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Category Pill Tag */}
              {campaign.tag && (
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-white/95 backdrop-blur-md text-slate-900 px-3 py-1 rounded-xl text-[11px] font-extrabold shadow-md border border-white/80">
                    {campaign.tag}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-4 px-1 space-y-1">
              <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#1e60f2] transition-colors">
                {campaign.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                {campaign.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
