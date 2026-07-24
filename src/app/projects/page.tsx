"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/GlowBackground";

const PROJECTS_PER_PAGE = 6;

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <GlowBackground />
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-left mb-16 space-y-4">
            <h1 className="headline-font text-4xl md:text-6xl font-bold text-white tracking-tighter">
              All <span className="text-secondary drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">Projects</span>
            </h1>
            <p className="text-on-surface-variant text-xl font-light max-w-2xl">
              A complete archive of my web development journey, showcasing everything from small experiments to full-scale applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col gap-5 bg-white/5 border border-white/10 rounded-3xl p-4 hover:border-secondary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-white/80 font-mono text-xs uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-4 px-2">
                  <div>
                    <h3 className="headline-font text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                  
                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/60">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/60">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-2">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="text-white hover:text-secondary text-sm font-bold flex items-center gap-2 transition-colors uppercase tracking-wider font-mono"
                    >
                      <Eye size={14} /> Details
                    </Link>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-sm font-bold flex items-center gap-1 transition-colors uppercase tracking-wider font-mono"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center gap-2 font-mono text-sm">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                      currentPage === i + 1 
                        ? "bg-secondary/20 border-secondary text-secondary" 
                        : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
