import { motion } from 'framer-motion';
import { SKILLS } from '@/src/lib/content';
import { staggerContainer, fadeUp } from '@/src/lib/motion';

export default function SkillsScene() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 bg-neutral-950">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-16">
          <span className="text-sm font-mono text-neon-blue tracking-widest">02 / ARSENAL</span>
          <h2 className="text-4xl mt-2 font-bold">Technical Proficiency</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS.map((skill, i) => (
            <motion.div 
              key={skill.category}
              variants={fadeUp}
              className="p-6 border-l-2 border-gray-800 hover:border-neon-blue transition-colors duration-500 bg-white/5"
            >
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map(item => (
                  <li key={item} className="text-gray-400 text-sm font-mono flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}