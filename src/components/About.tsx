"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import SplitType from "split-type";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGsap(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "lines" });
    
    gsap.from(split.lines, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section id="about-me" ref={sectionRef} className="py-20 lg:py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <h2 className="headline-font text-3xl md:text-6xl font-bold text-white">
              Passion fuels <br />
              <span className="text-secondary">purpose.</span>
            </h2>
            <p ref={textRef} className="text-on-surface-variant text-xl md:text-2xl leading-relaxed font-light">
              I am a Computer Technology student and a passionate Full Stack Developer currently mastering Next.js at Programming Hero. My journey started with a love for PC hardware, which eventually led me to the world of coding.
              <br /><br />
              I specialize in building clean, functional web applications like &apos;Dragon News&apos;. When I&apos;m not coding, you&apos;ll find me writing poetry (Shayeri) or tinkering with computer components. I believe great software is a blend of technical precision and artistic vision.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
              <div>
                <h4 className="text-secondary font-mono text-sm uppercase mb-2">Location</h4>
                <p className="text-white text-lg font-medium">Brahmanbaria, Bangladesh</p>
              </div>
              <div>
                <h4 className="text-secondary font-mono text-sm uppercase mb-2">Role</h4>
                <p className="text-white text-lg font-medium">Full Stack Web Developer</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 rounded-2xl overflow-hidden glass aspect-square flex items-center justify-center p-10 border-secondary/20 shadow-2xl shadow-secondary/5"
             >
                <div className="text-center">
                    <span className="text-[12rem] font-bold text-secondary/5 headline-font absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                        DEV
                    </span>
                    <p className="text-white text-2xl relative z-10 headline-font font-semibold tracking-tight">
                        Passion for <br/>
                        <span className="text-secondary">Exceptional Web</span>
                    </p>
                </div>
             </motion.div>
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full animate-pulse" />
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
