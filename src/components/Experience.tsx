"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";

const experiences = [
  {
    period: "2024",
    title: "Started My Journey",
    description: "Began my Diploma in Computer Science & Technology and started exploring web development.",
  },
  {
    period: "2024 — 2025",
    title: "Building the Foundation",
    description: "Studied the fundamentals of programming, web development, and computer science while completing my first four semesters at Habiganj Polytechnic Institute.",
  },
  {
    period: "2025 — Present",
    title: "Continuing & Growing",
    description: "Transferred to Brahmanbaria Polytechnic Institute and currently pursuing my 5th semester while developing real-world full-stack web applications.",
  },
  {
    period: "Present",
    title: "Building Real-World Projects",
    description: "Created full-stack applications including AuraStudy, GizmoGrid, SkillSwap, and IdeaVault.",
  },
  {
    period: "Future",
    title: "Professional Software Developer",
    description: "Continuously learning, building, and preparing for a professional career in software development.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    gsap.from(lineRef.current, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    const items = containerRef.current?.querySelectorAll(".exp-item");
    items?.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });
    });
  });

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 md:px-20 relative bg-black/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="headline-font text-3xl md:text-6xl font-bold text-white mb-12 md:mb-20 text-center">
          Career <span className="text-secondary">Path</span>
        </h2>

        <div ref={containerRef} className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div ref={lineRef} className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-secondary -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => (
              <div key={i} className={`exp-item flex flex-col md:flex-row items-center gap-10 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:block w-1/2" />
                
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 z-10 border-4 border-background" />

                <div className={`w-full md:w-1/2 glass p-8 rounded-2xl border-white/5 hover:border-secondary/30 transition-colors relative`}>
                  <span className="text-secondary font-mono text-sm uppercase block mb-2">{exp.period}</span>
                  <h3 className="headline-font text-2xl font-bold text-white mb-3">{exp.title}</h3>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
