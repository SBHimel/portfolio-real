"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useOrientation } from "@/hooks/useOrientation";

export default function GlowBackground() {
  const { beta, gamma } = useOrientation();
  const { scrollY } = useScroll();

  // Subtle shift based on tilt: gamma for X, beta for Y
  const translateX = gamma * 0.5;
  const translateY = beta * 0.5;

  // Scroll-based parallax (Moving faster than scroll for background elements)
  const bgScrollY = useTransform(scrollY, [0, 1000], [0, -150]);
  const gridScrollY = useTransform(scrollY, [0, 1000], [0, -50]); // Grid moves slightly faster than content

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Grid Pattern with Parallax */}
      <motion.div 
        style={{ y: gridScrollY }}
        className="absolute inset-0 grid-pattern opacity-20"
      />

      {/* Cyber Sunset Glows with Combined Tilt & Scroll Parallax */}
      <motion.div
        className="absolute -left-[25%] top-0 w-[60%] h-full blur-[120px] md:blur-[200px] rounded-full"
        style={{ y: bgScrollY }}
        animate={{
          backgroundColor: ["rgba(249, 115, 22, 0.2)", "rgba(139, 92, 246, 0.2)", "rgba(249, 115, 22, 0.2)"],
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
          x: translateX,
          y: translateY,
        }}
        transition={{
          backgroundColor: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
      />
      
      <motion.div
        className="absolute -right-[25%] top-0 w-[60%] h-full blur-[120px] md:blur-[200px] rounded-full"
        style={{ y: bgScrollY }}
        animate={{
          backgroundColor: ["rgba(139, 92, 246, 0.2)", "rgba(249, 115, 22, 0.2)", "rgba(139, 92, 246, 0.2)"],
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
          x: -translateX,
          y: -translateY,
        }}
        transition={{
          backgroundColor: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          opacity: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
      />

      {/* Decorative Glows from page.tsx */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}
        className="cyber-glow -top-[10%] -left-[10%] opacity-30 animate-pulse" 
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
        className="purple-glow -bottom-[10%] -right-[10%] opacity-20" 
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,5,36,1)_80%)]" />
    </div>
  );
}



