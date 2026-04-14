"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoSphere 3D",
    description: "An immersive data visualization platform for global climate metrics.",
    tags: ["Three.js", "React", "D3.js"],
  },
  {
    title: "Aura Commerce",
    description: "A high-performance luxury e-commerce experience with 3D product previews.",
    tags: ["Next.js", "Shopify", "R3F"],
  },
  {
    title: "Neuro-Net UI",
    description: "A futuristic design system for AI-driven management platforms.",
    tags: ["Tailwind", "Framer Motion", "GSAP"],
  },
];

export default function Projects() {
  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-center p-6 md:p-12 mb-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-6xl p-8 md:p-12 bg-neutral-900/40 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-tight text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative p-1 rounded-[28px] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col h-full overflow-hidden group shadow-inner transition-colors hover:bg-white/10"
            >
              <div className="h-48 bg-neutral-800/50 overflow-hidden relative rounded-t-[24px]">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:bg-blue-400/30 transition-all" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-300 font-medium mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
