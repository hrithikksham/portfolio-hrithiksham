// path: src/scenes/CTAScene.js
import { motion } from 'framer-motion';
import { PERSONAL } from '@/src/lib/content';
import { Mail, FileText, Github, Linkedin, ArrowUpRight, Copy } from 'lucide-react';
import { useState } from 'react';

export default function CTAScene() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-black overflow-hidden pt-20">
      
      {/* 1. ATMOSPHERIC BACKGROUND (The "Sunrise" Event Horizon) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] bg-neon-blue/20 blur-[120px] rounded-[100%] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[url('/film-grain.png')] opacity-20 pointer-events-none" />

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
             Available for Hire
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6"
        >
        Let's Build Something<br />Great Together.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-xl mx-auto"
        >
          I'm currently looking for full-time opportunities. <br className="hidden md:block" />
          If you have a vision, I have the architecture that solves.
        </motion.p>


        {/* 3. INTERACTIVE EMAIL DOCK */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary Action: Copy/Mail Button */}
          <div className="group relative">
            <button 
              onClick={handleCopy}
              className="relative z-10 flex items-center gap-4 px-8 py-5 bg-white text-black rounded-full font-bold text-lg tracking-wide hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Mail size={20} />
              <span>{copied ? "Address Copied!" : "Send Message"}</span>
              <span className="w-px h-6 bg-gray-300 mx-2" />
              <span className="text-sm font-normal text-gray-600 font-mono">
                {PERSONAL.email}
              </span>
              <Copy size={14} className="text-gray-400 group-hover:text-black transition-colors" />
            </button>
            {/* Glow effect behind button */}
            <div className="absolute inset-0 bg-white blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
          </div>

          {/* Secondary Action: Resume */}
          <a 
            href="/resume.pdf"
            className="flex items-center gap-2 px-8 py-5 bg-neutral-900 border border-white/10 rounded-full text-white font-medium hover:bg-neutral-800 hover:border-white/30 transition-all duration-300 group"
          >
            <FileText size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            <span>Resume</span>
            <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* 4. SOCIAL LINKS (Minimalist Icons) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-8"
        >
          {[
            { icon: Github, href: PERSONAL.github || "https://github.com/hrithikksham" },
            { icon: Linkedin, href: PERSONAL.linkedin },
          ].map((Social, idx) => (
            <a 
              key={idx}
              href={Social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Social.icon size={24} />
            </a>
          ))}
        </motion.div>

      </div>

      {/* 5. FOOTER (System Meta) */}
      <div className="absolute bottom-8 w-full text-center">
        <div className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.2em]">
          Designed & Engineered by {PERSONAL.name} <span className="mx-2">•</span> {new Date().getFullYear()}
        </div>
      </div>

    </section>
  );
}