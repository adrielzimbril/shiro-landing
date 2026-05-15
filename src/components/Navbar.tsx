"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

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
          <div className="absolute inset-0 rounded-full bg-violet-50/20 pointer-events-none" />

          {/* Nav Content */}
          <div className="relative z-10 flex items-center justify-between">

            {/* Brand */}
            <a href="#" className="flex items-center gap-2.5 group">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 via-violet-600 to-purple-700 shadow-[0_4px_12px_rgba(139,92,246,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:shadow-[0_8px_24px_rgba(139,92,246,0.5)] group-hover:scale-105 group-hover:rotate-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="white" />
                  <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex flex-col justify-center leading-tight">
                <span className="font-mono text-base font-bold tracking-tight text-slate-900 group-hover:text-violet-600 transition-colors">
                  SHIRO
                </span>
                <span className="text-[10px] font-medium tracking-wide text-violet-400 uppercase">
                  Personal Assistant
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-[13px] text-slate-500 font-medium">
              {[
                { label: "Features", href: "#features" },
                { label: "Pipeline", href: "#problem" },
                { label: "Workflow", href: "#how-it-works" },
                { label: "Privacy", href: "#privacy" },
                { label: "Pricing", href: "#pricing" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative transition-all duration-300 hover:text-violet-600 after:absolute after:left-1/2 after:-bottom-1.5 after:h-[3px] after:w-0 after:rounded-full after:bg-violet-500 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Navigation CTAs */}
            <div className="flex items-center gap-3">
              <a
                href="#how-it-works"
                className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-medium text-slate-700 bg-white/40 border border-white/60 hover:bg-white/80 hover:text-violet-600 transition-all duration-300"
              >
                Learn More
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white bg-gradient-to-br from-violet-500 to-purple-600 shadow-[0_4px_12px_rgba(139,92,246,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Join Now
              </a>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};
