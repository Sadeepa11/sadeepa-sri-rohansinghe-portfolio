"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8 pt-16 sm:pt-12 pb-28 overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
        className="w-full max-w-2xl bg-neutral-900/40 backdrop-blur-2xl p-6 md:p-10 rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight text-center">
          Let's <span className="text-blue-400">Connect</span>
        </h2>
        <p className="text-neutral-300 text-center mb-6 text-sm font-medium max-w-md mx-auto">
          Ready to launch your next project? Drop a message below and I'll get back to you within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full">
          <div className="flex-1 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center gap-1 transition hover:bg-white/10">
            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Phone & WhatsApp</span>
            <span className="text-white text-xs font-medium">+94 76 5772 504</span>
          </div>
          <div className="flex-1 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center gap-1 transition hover:bg-white/10">
            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Address</span>
            <span className="text-white text-[11px] font-medium leading-tight">
              Boralesgamuwa, Colombo, Sri Lanka
            </span>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-xs text-white placeholder:text-neutral-600"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-xs text-white placeholder:text-neutral-600"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-1">Message</label>
            <textarea 
              rows={3}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-xs text-white resize-none placeholder:text-neutral-600"
            />
          </div>
          
          <button className="w-full mt-2 cursor-pointer rounded-xl bg-white text-black py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-neutral-200 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
