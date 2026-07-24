"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGsap } from "@/hooks/useGsap";
import { Send, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { LinkedinIcon, TwitterIcon, InstagramIcon, FacebookIcon, GithubIcon } from "./Icons";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, href: "https://github.com/SBHimel" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/sbhimel/" },
  { name: "X (Twitter)", icon: TwitterIcon, href: "https://x.com/himel2nd" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/s.b.himel3/" },
  { name: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/s.b.himel.669113" },
];


export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useGsap(() => {
    gsap.from(containerRef.current?.children || [], {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  });

  return (
    <section id="contact-me" className="py-20 lg:py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="headline-font text-3xl md:text-6xl font-bold text-white mb-6">
                Let's build <br />
                <span className="text-secondary">something great.</span>
              </h2>
              <p className="text-on-surface-variant text-xl font-light max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a 
                href="tel:+8801840385793" 
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 group w-fit"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-mono uppercase">Phone</p>
                  <p className="text-white text-lg">+8801840385793</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://wa.me/8801840385793" 
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 group w-fit"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-mono uppercase">WHATSAPP</p>
                  <p className="text-white text-lg">+880 1840-385793</p>
                </div>
              </motion.a>

              <motion.a 
                href="mailto:s.b.himel21@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-6 group w-fit"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-mono uppercase">Email</p>
                  <p className="text-white text-lg">s.b.himel21@gmail.com</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-mono uppercase">Location</p>
                  <p className="text-white text-lg">Brahmanbaria, Bangladesh</p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group flex items-center justify-center w-12 h-12 rounded-xl glass text-white/70 overflow-visible"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      color: "#ff6b00",
                      boxShadow: "0 0 25px rgba(255, 107, 0, 0.4)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={24} className="relative z-10" />
                    
                    {/* Floating Animation */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 border border-white/10 text-white text-[10px] font-mono uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 shadow-2xl z-50 whitespace-nowrap">
                      {social.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-r border-b border-white/10 rotate-45" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl border-white/5 relative group">
            <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <input type="hidden" name="access_key" value="9c8ff722-9b06-4de7-a3f0-3eb18f49c17e" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-white/60 uppercase">Full Name</label>
                  <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-white/60 uppercase">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-white/60 uppercase">Subject</label>
                <input type="text" name="subject" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-white/60 uppercase">Message</label>
                <textarea rows={5} name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary/50 transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-mono">
                  Something went wrong. Please try again.
                </div>
              )}

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary text-white headline-font font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-secondary/20 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
