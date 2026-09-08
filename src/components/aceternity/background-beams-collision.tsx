"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    { initialX: 80, translateX: 80, duration: 8, repeatDelay: 3, delay: 0.5 },
    { initialX: 260, translateX: 260, duration: 6.5, repeatDelay: 2.5, delay: 2 },
    { initialX: 420, translateX: 420, duration: 9, repeatDelay: 4, delay: 1 },
    { initialX: 1020, translateX: 1020, duration: 7, repeatDelay: 3, delay: 1.5 },
    { initialX: 1240, translateX: 1240, duration: 8.5, repeatDelay: 2, delay: 3 },
    { initialX: 1380, translateX: 1380, duration: 7.5, repeatDelay: 3.5, delay: 0.8 },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex flex-col items-center justify-center w-full overflow-hidden bg-[#080c15]",
        className
      )}
    >
      {/* Mobile Ambient CSS Gradient (Zero GPU Overhead) */}
      <div className="absolute inset-0 block lg:hidden pointer-events-none">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-[#1e60f2]/20 blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[220px] h-[220px] rounded-full bg-[#38bdf8]/15 blur-[90px]" />
      </div>

      {/* Desktop Cosmic Beams (GPU Optimized with Top/Bottom Gradient Mask) */}
      <div
        ref={containerRef}
        className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]"
      >
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-b from-[#1e60f2]/20 via-[#38bdf8]/10 to-transparent blur-[140px]" />
        {beams.map((beam, index) => (
          <CollisionMechanism
            key={index}
            beamOptions={beam}
            containerRef={containerRef}
            parentRef={parentRef}
          />
        ))}
      </div>

      {children}
    </div>
  );
};

const CollisionMechanism = React.memo(
  ({
    beamOptions,
    containerRef,
    parentRef,
  }: {
    beamOptions: {
      initialX?: number;
      translateX?: number;
      duration?: number;
      repeatDelay?: number;
      delay?: number;
    };
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
  }) => {
    const beamKey = React.useId();
    const [collision, setCollision] = useState<{
      detected: boolean;
      coordinates: { x: number; y: number } | null;
    }>({
      detected: false,
      coordinates: null,
    });

    const [beamKeyCount, setBeamKeyCount] = useState(0);

    return (
      <>
        <motion.div
          key={`${beamKey}-${beamKeyCount}`}
          initial={{
            translateY: "-200px",
            translateX: `${beamOptions.initialX}px`,
            opacity: 0,
          }}
          animate={{
            translateY: "800px",
            translateX: `${beamOptions.translateX}px`,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: beamOptions.duration || 8,
            repeat: Infinity,
            repeatDelay: beamOptions.repeatDelay || 2,
            delay: beamOptions.delay || 0,
            ease: "linear",
          }}
          className="absolute left-0 top-0 m-auto h-24 w-[2px] rounded-full bg-gradient-to-b from-transparent via-[#38bdf8] to-[#1e60f2]"
        />
      </>
    );
  }
);
CollisionMechanism.displayName = "CollisionMechanism";
