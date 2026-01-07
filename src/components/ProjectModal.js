// path: src/components/ProjectModal.js
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowRight, Layers, Cpu, Hash, ExternalLink, Zap } from 'lucide-react'; // Ensure Zap is imported

export default function ProjectModal({ project, onClose }) {
  // ... existing variants ...
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-sm" 
          onClick={onClose} 
        />

        <motion.div
          layoutId={`poster-${project.id}`}
          className="relative w-full max-w-6xl h-full md:h-[90vh] bg-neutral-950 md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* --- HERO SECTION --- */}
          <div className="relative h-[40vh] md:h-[45vh] shrink-0">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-neon-blue hover:text-black transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={`/projects/${project.id}.png`}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
            </div>

            {/* Hero Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded text-[10px] font-mono font-bold text-neon-blue uppercase tracking-wider">
                    Project Case File
                  </span>
                  <span className="text-gray-500 font-mono text-xs uppercase">
                    ID: {project.id.toUpperCase()}
                  </span>
                </div>
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2"
                  layoutId={`title-${project.id}`}
                >
                  {project.title}
                </motion.h2>
                <p className="text-xl text-gray-300 font-light max-w-2xl">
                  {project.tagline}
                </p>
              </div>

              {/* --- FUTURISTIC LAUNCH BUTTON --- */}
              {project.link && (
                <div className="hidden md:block">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black/50 overflow-hidden border border-neon-blue/30 rounded-sm transition-all duration-300 hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,179,255,0.4)]"
                  >
                    {/* 1. Background Fill Animation */}
                    <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    
                    {/* 2. Scanline Flash Effect */}
                    <div className="absolute inset-0 bg-white/20 skew-x-12 translate-x-[-150%] group-hover:animate-shine z-10" />

                    {/* 3. Text & Icon */}
                    <span className="relative z-20 flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-neon-blue group-hover:text-black transition-colors duration-300">
                      <Zap size={14} className="group-hover:fill-black" />
                      LAUNCH PROJECT
                    </span>
                    
                    <ExternalLink 
                      size={14} 
                      className="relative z-20 text-neon-blue group-hover:text-black transition-colors duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                    />
                  </a>
                </div>
              )}
              {/* -------------------------------- */}

            </div>
          </div>

          {/* ... Rest of the component (Scrollable Content Area) remains the same ... */}
          <div className="flex-1 overflow-y-auto bg-neutral-950 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 md:p-10">
                
                {/* LEFT COLUMN: Narrative (8 Cols) */}
                <motion.div 
                  className="lg:col-span-8 space-y-12"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  
                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                       <h4 className="flex items-center gap-2 text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
                         <Hash size={14} className="text-red-400" /> Challenge
                       </h4>
                       <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                         {project.problem}
                       </p>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                       <h4 className="flex items-center gap-2 text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
                         <Cpu size={14} className="text-green-400" /> Resolution
                       </h4>
                       <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                         {project.solution}
                       </p>
                    </div>
                  </div>

                  {/* Deep Dive / Description (Optional expansion based on content) */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-4">Architectural Details</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Metrics Dashboard */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-6">System Performance Metrics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.metrics?.map((metric, i) => (
                        <div key={i} className="bg-neutral-900 border border-white/10 p-4 rounded-lg flex items-start gap-3">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-neon-blue shrink-0" />
                          <span className="text-gray-300 text-sm font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>

                {/* RIGHT COLUMN: Meta Data Sidebar (4 Cols) */}
                <motion.div 
                  className="lg:col-span-4 space-y-8"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  
                  {/* Tech Stack Chips */}
                  <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-6">
                    <h4 className="flex items-center gap-2 text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
                      <Layers size={14} className="text-neon-blue" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-black border border-white/10 text-xs text-gray-300 rounded hover:border-neon-blue/50 transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role & Info */}
                  <div className="bg-neutral-900/50 border border-white/10 rounded-xl p-6 space-y-6">
                    <div>
                      <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2">My Role</h4>
                      <p className="text-white font-medium">{project.role}</p>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div>
                      <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-2">Category</h4>
                      <p className="text-white font-medium capitalize">{project.tags[0] || 'Engineering'}</p>
                    </div>
                  </div>

                </motion.div>

              </div>
            </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}