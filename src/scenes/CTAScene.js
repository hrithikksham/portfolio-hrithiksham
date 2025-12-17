import { motion } from 'framer-motion';
import { PERSONAL } from '@/src/lib/content';

export default function CTAScene() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-black relative">
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build something remarkable.</h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href={`mailto:${PERSONAL.email}`}
            className="px-8 py-4 bg-white text-black font-bold tracking-wider hover:bg-neon-blue hover:scale-105 transition-all duration-300"
          >
            START A PROJECT
          </a>
          <a 
             href="/resume.pdf" // Ensure resume is in public folder
             className="px-8 py-4 border border-white text-white font-bold tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </motion.div>

      <footer className="absolute bottom-8 w-full text-center text-xs text-gray-600 font-mono">
        &copy; {new Date().getFullYear()} {PERSONAL.name} • PORTFOLIO OS v1.0
      </footer>
    </section>
  );
}