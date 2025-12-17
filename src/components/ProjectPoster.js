// Individual project "movie poster"
import { motion } from 'framer-motion';
import { EASE } from '@/src/lib/motion';

export default function ProjectPoster({ project, onClick, index }) {
  return (
    <motion.div
      layoutId={`poster-${project.id}`}
      onClick={() => onClick(project)}
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-gray-900 aspect-[2/3]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
    >
      {/* Placeholder Background - In prod replace with Next Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black group-hover:scale-105 transition-transform duration-700 ease-out" />
      
      {/* Spotlight Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-spotlight transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <motion.h3 
          className="text-2xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors"
        >
          {project.title}
        </motion.h3>
        <p className="text-sm text-gray-400 group-hover:-translate-y-1 transition-transform duration-500">
          {project.tagline}
        </p>
      </div>
    </motion.div>
  );
}