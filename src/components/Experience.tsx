"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";

const experiences = [
  {
    role: "MERN Stack & Next.js Specialization",
    company: "Focused Learning",
    period: "2026 - Present",
    description: "Deep diving into full-stack development, focusing on building scalable web applications and mastering the Next.js App Router.",
  },
  {
    role: "Mastering Modern Frontend",
    company: "Skill Development",
    period: "2025 - 2026",
    description: "Dedicated learning of JavaScript (ES6+), React.js, and advanced styling with Tailwind CSS to create seamless user interfaces.",
  },
  {
    role: "Diploma in Computer Technology",
    company: "Formal Education",
    period: "2024 - Present",
    description: "Pursuing my formal education in Computer Science, building a strong foundation in core engineering principles and software logic.",
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
                  <h3 className="headline-font text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-white/60 font-medium mb-4">{exp.company}</p>
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
