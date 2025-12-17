import { useState } from 'react';
import { PROJECTS } from '@/src/lib/content';
import ProjectPoster from '@/src/components/ProjectPoster';
import ProjectModal from '@/src/components/ProjectModal';

export default function ProjectsScene() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen py-24 px-6 relative" id="projects">
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-16 md:mb-24 flex items-end justify-between">
           <div>
            <span className="text-sm font-mono text-neon-blue tracking-widest">03 / WORKS</span>
            <h2 className="text-4xl md:text-6xl mt-2 font-bold">Selected Projects</h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectPoster 
              key={project.id} 
              project={project} 
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}