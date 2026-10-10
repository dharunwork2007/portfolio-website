"use client";

import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import type { ProjectData } from "@/lib/projects";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function ProjectsShowcase({ projects }: { projects: ProjectData[] }) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects & <span className="text-secondary text-glow">Implementations</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary transition-all hover:-translate-y-1">
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover border-b border-slate-700" />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4 line-clamp-3">{project.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-900 text-primary text-xs font-medium rounded-full border border-primary/30">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="text-secondary font-medium flex items-center gap-1 hover:text-white transition-colors"
              >
                View Details <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-slate-800 border border-slate-600 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-700 rounded-full text-slate-300 hover:text-white hover:bg-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-100 mb-4 pr-8">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              {selectedProject.image && (
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto rounded-lg mb-8 border border-slate-700" />
              )}
              
              <div 
                className="prose prose-invert prose-slate max-w-none prose-a:text-primary hover:prose-a:text-[#00d0e0] prose-headings:text-slate-100"
                dangerouslySetInnerHTML={{ __html: selectedProject.contentHtml }}
              />
              
              {selectedProject.github && (
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
                  >
                    <GithubIcon size={20} /> View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
