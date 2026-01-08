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
    <section className="min-h-screen relative flex flex-col items-center justify-center bg-black overflow-hidden pt-20 pb-10">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] h-[60vh] md:w-[150vw] md:h-[50vh] bg-neon-blue/40 blur-[40px] md:blur-[120px] rounded-[100%] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[url('/film-grain.png')] opacity-20 pointer-events-none" />

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-mono text-gray-400 tracking-widest uppercase">
             Available for Hire
          </span>
        </motion.div>

        {/* Hero Headline - Responsive Scaling */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9] sm:leading-tight"
        >
          Let's Build Something<br />Great Together.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-gray-400 font-light mb-10 md:mb-12 max-w-lg md:max-w-xl mx-auto px-2"
        >
          I'm currently looking for full-time opportunities. <br className="hidden md:block" />
          If you have a vision, I have the architecture that solves.
        </motion.p>


        {/* 3. INTERACTIVE EMAIL DOCK - Responsive Stack */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 mb-16 md:mb-20 w-full sm:w-auto"
        >
          {/* Primary Action: Copy/Mail Button */}
          <div className="group relative w-full sm:w-auto">
            <button 
              onClick={handleCopy}
              className="relative z-10 flex items-center justify-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 bg-white text-black rounded-full font-bold text-base md:text-lg tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={18} className="shrink-0" />
              <span className="whitespace-nowrap">{copied ? "Copied!" : "Send Message"}</span>
              
              {/* Hide email text on small mobile screens to prevent overflow */}
              <span className="hidden sm:block w-px h-5 md:h-6 bg-gray-300 mx-1 md:mx-2" />
              <span className="hidden sm:block text-xs md:text-sm font-normal text-gray-600 font-mono">
                {PERSONAL.email}
              </span>
              
              <Copy size={14} className="text-gray-400 group-hover:text-black transition-colors shrink-0 ml-1" />
            </button>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
          </div>

          {/* Secondary Action: Resume */}
          <a 
            href="/resume.pdf"
            className="flex items-center justify-center gap-2 px-6 md:px-8 py-4 md:py-5 bg-neutral-900 border border-white/10 rounded-full text-white font-medium hover:bg-neutral-800 hover:border-white/30 transition-all duration-300 group w-full sm:w-auto"
          >
            <FileText size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            <span>Resume</span>
            <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* 4. SOCIAL LINKS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6 md:gap-8"
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
              className="p-3 md:p-4 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Social.icon size={20} className="md:w-6 md:h-6" />
            </a>
          ))}
        </motion.div>

      </div>

      {/* 5. FOOTER */}
      <div className="absolute bottom-6 md:bottom-8 w-full text-center px-4">
        <div className="text-[9px] md:text-[10px] font-mono text-gray-700 uppercase tracking-[0.2em]">
          Designed & Engineered by {PERSONAL.name} <span className="mx-1 md:mx-2">•</span> {new Date().getFullYear()}
        </div>
      </div>

    </section>
  );
}