"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");
  const [isLoading, setIsLoading] = useState(true);

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

  const filteredProjects = projects.filter((project) => {
    if (filter === "web") return project.type === "web";
    if (filter === "app") return project.type === "app";
    return true;
  });

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center p-4 md:p-8 pt-16 sm:pt-10 pb-28 overflow-hidden">
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
                className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[350px] rounded-[28px] bg-neutral-900/40 backdrop-blur-2xl border border-white/10 p-2 flex flex-col h-[380px] sm:h-[400px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group hover:border-blue-500/30 transition-all"
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

                    {project.projectLink && (
                      <div className="flex gap-4 pt-1">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1"
                        >
                          Live Demo ↗
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
