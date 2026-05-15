"use client";

import React from "react";
import { motion } from "motion/react";

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Soft blue ambient glow */}
      <motion.div 
        animate={{ 
          x: [0, 40, -20, 0],
          y: [0, 30, 50, 0],
          scale: [1, 1.06, 0.98, 1]
        }}
        transition={{ 
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-12%] left-[-12%] w-[52vw] h-[52vw] rounded-full bg-blue-200/30 blur-[7.5rem] will-change-transform"
      />

      {/* Soft sky/silver glow */}
      <motion.div 
        animate={{ 
          x: [0, -40, 30, 0],
          y: [0, -30, -50, 0],
          scale: [1, 1.08, 0.96, 1]
        }}
        transition={{ 
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-18%] right-[-10%] w-[62vw] h-[62vw] rounded-full bg-sky-200/20 blur-[8.75rem] will-change-transform"
      />

      {/* White glassy light wash */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -40, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[36%] left-[36%] w-[30vw] h-[30vw] rounded-full bg-white/50 blur-[5rem] will-change-transform"
      />

      {/* Subtle moving dot texture */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0px 0px", "64px 64px"]
        }}
        transition={{ 
          duration: 38,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.1) 1px, transparent 0)", 
          backgroundSize: "2rem 2rem" 
        }}
      />
    </div>
  );
};
