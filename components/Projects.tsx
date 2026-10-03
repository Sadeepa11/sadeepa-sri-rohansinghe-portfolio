"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight, Layers, UserCheck } from "lucide-react";

interface Project {
  _id?: string;
  id?: string;
  title: string;
  slug?: string;
  type?: string;
  category?: string;
  client?: string;
  description: string;
  technologies?: string[];
  tags?: string[];
  projectLink?: string;
  githubLink?: string;
  images?: string[];
}

interface ProjectsProps {
  onModalToggle?: (isOpen: boolean) => void;
}

export default function Projects({ onModalToggle }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    onModalToggle?.(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
    onModalToggle?.(false);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "web") return project.type === "web";
    if (filter === "app") return project.type === "app";
    return true;
  });

  return (
    <div className="relative w-full h-full flex flex-col justify-start items-center p-4 md:p-8 pt-20 sm:pt-16 pb-20 overflow-hidden">
      {/* Title & Filter Tabs Header */}
      <div className="w-full max-w-7xl px-2 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 mb-3 shrink-0 z-10">
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-neutral-400 text-[11px] sm:text-xs md:text-sm mt-0.5">
            Explore my latest web platforms and mobile applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 bg-neutral-900/60 p-1 rounded-full border border-white/10 backdrop-blur-xl max-w-full overflow-x-auto scrollbar-none">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
              filter === "all"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            All ({projects.length})
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
              filter === "web"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Web Apps ({projects.filter(p => p.type === 'web').length})
          </button>
          <button
            onClick={() => setFilter("app")}
            className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all ${
              filter === "app"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Mobile Apps ({projects.filter(p => p.type === 'app').length})
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20 flex-1">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
        </div>
      ) : (
        /* Horizontal X-Axis Scroll Container */
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-none px-2 sm:px-6 py-2 flex items-center gap-6 snap-x snap-mandatory shrink-0">
          {filteredProjects.map((project, index) => {
            const displayTags = project.technologies || project.tags || [];
            const mainImage = project.images && project.images.length > 0 ? project.images[0] : null;

            return (
              <motion.div
                key={project._id || project.id || project.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => openProjectModal(project)}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[350px] rounded-[28px] bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-2 flex flex-col h-[380px] sm:h-[400px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:border-blue-500/50 hover:bg-white/5 cursor-pointer transition-all"
              >
                {/* Image Section */}
                <div className="h-36 sm:h-40 bg-neutral-800/50 overflow-hidden relative rounded-[22px] shrink-0">
                  {mainImage ? (
                    <img
                      src={mainImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-500/20 mix-blend-overlay group-hover:bg-blue-400/30 transition-all" />
                  )}
                  {project.category && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-blue-300 font-medium border border-white/10">
                      {project.category}
                    </span>
                  )}
                  {project.type && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-blue-600/80 backdrop-blur-md rounded-full text-[9px] uppercase font-bold text-white tracking-wider">
                      {project.type === 'web' ? 'Web App' : 'Mobile App'}
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 font-normal leading-relaxed text-xs line-clamp-2 sm:line-clamp-3 mb-2">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {displayTags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3 pt-2.5 border-t border-white/10">
                        {displayTags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-white/5 rounded-full border border-white/10 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-blue-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-1">
                      <span className="text-[10px] font-medium text-neutral-400 group-hover:text-blue-300 transition-colors">
                        View Details →
                      </span>
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Single Project Detail View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.15 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-white/15 rounded-[32px] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/40 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-600/80 rounded-full text-xs font-bold uppercase text-white tracking-wider">
                    {selectedProject.type === 'web' ? 'Web App' : 'Mobile App'}
                  </span>
                  {selectedProject.category && (
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-blue-300">
                      {selectedProject.category}
                    </span>
                  )}
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1 scrollbar-thin scrollbar-thumb-white/10">
                {/* Title and Action Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {selectedProject.title}
                    </h2>
                    {selectedProject.client && (
                      <p className="text-neutral-400 text-xs sm:text-sm mt-1 flex items-center gap-1.5">
                        <UserCheck size={14} className="text-blue-400" />
                        Client: <span className="text-white font-medium">{selectedProject.client}</span>
                      </p>
                    )}
                  </div>
                  {selectedProject.projectLink && (
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-2xl transition-all shadow-lg shadow-blue-500/25 shrink-0 self-start sm:self-auto"
                    >
                      Visit Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Main Interactive Image Showcase Carousel */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="space-y-3">
                    <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group">
                      <img
                        src={selectedProject.images[activeImageIndex]}
                        alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                        className="w-full h-full object-contain bg-black/40"
                      />
                      
                      {/* Navigation Controls */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1))}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-all cursor-pointer backdrop-blur-md"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={() => setActiveImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-all cursor-pointer backdrop-blur-md"
                          >
                            <ChevronRight size={20} />
                          </button>
                          <span className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-mono text-neutral-300 border border-white/10">
                            {activeImageIndex + 1} / {selectedProject.images.length}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Image Thumbnails Horizontal List */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-white/10">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative h-16 w-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                              activeImageIndex === idx ? "border-blue-500 scale-105" : "border-white/10 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Description */}
                <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400">About Project</h4>
                  <p className="text-neutral-200 text-sm leading-relaxed whitespace-pre-line font-normal">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies / Stack Badges */}
                {(selectedProject.technologies || selectedProject.tags) && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
                      <Layers size={14} className="text-blue-400" /> Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(selectedProject.technologies || selectedProject.tags || []).map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 bg-white/5 hover:bg-blue-500/20 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-blue-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
