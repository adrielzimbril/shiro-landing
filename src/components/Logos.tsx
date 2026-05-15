"use client";

import React from "react";
import { trustLogos } from "@/lib/data";
import { motion } from "motion/react";

export const Logos = () => {
  return (
    <div className="py-20 relative z-10 border-y border-slate-100 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-12">
          Empowering the world's most customer-centric teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {trustLogos.map((logo, idx) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`text-2xl font-instrument italic flex items-center gap-2 ${logo.color || "text-slate-900"}`}
            >
              {logo.icon === "compass" && <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs not-italic font-bold">N</span>}
              {logo.icon === "sparkle" && <span className="text-xl">✦</span>}
              {logo.label}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
