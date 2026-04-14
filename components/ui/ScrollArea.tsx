"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollAreaProps {
  children: React.ReactNode;
}

export default function ScrollArea({ children }: ScrollAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full h-full">
      {/* Fixed iOS styled thin progress bar at the very top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#4da6ff] origin-left z-50 rounded-full shadow-[0_0_10px_#4da6ff]"
        style={{ scaleX }}
      />
      {/* Scrollable Container */}
      <div 
        ref={scrollRef} 
        className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
}
