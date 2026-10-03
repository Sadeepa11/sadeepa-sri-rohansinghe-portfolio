"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 pt-12 pb-28">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-4xl p-8 md:p-12 bg-neutral-900/40 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <img 
              src="/assets/avatar.png" 
              alt="Sadeepa Sri" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="space-y-4 text-base md:text-lg text-neutral-300 leading-relaxed font-medium max-w-2xl mx-auto">
          <p>
            I am a passionate <span className="text-white font-bold">Full-Stack & Mobile App Developer</span> dedicated to building modern, robust, and intuitive digital experiences.
          </p>
          <p>
            With expertise in <span className="text-blue-300 font-semibold">React, Next.js, React Native, and Laravel</span>, I create seamless web applications and cross-platform mobile solutions tailored to real-world user needs.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
