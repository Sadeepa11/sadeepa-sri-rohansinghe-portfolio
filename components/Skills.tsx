"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { name: "3D & Creative", items: ["Three.js", "React Three Fiber", "Drei", "GLSL"] },
  { name: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "Socket.io"] },
  { name: "Tools & UX", items: ["Git", "Figma", "Docker", "Vercel"] },
];

export default function Skills() {
  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-center p-6 md:p-12 mb-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-5xl p-8 md:p-12 bg-neutral-900/40 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-tight text-center">
          My <span className="text-blue-400">Tech Stack</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 shadow-inner group transition-colors hover:bg-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {skill.name}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="text-neutral-300 font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
