import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export function TimeWidget() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-inner group transition-all hover:bg-white/10 w-full h-full min-h-[140px]">
      <Clock className="w-8 h-8 text-blue-400 mb-3 opacity-80 group-hover:scale-110 transition-transform" />
      <span className="text-3xl font-extrabold text-white tracking-tighter">
        {time || "..."}
      </span>
      <span className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-bold">
        Local Time
      </span>
    </div>
  );
}

export function LocationWidget() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-inner group transition-all hover:bg-white/10 w-full h-full min-h-[140px]">
      <MapPin className="w-8 h-8 text-purple-400 mb-3 opacity-80 group-hover:scale-110 transition-transform group-hover:text-purple-300" />
      <span className="text-xl font-extrabold text-white tracking-tight">
        Remote
      </span>
      <span className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-bold text-center">
        Available Worldwide
      </span>
    </div>
  );
}

export function StatWidget({ label, value, colorClass = "text-blue-400" }: { label: string, value: string, colorClass?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-inner group transition-all hover:bg-white/10 w-full h-full min-h-[140px]">
      <span className={`text-4xl font-black tracking-tighter mb-1 ${colorClass}`}>
        {value}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold text-center">
        {label}
      </span>
    </div>
  );
}
