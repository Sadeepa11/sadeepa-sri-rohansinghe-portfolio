"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { name: "Mobile Apps", items: ["React Native", "Android (Java)"] },
  { name: "Backend", items: ["Laravel", "Express JS", "Node.js", "PostgreSQL", "MongoDB"] },
  { name: "Tools & Cloud", items: ["Git & GitHub", "Cloudinary", "Firebase", "Vercel"] },
];

export default function Skills() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start p-4 md:p-8 pt-8 sm:pt-12 pb-28 overflow-y-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 md:mb-10 tracking-tight text-center shrink-0">
        My <span className="text-blue-400">Tech Stack</span>
      </h2>
      
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
            className="p-5 rounded-[28px] bg-neutral-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group transition-colors hover:bg-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors border-b border-white/10 pb-2">
                {skill.name}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-neutral-300 font-medium text-xs md:text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
