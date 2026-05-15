"use client";

import React from "react";
import { motion } from "motion/react";
import { Orbit } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fafafa]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <motion.a 
          href="#" 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-white shadow-lg shadow-violet-500/20">
            <Orbit className="h-4 w-4" />
          </span>
          <span className="text-base font-semibold tracking-tight font-sans text-[#17191f]">
            Shiro
          </span>
        </motion.a>

        <motion.div 
          className="hidden items-center gap-10 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#features" className="text-sm font-medium text-black/60 hover:text-black transition-colors font-sans">
            Features
          </a>
          <a href="#workflow" className="text-sm font-medium text-black/60 hover:text-black transition-colors font-sans">
            Workflow
          </a>
          <a href="#reviews" className="text-sm font-medium text-black/60 hover:text-black transition-colors font-sans">
            Reviews
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a 
            href="#contact" 
            className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-[#17191f] shadow-sm hover:bg-violet-50 hover:border-violet-200 transition-all font-sans"
          >
            Book intro
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

