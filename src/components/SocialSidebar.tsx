"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const SocialSidebar = () => {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const socials = [
    { label: "GitHub", href: "https://github.com/SBHimel", icon: GithubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sbhimel/", icon: LinkedinIcon },
    { label: "Twitter", href: "https://x.com/himel2nd", icon: TwitterIcon },
    { label: "Instagram", href: "https://www.instagram.com/s.b.himel3/", icon: InstagramIcon },
    { label: "Facebook", href: "https://www.facebook.com/s.b.himel.669113", icon: FacebookIcon },
  ];

  useGsap(() => {
    gsap.from(containerRef.current?.querySelectorAll("a") || [], {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      delay: 0.5,
      ease: "power4.out",
    });

    gsap.from(lineRef.current, {
      height: 0,
      duration: 1.5,
      delay: 1,
      ease: "power3.inOut",
    });
  });

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(link, {
      x: x * 0.5,
      y: y * 0.5,
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

  return (
    <aside ref={containerRef} className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center border-r border-white/5 pb-20">
      <div className="flex flex-col gap-8">
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.8 }}
            onMouseMove={handleMagnetic}
            onMouseLeave={resetMagnetic}
            className="text-on-surface-variant hover:text-secondary transition-colors p-2"
            aria-label={social.label}
          >
            <social.icon size={24} />
          </motion.a>
        ))}
        <div
          ref={lineRef}
          className="w-px bg-gradient-to-b from-secondary to-transparent h-32 self-center mt-4"
        />
      </div>
    </aside>
  );
};

export default SocialSidebar;
