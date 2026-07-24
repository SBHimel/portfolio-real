"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";

// The first 4 are the featured ones based on our data structure
const featuredProjects = projectsData.slice(0, 4);

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-4">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="headline-font text-4xl md:text-7xl font-bold text-white tracking-tighter">
              Featured <span className="text-secondary drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">Projects</span>
            </h2>
            <p className="text-on-surface-variant text-xl max-w-xl font-light">
              Showcasing my most impactful and technically complex applications.
            </p>
          </div>
          
          <Link href="/projects" className="hidden md:inline-flex group relative items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white headline-font text-sm uppercase tracking-widest overflow-hidden transition-all hover:border-secondary/50">
            <span className="relative z-10 font-bold">
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex flex-col gap-6"
            >
              {/* Image Container with Glow */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] p-px bg-gradient-to-br from-white/10 to-transparent transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] group-hover:from-secondary/30 group-hover:to-purple-500/30">
                <div className="relative w-full h-full overflow-hidden rounded-[2.45rem] bg-background">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Number Index */}
                  <span className="absolute top-6 right-8 text-white/10 font-black text-6xl headline-font select-none pointer-events-none group-hover:text-white/20 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="px-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="headline-font text-2xl md:text-3xl font-bold text-white transition-colors group-hover:text-secondary">
                      {project.title}
                    </h3>
                    <p className="text-on-surface-variant font-medium text-sm lg:text-base line-clamp-2 opacity-80">
                      {project.shortDescription}
                    </p>
                  </div>
                  <span className="hidden lg:block text-white/20 font-mono text-xs uppercase tracking-widest pt-2 whitespace-nowrap ml-4">
                    {project.category}
                  </span>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/60">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/60">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300 py-2.5 px-5 text-sm font-bold uppercase tracking-wider headline-font"
                  >
                    <Eye size={16} /> View Details
                  </Link>
                  
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-[1px] rounded-full bg-gradient-to-r from-secondary/50 to-purple-500/50 group/btn transition-all hover:scale-105"
                  >
                    <div className="relative px-6 py-2.5 rounded-full bg-background transition-all group-hover/btn:bg-transparent">
                      <span className="relative z-10 text-sm font-bold text-white flex items-center gap-2">
                        Live Demo <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/projects" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white headline-font text-sm uppercase tracking-widest overflow-hidden transition-all hover:border-secondary/50 w-full text-center">
            <span className="relative z-10 font-bold">
              View All Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
        </div>
      </div>
    </section>
  );
}
