"use client";

import React from "react";
import { motion } from "motion/react";
import { Orbit } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f3f3f0]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <motion.a 
          href="#" 
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#17191f] text-white shadow-lg transition-transform group-hover:scale-110">
            <Orbit className="h-4 w-4" />
          </span>
          <span className="text-lg font-semibold tracking-tight font-sans text-[#17191f]">
            OrbitDesk
          </span>
        </motion.a>

        <motion.div 
          className="hidden items-center gap-10 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#features" className="text-sm font-medium text-[#17191f]/60 hover:text-[#17191f] transition-colors font-sans">
            Features
          </a>
          <a href="#workflow" className="text-sm font-medium text-[#17191f]/60 hover:text-[#17191f] transition-colors font-sans">
            Workflow
          </a>
          <a href="#reviews" className="text-sm font-medium text-[#17191f]/60 hover:text-[#17191f] transition-colors font-sans">
            Reviews
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a 
            href="#contact" 
            className="rounded-full border border-[#17191f]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#17191f] shadow-sm hover:bg-[#17191f] hover:text-white transition-all font-sans"
          >
            Book intro
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

