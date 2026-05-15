"use client";

import React from "react";
import { trustLogos } from "@/lib/data";
import { motion } from "motion/react";

export const Logos = () => {
  // Double the logos for a seamless loop
  const duplicatedLogos = [...trustLogos, ...trustLogos, ...trustLogos];

  return (
    <div className="py-16 relative z-10 border-y border-violet-100 bg-white/40 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400/80">
          Trusted by high-performance teams worldwide
        </p>
      </div>
      
      <div className="alpha-marquee-mask relative">
        <div className="marquee-track flex items-center gap-16 md:gap-24">
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className={`flex items-center gap-3 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default group`}
            >
              <div className={`text-2xl md:text-3xl font-instrument italic flex items-center gap-2 ${logo.color || "text-slate-900"} group-hover:text-violet-600`}>
                {logo.icon === "compass" && (
                  <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-[10px] not-italic font-bold">N</span>
                )}
                {logo.icon === "sparkle" && <span className="text-xl">✦</span>}
                <span className="tracking-tight">{logo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
