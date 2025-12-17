import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL } from '@/src/lib/content';
import { EASE } from '@/src/lib/motion';

export default function HeroScene() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div style={{ y: y1, opacity }} className="text-center z-10 px-4">
        <motion.h1 
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
          {PERSONAL.title}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
        >
          {PERSONAL.tagline}
        </motion.p>
      </motion.div>

      {/* Spotlight Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-spotlight blur-3xl opacity-20 pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 flex flex-col items-center gap-2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
}