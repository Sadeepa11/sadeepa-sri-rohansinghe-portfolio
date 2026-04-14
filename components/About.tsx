"use client";
import React from "react";
import { motion } from "framer-motion";
import { TimeWidget, LocationWidget, StatWidget } from "@/components/ui/Widgets";

export default function About() {
  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-start p-6 md:p-12 mb-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-4xl p-8 md:p-12 bg-neutral-900/40 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-center mb-8"
      >
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
            <img 
              src="/assets/avatar.png" 
              alt="Sadeepa Sri" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed font-medium">
          <p>
            I am a passionate <span className="text-white font-bold">Creative Developer</span> and <span className="text-white font-bold">3D Interface Designer</span> dedicated to building immersive digital experiences.
          </p>
          <p>
            With expertise in React, Next.js, and Three.js, I bridge the gap between complex functionality and stunning visual storytelling. My goal is to create products that not only work perfectly but also leave a lasting impression on every user.
          </p>
        </div>
      </motion.div>

      {/* iOS Widgets Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", bounce: 0.2 }}
        className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <div className="col-span-2 md:col-span-1">
          <TimeWidget />
        </div>
        <div className="col-span-2 md:col-span-1">
          <LocationWidget />
        </div>
        <div className="col-span-2 md:col-span-1">
          <StatWidget label="Years Experience" value="5+" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <StatWidget label="Projects Built" value="30+" colorClass="text-purple-400" />
        </div>
      </motion.div>
    </div>
  );
}
