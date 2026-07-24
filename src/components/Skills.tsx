"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileCode2, Paintbrush, FileJson, Code2, Globe, Palette, Layout, Move, 
  Server, Network, ShieldCheck, Lock, 
  Database, HardDrive, 
  BrainCircuit, Bot, Sparkles, 
  Component, Layers, LayoutTemplate, 
  GitMerge, Terminal, PenTool, Send, Cloud, Triangle 
} from "lucide-react";
import { GithubIcon } from "./Icons";

type SkillCategory = "All" | "Frontend" | "Backend" | "Database" | "AI Integration" | "UI Libraries" | "Tools & Deployment";

const categories: SkillCategory[] = [
  "All", "Frontend", "Backend", "Database", "AI Integration", "UI Libraries", "Tools & Deployment"
];

// Reusable centralized data structure for skills
const skillsData = [
  // Frontend
  { name: "HTML5", category: "Frontend", proficiency: 95, icon: FileCode2 },
  { name: "CSS3", category: "Frontend", proficiency: 90, icon: Paintbrush },
  { name: "JavaScript (ES6+)", category: "Frontend", proficiency: 80, icon: FileJson },
  { name: "React.js", category: "Frontend", proficiency: 85, icon: Code2 },
  { name: "Next.js", category: "Frontend", proficiency: 70, icon: Globe },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 90, icon: Palette },
  { name: "Responsive Design", category: "Frontend", proficiency: 90, icon: Layout },
  { name: "Framer Motion", category: "Frontend", proficiency: 70, icon: Move },

  // Backend
  { name: "Node.js", category: "Backend", proficiency: 75, icon: Server },
  { name: "Express.js", category: "Backend", proficiency: 75, icon: Server },
  { name: "REST APIs", category: "Backend", proficiency: 80, icon: Network },
  { name: "JWT Auth", category: "Backend", proficiency: 75, icon: ShieldCheck },
  { name: "Better Auth", category: "Backend", proficiency: 65, icon: Lock },

  // Database
  { name: "MongoDB", category: "Database", proficiency: 80, icon: Database },
  { name: "Mongoose", category: "Database", proficiency: 75, icon: HardDrive },

  // AI Integration
  { name: "OpenRouter API", category: "AI Integration", proficiency: 70, icon: BrainCircuit },
  { name: "AI API Integration", category: "AI Integration", proficiency: 70, icon: Bot },
  { name: "Prompt Engineering", category: "AI Integration", proficiency: 75, icon: Sparkles },

  // UI Libraries
  { name: "DaisyUI", category: "UI Libraries", proficiency: 85, icon: Component },
  { name: "HeroUI", category: "UI Libraries", proficiency: 75, icon: Layers },
  { name: "shadcn/ui", category: "UI Libraries", proficiency: 70, icon: LayoutTemplate },

  // Tools & Deployment
  { name: "Git", category: "Tools & Deployment", proficiency: 80, icon: GitMerge },
  { name: "GitHub", category: "Tools & Deployment", proficiency: 85, icon: GithubIcon },
  { name: "VS Code", category: "Tools & Deployment", proficiency: 95, icon: Terminal },
  { name: "Figma", category: "Tools & Deployment", proficiency: 65, icon: PenTool },
  { name: "Postman", category: "Tools & Deployment", proficiency: 75, icon: Send },
  { name: "Netlify", category: "Tools & Deployment", proficiency: 80, icon: Cloud },
  { name: "Vercel", category: "Tools & Deployment", proficiency: 70, icon: Triangle },
];

const getLevel = (prof: number) => {
  if (prof >= 90) return "Expert";
  if (prof >= 80) return "Advanced";
  if (prof >= 70) return "Intermediate";
  return "Familiar";
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-16">
          <div className="space-y-4 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="headline-font text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              Technical <span className="text-secondary drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">Arsenal</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant text-xl max-w-2xl font-light"
            >
              The technologies and tools I use to build modern, scalable, interactive, and user-focused web applications.
            </motion.p>
          </div>

          {/* Professional Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 md:gap-12 bg-white/5 border border-white/10 p-6 rounded-3xl shrink-0 backdrop-blur-sm"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-white headline-font">{skillsData.length}+</p>
              <p className="text-xs text-secondary font-mono uppercase mt-1 tracking-wider">Technologies</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white headline-font">{categories.length - 1}</p>
              <p className="text-xs text-secondary font-mono uppercase mt-1 tracking-wider">Areas</p>
            </div>
            <div className="w-px hidden md:block bg-white/10" />
            <div className="text-center hidden md:block">
              <p className="text-3xl font-bold text-white headline-font">∞</p>
              <p className="text-xs text-secondary font-mono uppercase mt-1 tracking-wider">Learning</p>
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden md:flex-wrap gap-2 md:gap-3 mb-12 pb-4 md:pb-0 justify-start md:justify-start w-full snap-x snap-mandatory">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 snap-start ${
                activeCategory === category 
                  ? "text-white" 
                  : "text-white/50 hover:text-white/80 hover:bg-white/5"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-secondary/20 border border-secondary/50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                key={skill.name}
                className="glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-white/5 hover:border-secondary/30 transition-all group overflow-hidden relative flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 mb-4 sm:mb-6 relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/10 group-hover:border-secondary/30 transition-all duration-500 shadow-xl shrink-0">
                    <skill.icon size={24} className="text-white/70 group-hover:text-secondary transition-colors scale-75 sm:scale-100" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-white/30 uppercase tracking-widest px-2 py-1 sm:px-3 bg-white/5 rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                    {getLevel(skill.proficiency)}
                  </span>
                </div>

                <div className="space-y-1 mb-4 sm:mb-6 relative z-10">
                  <h3 className="headline-font font-bold text-sm sm:text-xl text-white group-hover:text-secondary transition-colors line-clamp-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-1">
                    {skill.category}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-white/40 uppercase tracking-wider text-[10px] sm:text-xs">Proficiency</span>
                    <span className="font-mono text-secondary font-bold text-xs sm:text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-secondary/50 to-secondary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
