// path: src/scenes/SkillsScene.js
import { motion } from 'framer-motion';
import { SKILLS } from '@/src/lib/content';
import { staggerContainer } from '@/src/lib/motion';

export default function SkillsScene() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Cinematic Header */}
        <div className="mb-20 flex items-end justify-between border-b border-white/10 pb-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-mono text-neon-blue tracking-[0.2em] uppercase"
            >
              EXPERTISE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl mt-4 font-bold tracking-tight"
            >
              Technical Skills
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-right"
          >
          </motion.div>
        </div>

        {/* The Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Sub-component for cleaner code
function SkillCard({ skill, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-500 overflow-hidden"
    >
      {/* "Scanning" Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full scan-shine z-0 pointer-events-none" />

      <div className="p-8 relative z-10">
        {/* Card Header */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-light tracking-wide text-white group-hover:text-neon-blue transition-colors">
            {skill.category}
          </h3>
        </div>

        {/* Skills List as "Data Tags" */}
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item, idx) => (
            <span 
              key={item} 
              className="text-sm text-gray-400 font-mono px-3 py-1 bg-black/40 border border-white/5 rounded-sm hover:text-white hover:border-white/20 transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Corner Markers */}
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 border-t border-r border-neon-blue" />
      </div>
      <div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 border-b border-l border-neon-blue" />
      </div>
    </motion.div>
  );
}