"use client";

import ScrollArea from "@/components/ui/ScrollArea";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { Home as HomeIcon, User, Code2, Briefcase, Mail } from "lucide-react";

const navItems = [
  { id: "Home", icon: HomeIcon, label: "Home" },
  { id: "About", icon: User, label: "About" },
  { id: "Skills", icon: Code2, label: "Skills" },
  { id: "Projects", icon: Briefcase, label: "Projects" },
  { id: "Contact", icon: Mail, label: "Contact" },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState("Home");

  return (
    <main className="relative w-full h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Abstract Animated Blur Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full pb-32">
        <AnimatePresence mode="wait">
          {currentSection === "Home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="w-full h-full"
            >
              <Hero onNavigate={setCurrentSection} />
            </motion.div>
          )}
          {currentSection === "About" && (
            <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="w-full h-full"><ScrollArea><About /></ScrollArea></motion.div>
          )}
          {currentSection === "Skills" && (
            <motion.div key="skills" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="w-full h-full"><ScrollArea><Skills /></ScrollArea></motion.div>
          )}
          {currentSection === "Projects" && (
            <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="w-full h-full"><ScrollArea><Projects /></ScrollArea></motion.div>
          )}
          {currentSection === "Contact" && (
            <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="w-full h-full"><ScrollArea><Contact /></ScrollArea></motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* iOS Bottom Tab Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto px-4 max-w-[90vw]">
        <div className="flex items-center gap-1 sm:gap-2 px-4 py-3 bg-neutral-900/60 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`group relative flex flex-col items-center justify-center w-14 h-12 sm:w-16 sm:h-14 rounded-2xl transition-all duration-300 ${
                  isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {/* Active Indicator Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-2xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon size={isActive ? 22 : 20} className={`mb-1 transition-all duration-300 ${isActive ? "scale-110" : ""}`} />
                <span className="text-[9px] sm:text-[10px] font-medium tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
