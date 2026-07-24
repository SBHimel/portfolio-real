"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { useGsap } from "@/hooks/useGsap";
import { cn } from "@/lib/utils";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGsap(() => {
    // Cipher Reveal for Name
    const nameText = "S.B. Himel";
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iteration = 0;
    const nameElement = titleRef.current?.querySelector(".name-reveal");

    if (nameElement) {
      const interval = setInterval(() => {
        nameElement.innerHTML = nameText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return nameText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= nameText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    }

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8,
      ease: "power3.out",
    });
  });

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const handleNameMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const name = e.currentTarget;
    const rect = name.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(name, {
      x: x * 0.15,
      y: y * 0.15,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const resetNameMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div ref={containerRef} className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 md:px-20 pb-20 relative z-[50]">
      <div className="space-y-6 max-w-4xl flex flex-col items-center lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border-secondary/20"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <p className="text-on-surface text-xs font-mono uppercase tracking-widest">
            Currently specializing in <span className="text-secondary">Full-Stack Dev</span>
          </p>
        </motion.div>

        <div className="space-y-4" ref={titleRef}>
          <h2 className="headline-font text-xl md:text-2xl font-bold text-secondary/80 uppercase tracking-[0.4em] ml-1">
            I am
          </h2>
          <div 
            onMouseMove={handleNameMagnetic}
            onMouseLeave={resetNameMagnetic}
            className="inline-block cursor-default select-none"
          >
            <h1 className="name-reveal headline-font text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D00] to-[#A855F7] drop-shadow-sm">
              S.B. Himel
            </h1>
          </div>
        </div>

        <p
          ref={subtitleRef}
          className="text-on-surface-variant text-lg md:text-3xl font-light leading-relaxed max-w-2xl pt-4"
        >
          Building the next generation of{" "}
          <span className="text-white font-medium border-b-2 border-secondary/30">
            web interfaces
          </span>{" "}
          with precision and passion.
        </p>

        <div
          className="pt-10 flex flex-col sm:flex-row items-center gap-6"
        >
          <motion.a
            href="#contact-me"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMagnetic}
            onMouseLeave={resetMagnetic}
            className="w-full sm:w-auto bg-secondary text-white headline-font font-bold px-12 py-5 rounded-lg hover:brightness-110 transition-all duration-300 shadow-2xl shadow-secondary/20 text-center relative overflow-hidden group"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.34, 1.56, 0.64, 1] }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMagnetic}
            onMouseLeave={resetMagnetic}
            className="w-full sm:w-auto glass text-white headline-font font-semibold px-12 py-5 rounded-lg hover:bg-white/5 transition-all duration-300 border-white/10 text-center relative overflow-hidden group"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
