import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/src/lib/content';
import { fadeUp } from '@/src/lib/motion';

export default function ExperienceScene() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl w-full mx-auto">
        <span className="text-sm font-mono text-neon-blue tracking-widest block mb-12">05 / TIMELINE</span>
        
        <div className="relative border-l border-gray-800 ml-4 md:ml-0 space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] bg-neon-blue rounded-full shadow-[0_0_10px_#00B3FF]" />
              
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <div className="flex flex-col md:flex-row md:items-center text-gray-400 mb-6 font-mono text-sm">
                <span className="text-white">{exp.company}</span>
                <span className="hidden md:inline mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="text-gray-300 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}