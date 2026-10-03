"use client";
import { useState, useEffect } from "react";
import { Globe3D } from "@/components/ui/3d-globe";
import { StatusPill, SocialDock, ActivityWidget } from "@/components/ui/HeroWidgets";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const typingWords = ["Developer.", "Software Engineer.", "Freelancer.", "System Designer."];

export default function Hero({ onNavigate }: HeroProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setTimeout(() => {
      const i = loopNum % typingWords.length;
      const fullText = typingWords[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (isDeleting) {
        setTypingSpeed(40);
      }

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2500); // Pause at end of word
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Pause before next word
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center pt-16 pb-24 px-4 sm:px-6">
      {/* Floating Hero Widgets */}
      <StatusPill />
      <SocialDock />
      <ActivityWidget />

      {/* Globe Container - Now centered as the main focus */}
      <div className="absolute inset-0 z-0 flex items-center justify-center mask-image-bottom pointer-events-none">
        <Globe3D
          className="h-[100%] w-[100%] sm:h-[120%] sm:w-[120%] lg:h-[150%] lg:w-[150%] opacity-80 pointer-events-auto"
          config={{
            atmosphereColor: "#4da6ff",
            atmosphereIntensity: 20,
            bumpScale: 5,
            autoRotateSpeed: 0.5,
            initialRotation: { x: 0.1, y: 1.74 },
          }}
        />
      </div>

      {/* Text Content - Centered vertically & horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none w-full max-w-xl mx-auto my-auto pt-16 pb-12">
        <h2 className="mb-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-2xl">
          I'm Sadeepa <br />
          <span className="text-blue-400 inline-block min-w-[180px] sm:min-w-[280px] text-center drop-shadow-[0_0_15px_rgba(77,166,255,0.4)]">
            {text}
            <span className="animate-pulse border-r-2 sm:border-r-4 border-blue-400 ml-1"></span>
          </span>
        </h2>
        <p className="mt-1 mb-5 sm:mb-6 text-neutral-300 max-w-lg text-xs sm:text-sm md:text-base drop-shadow-md">
          Welcome to my interactive 3D universe.
        </p>

        <div className="flex gap-3 sm:gap-4 pointer-events-auto">
          <button 
            onClick={() => onNavigate?.("Projects")}
            className="flex cursor-pointer items-center justify-center rounded-xl sm:rounded-2xl bg-blue-600/90 backdrop-blur-md px-5 py-2 text-xs sm:text-sm md:px-8 md:py-3 md:text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            Show Projects
          </button>
          <button 
            onClick={() => onNavigate?.("Contact")}
            className="flex cursor-pointer items-center justify-center rounded-xl sm:rounded-2xl bg-neutral-800/90 backdrop-blur-md px-5 py-2 text-xs sm:text-sm md:px-8 md:py-3 md:text-base font-semibold text-white shadow-lg border border-neutral-700 transition-all duration-200 hover:bg-neutral-700 hover:scale-105 active:scale-95"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
