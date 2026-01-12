import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE, COMPANIES } from '@/src/lib/content';
import { fadeUp } from '@/src/lib/motion';
import { Briefcase, Layers, Target, Zap } from 'lucide-react';

export default function ExperienceScene() {
  const containerRef = useRef(null);
  
  // Track scroll progress for the drawing line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="min-h-screen py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl w-full mx-auto relative">
        
        {/* --- THE TIMELINE TRACK --- */}
        {/* Gray Background Line */}
        <div className="absolute left-[19px] md:left-[19px] top-12 bottom-0 w-[2px] bg-gray-900 z-0" />
        
        {/* Neon Blue Moving Line */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute left-[19px] md:left-[19px] top-12 w-[2px] bg-neon-blue z-0 shadow-[0_0_15px_#00B3FF]" 
        />

        {/* --- SECTION 2: WORK EXPERIENCE --- */}
        <div className="relative z-10">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4 mb-12 pl-14"
          >
            <span className="text-sm font-mono text-gray-500 tracking-widest uppercase font-bold">
              PROFESSIONAL EXPERIENCE
            </span>
          </motion.div>

          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative pl-14 mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[13px] top-2 w-[14px] h-[14px] bg-gray-900 border border-gray-600 rounded-full z-10 group-hover:border-neon-blue transition-colors" />
              
              <div className="group">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                  {exp.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-6 font-mono text-sm mt-1">
                  <span className="text-white flex items-center gap-2">
                    <Briefcase size={14} /> {exp.company}
                  </span>
                  <span className="hidden sm:inline mx-3 text-gray-700">|</span>
                  <span className="mt-1 sm:mt-0">{exp.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="text-gray-300 leading-relaxed pl-4 border-l border-gray-800">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}