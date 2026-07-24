import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Layers, AlertTriangle, Rocket, CheckCircle2 } from "lucide-react";
import { projectsData } from "@/data/projects";
import { GithubIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/GlowBackground";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter(p => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <GlowBackground />
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* Back Button */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-secondary transition-colors font-mono text-sm uppercase tracking-wider">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          {/* 1. Project Hero */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-mono uppercase tracking-wider inline-block">
                {project.category}
              </span>
              <h1 className="headline-font text-4xl md:text-6xl font-bold text-white tracking-tighter">
                {project.title}
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl font-light leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-secondary/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Project Links / Explore the Code */}
          <section className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="headline-font text-2xl font-bold text-white mb-2">
              Explore the Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-secondary/10 border border-secondary/30 rounded-2xl text-secondary hover:bg-secondary hover:text-white transition-all duration-300 group shadow-[0_0_15px_rgba(249,115,22,0.1)]"
              >
                <ArrowUpRight size={28} className="mb-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                <span className="font-bold headline-font text-lg uppercase tracking-wider">Live Demo</span>
              </a>

              {project.clientGithub ? (
                <a
                  href={project.clientGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl text-white/80 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 group"
                >
                  <GithubIcon size={28} className="mb-3 group-hover:-translate-y-1 transition-transform" />
                  <span className="font-bold headline-font text-lg uppercase tracking-wider">Client Repository</span>
                </a>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl text-white/30 opacity-50 cursor-not-allowed">
                  <GithubIcon size={28} className="mb-3" />
                  <span className="font-bold headline-font text-lg uppercase tracking-wider">No Client Repo</span>
                </div>
              )}

              {project.serverGithub ? (
                <a
                  href={project.serverGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl text-white/80 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 group"
                >
                  <GithubIcon size={28} className="mb-3 group-hover:-translate-y-1 transition-transform" />
                  <span className="font-bold headline-font text-lg uppercase tracking-wider">Server Repository</span>
                </a>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl text-white/30 opacity-50 cursor-not-allowed">
                  <GithubIcon size={28} className="mb-3" />
                  <span className="font-bold headline-font text-lg uppercase tracking-wider">No Server Repo</span>
                </div>
              )}
            </div>
          </section>

          {/* 2. Overview */}
          <section className="space-y-6">
            <h2 className="headline-font text-3xl font-bold text-white flex items-center gap-3">
              Overview
            </h2>
            <div className="prose prose-invert prose-lg max-w-none text-on-surface-variant font-light leading-relaxed">
              <p>{project.fullDescription}</p>
            </div>
          </section>

          {/* 3. Tech Stack */}
          <section className="space-y-6">
            <h2 className="headline-font text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="text-secondary" /> Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map(tech => (
                <span key={tech} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-mono text-white/80 hover:border-secondary/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 4. Key Features */}
          {project.keyFeatures && (
            <section className="space-y-6">
              <h2 className="headline-font text-3xl font-bold text-white flex items-center gap-3">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Challenges */}
          {project.challenges && (
            <section className="space-y-6 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] pointer-events-none" />
              <h2 className="headline-font text-2xl font-bold text-amber-50 flex items-center gap-3">
                <AlertTriangle className="text-amber-400" /> Development Challenges
              </h2>
              {Array.isArray(project.challenges) ? (
                <ul className="list-disc list-inside text-amber-50/70 text-lg leading-relaxed font-light space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-amber-50/70 text-lg leading-relaxed font-light">
                  {project.challenges}
                </p>
              )}
            </section>
          )}

          {/* 6. Future Improvements */}
          {project.futureImprovements && (
            <section className="space-y-6 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] pointer-events-none" />
              <h2 className="headline-font text-2xl font-bold text-purple-50 flex items-center gap-3">
                <Rocket className="text-purple-400" /> Future Improvements
              </h2>
              {Array.isArray(project.futureImprovements) ? (
                <ul className="list-disc list-inside text-purple-50/70 text-lg leading-relaxed font-light space-y-2">
                  {project.futureImprovements.map((improvement, i) => (
                    <li key={i}>{improvement}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-purple-50/70 text-lg leading-relaxed font-light">
                  {project.futureImprovements}
                </p>
              )}
            </section>
          )}
        </div>

        {/* 8. Related Projects */}
        <div className="max-w-7xl mx-auto mt-32 pt-20 border-t border-white/5">
          <h2 className="headline-font text-3xl font-bold text-white mb-10 text-center">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map(rp => (
              <Link 
                key={rp.slug} 
                href={`/projects/${rp.slug}`}
                className="group flex flex-col gap-4 bg-white/5 border border-white/10 rounded-3xl p-3 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="px-3 pb-3">
                  <h3 className="headline-font text-lg font-bold text-white group-hover:text-secondary transition-colors line-clamp-1">
                    {rp.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mt-1">
                    {rp.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
