// path: src/scenes/CraftScene.js
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CraftScene() {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const yMove = useTransform(scrollYProgress, [0.6, 0.9], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 0.9], [0.95, 1.05]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-32">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl w-full px-6 relative z-10">


          {/* Massive Quote */}
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] text-white tracking-tighter mb-10">
            Software is <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 animate-pulse">
              Empathy.
            </span>
          </h2>

          {/* Narrative Block */}
          <motion.div 
            style={{ y: yMove }}
            className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed"
          >
            <p className="mb-6">
              <span className="text-white font-medium">I don't just write code.</span> I engineer experiences. 
            </p>
            <p>
              In a world of noise, I build clarity. Every interaction is a story, every pixel is a deliberate choice, and every line of code is written with the human on the other side in mind.
            </p>
            
          </motion.div>

      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
}