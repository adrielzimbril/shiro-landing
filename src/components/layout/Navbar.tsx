"use client";

import React from "react";
import { motion } from "motion/react";
import { navItems } from "@/lib/data";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <motion.a 
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 font-instrument">
            Shiro
          </span>
        </motion.a>

        {/* Desktop Links */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-xl border border-white/80 rounded-full px-8 py-3 shadow-sm"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <button className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors px-4 py-2">
            Log in
          </button>
          <button className="bg-slate-950 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
            Book a Demo
          </button>
        </motion.div>
      </nav>
    </header>
  );
};
