"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";

import { useState } from "react";
import { Menu, X, Home, Code2, Cpu, User2, Mail, GraduationCap } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useGsap(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(linksRef.current?.children || [], {
      y: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });
  });

  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(link, {
      x: x * 0.4,
      y: y * 0.4,
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

  const navItems = [
    { label: "home", title: "Home", icon: Home },
    { label: "about-me", title: "About", icon: User2 },
    { label: "skills", title: "Skills", icon: Cpu },
    { label: "education", title: "Education", icon: GraduationCap },
    { label: "projects", title: "Projects", icon: Code2 },
    { label: "contact-me", title: "Contact", icon: Mail },
  ];

  return (
    <>
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center glass-nav backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-2">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link href="/" className="text-white headline-font font-bold text-xl flex items-center gap-1 group">
              <svg className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              <span>S.B. Himel</span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Links */}
        <ul ref={linksRef} className="hidden md:flex gap-8 text-on-surface-variant text-sm font-medium headline-font">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={`/#${item.label}`}
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                className="hover:text-secondary transition-colors relative group flex items-center gap-1.5 py-2 px-1"
              >
                <item.icon size={16} className="text-white group-hover:text-secondary transition-colors" />
                <span>{item.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 glass rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <ul className="flex flex-col gap-10 text-center">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/#${item.label}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold headline-font text-white hover:text-secondary transition-colors flex items-center justify-center gap-3"
                  >
                    <item.icon size={32} />
                    <span>{item.title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

