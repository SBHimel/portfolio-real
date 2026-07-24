"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useOrientation } from "@/hooks/useOrientation";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import Image from "next/image";

const roles = [
  "MERN Stack Developer",
  "Next.js Expert",
  "Computer Technology Student",
  "Creative Poet"
];

const HeroVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  
  const [roleIndex, setRoleIndex] = useState(0);
  const { beta, gamma } = useOrientation();
  
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 500], [0, 50]); // Slower movement (0.1x)

  // Parallax offsets
  const frameX = gamma * 0.8;
  const frameY = beta * 0.8;

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useGsap(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 0.8,
      rotateY: 45,
      duration: 1.5,
      delay: 0.5,
      ease: "power4.out",
    });

    gsap.from([frame1Ref.current, frame2Ref.current], {
      opacity: 0,
      scale: 0.5,
      stagger: 0.2,
      duration: 1,
      delay: 1,
      ease: "back.out(1.7)",
    });
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 20,
      rotateX: -y * 20,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div ref={containerRef} className="lg:col-span-4 flex items-center justify-center relative z-[50] p-4 lg:p-0">
      <div className="flex items-center gap-4">
        {/* Vertical Identity Bar */}
        <div className="flex flex-col h-[280px] md:h-[480px] py-4 border-l border-white/10 pl-2 md:pl-4 justify-center flex-shrink-0">
          <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2 text-on-surface-variant font-mono text-[12px] md:text-[20px] uppercase tracking-[0.2em] whitespace-nowrap">
            <span>I am a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.5 }}
                className="text-white font-bold"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative group" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {/* Tech-inspired Geometric Frames */}
          <motion.div
            ref={frame1Ref}
            animate={{ x: frameX, y: frameY }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-secondary/40 rounded-tl-3xl transition-all duration-500 group-hover:-top-12 group-hover:-left-12"
          />
          <motion.div
            ref={frame2Ref}
            animate={{ x: -frameX, y: -frameY }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-purple-500/40 rounded-br-3xl transition-all duration-500 group-hover:-bottom-12 group-hover:-right-12"
          />

          {/* Portrait Container */}
          <motion.div
            ref={cardRef}
            style={{ 
              transformStyle: "preserve-3d",
              y: portraitY
            }}
            className="relative w-[min(80vw,16rem)] h-[min(100vw,20rem)] md:w-80 md:h-[480px] overflow-hidden rounded-2xl shadow-2xl z-10 perspective-1000"
          >
            {/* Background Abstract Tech Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-orange-900/50 opacity-40 z-0" />
            
            <div className="relative w-full h-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 grayscale hover:grayscale-0 animate-color-pulse">
              <Image
                src="/himel.jpeg"
                alt="S.B. Himel's Portrait"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Secondary Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
          </motion.div>

          {/* Floating Geometric Element */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-12 top-20 glass p-6 rounded-xl hidden lg:block z-20 border-secondary/30 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="w-12 h-1.5 bg-secondary rounded-full" />
              <div className="w-8 h-1.5 bg-white/20 rounded-full" />
              <div className="w-10 h-1.5 bg-purple-500 rounded-full" />
            </div>
          </motion.div>

          {/* Background Glows for Depth */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
