"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-center p-6 md:p-12 mb-20 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-2xl bg-neutral-900/40 backdrop-blur-2xl p-10 md:p-16 rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight text-center">
          Let's <span className="text-blue-400">Connect</span>
        </h2>
        <p className="text-neutral-300 text-center mb-10 text-lg font-medium">
          Ready to launch your next project? Drop a message below and I'll get back to you within 24 hours.
        </p>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Name</label>
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-neutral-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="your@email.com"
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-neutral-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-white resize-none placeholder:text-neutral-600"
            />
          </div>
          
          <button className="w-full mt-4 cursor-pointer rounded-2xl bg-white text-black py-5 font-bold uppercase tracking-widest transition-all hover:bg-neutral-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
