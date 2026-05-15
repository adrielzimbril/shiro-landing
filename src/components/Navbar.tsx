"use client";

import React from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 pt-5">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-full bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_14px_38px_-22px_rgba(15,23,42,0.42),inset_0_1px_0_rgba(255,255,255,1)] px-4 py-3"
        >
          {/* Extra white layer so dark sections do not bleed through too much */}
          <div className="absolute inset-0 rounded-full bg-white/30 pointer-events-none"></div>

          {/* Nav Content */}
          <div className="relative z-10 flex items-center justify-between">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <span className="w-9 h-9 rounded-full bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.06),inset_0_1px_0_white] flex items-center justify-center">
                <span className="font-mono text-xs font-medium tracking-[-0.08em] text-blue-600">
                  SH
                </span>
              </span>
              <span className="flex flex-col justify-center leading-none">
                <span className="font-mono text-sm font-semibold tracking-[-0.08em] text-slate-950 group-hover:text-blue-600 transition-colors">
                  SHIRO
                </span>
                <span className="mt-0.5 text-[10px] font-light tracking-[-0.03em] text-slate-400">
                  Personal AI
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7 text-xs text-slate-600 font-normal">
              {["Features", "Workflow", "Built For", "Privacy", "Pricing"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`} 
                  className="relative transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Navigation CTAs */}
            <div className="flex items-center gap-2">
              <a href="#workflow" className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-xs text-slate-700 bg-white/70 border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04),inset_0_1px_0_white] hover:bg-white hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300">
                Explore Workflow
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs text-white bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 shadow-[0_5px_14px_rgba(59,130,246,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-300">
                Try SHIRO Free
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};
