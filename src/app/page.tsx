import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import HeroVisual from "@/components/HeroVisual";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import ScrollIndicator from "@/components/ScrollIndicator";
import RocketAnimation from "@/components/RocketAnimation";
import RainBackground from "@/components/RainBackground";
import GlowBackground from "@/components/GlowBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <GlowBackground />
      <RainBackground />
      
      <Navbar />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 lg:pt-20 relative overflow-hidden">
          <RocketAnimation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 items-center">
              <SocialSidebar />
              <Hero />
              <HeroVisual />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
        
        <footer className="py-20 px-10 border-t border-white/5 text-center">
          <p className="text-on-surface-variant font-mono text-sm">
            © {new Date().getFullYear()} S.B. Himel. Crafted with <span className="text-secondary">Passion</span>.
          </p>
        </footer>
      </div>

      <ScrollIndicator />
    </main>
  );
}
