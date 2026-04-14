"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !tags) return;

    setStatus("loading");
    
    // Parse tags by comma
    const parsedTags = tags.split(",").map((t) => t.trim()).filter(Boolean);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          tags: parsedTags,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTitle("");
        setDescription("");
        setTags("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center p-6 md:p-12 relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-4xl flex items-center justify-between z-10 mb-10 pt-4">
        <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Back to Home</span>
        </Link>
        <div className="px-4 py-1.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-xs font-bold uppercase tracking-widest">
          Admin Environment
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-neutral-900/40 backdrop-blur-2xl p-10 md:p-16 rounded-[32px] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-10 relative"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Add New <span className="text-blue-400">Project</span>
        </h1>
        <p className="text-neutral-400 mb-10 font-medium">
          Fill out the details below to deploy a new project to your 3D portfolio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
          <div className="w-full space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Project Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. NextJS Dashboard"
              className="w-full px-6 py-4 rounded-[20px] bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-neutral-600"
              required
            />
          </div>
          
          <div className="w-full space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="A brief overview of the project and its goals..."
              className="w-full px-6 py-4 rounded-[20px] bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-white resize-none placeholder:text-neutral-600"
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Tags (Comma Separated)</label>
            <input 
              type="text" 
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="React, TypeScript, Tailwind"
              className="w-full px-6 py-4 rounded-[20px] bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-neutral-600"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full mt-6 group flex items-center justify-center gap-3 cursor-pointer rounded-[20px] bg-white text-black py-5 font-bold uppercase tracking-widest transition-all hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98]"
          >
            {status === "loading" ? (
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-black border-t-2"></span>
            ) : status === "success" ? (
              "Project Added!"
            ) : (
              <>
                <PlusCircle size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                Publish Project
              </>
            )}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm font-bold mt-2">Failed to add project. Ensure local storage is accessible.</p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
