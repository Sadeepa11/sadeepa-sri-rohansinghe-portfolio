import React from "react";
import { motion } from "framer-motion";
import { Music, Terminal } from "lucide-react";

// Inline SVGs for brand icons removed from Lucide
const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

export function StatusPill() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-full shadow-lg"
    >
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">
        Available for work
      </span>
    </motion.div>
  );
}

export function SocialDock() {
  const socials = [
    { icon: GithubIcon, href: "#", color: "hover:text-white" },
    { icon: LinkedinIcon, href: "#", color: "hover:text-blue-400" },
    { icon: TwitterIcon, href: "#", color: "hover:text-sky-400" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 p-3 bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-3xl"
    >
      {socials.map((social, i) => (
        <a 
          key={i} 
          href={social.href}
          className={`p-3 rounded-2xl bg-white/5 transition-all duration-300 hover:bg-white/20 text-neutral-400 ${social.color} shadow-inner`}
        >
          <social.icon size={20} />
        </a>
      ))}
    </motion.div>
  );
}

export function ActivityWidget() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-4 w-64"
    >
      {/* Current Focus Widget */}
      <div className="p-4 bg-neutral-900/40 backdrop-blur-2xl border border-white/10 rounded-[24px] shadow-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-[16px]">
          <Terminal size={20} />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-1">Current Focus</p>
          <p className="text-sm font-semibold text-white">3D Web Interfaces</p>
        </div>
      </div>

      {/* Music Widget */}
      <div className="p-4 bg-neutral-900/40 backdrop-blur-2xl border border-white/10 rounded-[24px] shadow-lg flex items-center gap-4 group hover:bg-white/5 transition-colors">
        <div className="relative p-3 bg-purple-500/20 text-purple-400 rounded-[16px] overflow-hidden">
          <Music size={20} />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 border-2 border-purple-400/30 rounded-[16px]"
          />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-1">Listening To</p>
          <p className="text-sm font-semibold text-white line-clamp-1">Synthwave Mix</p>
        </div>
      </div>
    </motion.div>
  );
}
