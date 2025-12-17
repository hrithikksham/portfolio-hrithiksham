import { motion } from 'framer-motion';
import Image from 'next/image';
import { PERSONAL } from '@/src/lib/content';
import { fadeUp } from '@/src/lib/motion';

export default function IdentityScene() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      
      {/* Stars & Comet Background */}
      <div className="stars-container">
          <div className="stars-layer"></div>
          <div className="stars-layer"></div>
          <div className="stars-layer"></div>
          <div className="comet"></div>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          className="md:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <motion.h2 variants={fadeUp} className="text-sm font-mono text-neon-blue mb-8 tracking-widest uppercase">
            01 / IDENTITY
          </motion.h2>
          <motion.h3 variants={fadeUp} custom={1} className="text-2xl md:text-7xl font-bold leading-none mb-8 font-serif">
            Hello, I'm<br />{PERSONAL.name}.
          </motion.h3>
          <motion.p variants={fadeUp} custom={2} className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
            {PERSONAL.bio}
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
            {PERSONAL.chips.map(chip => (
              <span key={chip} className="px-6 py-3 bg-neutral-900/50 border border-neutral-800 rounded-full text-sm text-gray-300 tracking-wider uppercase transition-colors hover:border-neon-blue hover:text-white cursor-default">
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Portrait Image */}
        <motion.div 
          className="md:col-span-5 relative h-[800px] w-full  overflow-hidden  "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <Image
            src="/profile.png" // Make sure this file is in your public folder
            alt={PERSONAL.name}
            fill
            className="object-cover bw-landscape-effect"
            priority
          />
          {/* Subtle gradient overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}