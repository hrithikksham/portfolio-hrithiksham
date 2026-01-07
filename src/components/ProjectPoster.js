// path: src/components/ProjectPoster.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectPoster({ project, onClick, index }) {
  return (
    <motion.div
      layoutId={`poster-${project.id}`}
      onClick={() => onClick(project)}
      className="group relative cursor-pointer h-[400px] w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      {/* 1. Main Container with Round Corners */}
      <div className="relative w-full h-full overflow-hidden rounded-[12px] bg-neutral-900 border border-white/5 group-hover:border-neon-blue/30 transition-colors duration-500">
        
        {/* 2. Project UI Image (B&W to Color Animation) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`/projects/${project.id}.png`} // Ensure images exist in public/projects/
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* 3. Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80 z-10" />

        {/* 4. Content Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
          
          {/* Floating Category Label */}
          <div className="absolute top-6 left-6 overflow-hidden">
            <span className="inline-block text-[10px] font-mono font-bold text-neon-blue tracking-widest uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {project.tags[0] || 'Development'}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <motion.h3 
              className="text-3xl font-bold text-white mb-2 leading-tight"
            >
              {project.title}
            </motion.h3>
            <p className="text-gray-400 text-sm line-clamp-2 max-w-[90%] group-hover:text-gray-200 transition-colors">
              {project.tagline}
            </p>
          </div>

          {/* 5. "View Case" Action Button (Reveals on Hover) */}
          <div className="mt-6 flex items-center gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
            <span className="text-xs font-bold text-white tracking-widest uppercase">View Case</span>
            <div className="w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center">
              <ArrowUpRight size={16} className="text-black" />
            </div>
          </div>

        </div>
      </div>

    </motion.div>
  );
}