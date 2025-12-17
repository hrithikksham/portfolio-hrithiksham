import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Github } from 'lucide-react'; // Added icons
import { PERSONAL } from '@/src/lib/content';
import { fadeUp } from '@/src/lib/motion';

export default function IdentityScene() {
  // Generate random particles for the AI background
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 5}s`
  }));

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {/* 1. AI/Tech Background Layer (30% Opacity) */}
      <div className="tech-bg-container pointer-events-none">
        <div className="tech-grid" />
        {particles.map((p, i) => (
          <div 
            key={i} 
            className="tech-particle"
            style={{ 
              left: p.left, 
              '--duration': p.duration,
              animationDelay: p.delay 
            }} 
          />
        ))}
        {/* Vignette to focus on center */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-6 relative z-10 h-full">
        
        {/* Left Column: Typography */}
        <motion.div
          className="order-1 md:order-1 pt-20 md:pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 md:mb-8">
             <span className="h-[1px] w-8 bg-neon-blue inline-block"></span>
             <span className="text-xs md:text-sm font-mono text-neon-blue tracking-widest uppercase font-bold">
               01 / About Me
             </span>
          </motion.div>

          <motion.h3 
            variants={fadeUp} 
            custom={1} 
            className="text-6xl md:text-6xl lg:text-7xl font-serif font-bold leading-[0.9] mb-8 text-white tracking-tight"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              {PERSONAL.name}.
            </span>
          </motion.h3>

          <motion.p 
            variants={fadeUp} 
            custom={2} 
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-lg border-l-2 border-gray-800 pl-6"
          >
            {PERSONAL.bio}
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3 mb-10">
            {PERSONAL.chips.map(chip => (
              <span 
                key={chip} 
                className="px-5 py-2 rounded-full border border-gray-800 text-xs md:text-sm text-gray-300 uppercase tracking-wide hover:border-neon-blue hover:text-white hover:bg-neon-blue/10 transition-all duration-300 cursor-default"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* NEW: Action Buttons (Resume & Github) */}
          <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4">
            
            {/* Primary: Download Resume (100% White Style) */}
            <a 
              href="/resume.pdf" 
              download="Hrithik_Sham_Resume.pdf"
              className="group relative px-8 py-4 bg-white text-black rounded-full sans-serif tracking-wide flex items-center justify-center gap-3 overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" /> 
                DOWNLOAD RESUME
              </span>
            </a>

            {/* Secondary: GitHub (Dark Style) */}
            <a 
              href={PERSONAL.github || "https://github.com/hrithikksham"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-neutral-900 border border-neutral-700 text-white rounded-full sans-serif tracking-wide flex items-center justify-center gap-3 transition-all hover:bg-neutral-800 hover:border-white hover:scale-105 active:scale-95"
            >
              <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              VIEW GITHUB
            </a>

          </motion.div>
        </motion.div>

        {/* Right Column: Responsive Cutout Image (Exactly as requested) */}
        <motion.div 
          className="order-2 md:order-2 relative h-[50vh] md:h-[85vh] w-full flex items-end justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* This wrapper ensures the image scales while sticking to the bottom */}
          <div className="relative w-full max-w-[400px] md:max-w-full h-full">
            <Image
              src="/profile3.png" // MUST be a transparent PNG
              alt={PERSONAL.name}
              fill
              className="object-contain object-bottom drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Subtle backlight behind the cutout */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-t from-neon-blue/20 to-transparent blur-[100px] -z-10" />
        </motion.div>

      </div>
    </section>
  );
}