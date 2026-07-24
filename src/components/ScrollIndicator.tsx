"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";

const ScrollIndicator = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.to(containerRef.current, {
      opacity: 0,
      y: 20,
      pointerEvents: "none",
      scrollTrigger: {
        trigger: "body",
        start: "100 top",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold headline-font text-secondary">
        Scroll
      </span>
      <motion.div
        animate={{ height: [64, 40, 64] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[1px] bg-gradient-to-b from-secondary to-transparent"
      />
    </div>
  );
};

export default ScrollIndicator;
