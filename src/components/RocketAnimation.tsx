"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import { Rocket } from "lucide-react";

export default function RocketAnimation() {
  const rocketRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!rocketRef.current) return;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1, // Wait 10 seconds between flights (total ~15s cycle)
    });

    // Reset position
    tl.set(rocketRef.current, {
      x: "-10vw",
      y: "110vh",
      rotate: 45,
      opacity: 0,
      scale: 0.5,
    });

    // Flight animation
    tl.to(rocketRef.current, {
      opacity: 1,
      duration: 0.5,
    })
    .to(rocketRef.current, {
      x: "110vw",
      duration: 5,
      ease: "none",
    }, "-=0.5")
    .to(rocketRef.current, {
      y: "-10vh",
      duration: 5,
      ease: "power1.in", // Faster upward movement at the end
    }, "-=5")
    .to(rocketRef.current, {
      rotate: 0,
      duration: 5,
      ease: "power1.out",
    }, "-=5")
    .to(rocketRef.current, {
      opacity: 0,
      duration: 0.5,
    }, "-=0.5");

  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div
        ref={rocketRef}
        className="absolute w-12 h-12 text-secondary/30 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Rocket className="w-full h-full rotate-[45deg]" />
        {/* Trail Effect */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-transparent via-secondary/10 to-secondary/30 blur-sm -rotate-[45deg] origin-top" />
      </div>
    </div>
  );
}
