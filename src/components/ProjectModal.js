// Full screen immersive modal
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { EASE } from '@/src/lib/motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-0 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          layoutId={`poster-${project.id}`}
          className="relative w-full max-w-5xl h-full md:h-[90vh] bg-neutral-950 overflow-y-auto scrollbar-hide border border-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-black/50 rounded-full hover:bg-neon-blue/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Hero Banner */}
          <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-gray-900 to-black flex items-end p-8 md:p-12 border-b border-gray-800">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h2>
               <p className="text-xl text-neon-blue font-mono">{project.tagline}</p>
             </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8 md:p-12">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-3">The Problem</h4>
                <p className="text-lg text-gray-300 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-3">The Solution</h4>
                <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-3">Impact</h4>
                <ul className="space-y-2">
                  {project.metrics?.map((metric, i) => (
                    <li key={i} className="flex items-center text-neon-blue">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-3">Role</h4>
                <p className="text-white">{project.role}</p>
              </div>
              <div>
                <h4 className="text-gray-500 text-sm uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-800 text-sm text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}