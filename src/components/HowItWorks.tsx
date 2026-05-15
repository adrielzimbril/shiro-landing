"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      num: "01",
      title: "Universal Intake",
      subtitle: "RAW INTELLIGENCE",
      desc: "Drop in voice notes, links, meeting fragments, or unstructured thoughts. Shiro captures the signal within the noise instantly.",
      tag: "Live Sync",
      icon: "solar:inbox-in-linear",
      align: "left"
    },
    {
      num: "02",
      title: "Semantic Analysis",
      subtitle: "CONTEXT MAPPING",
      desc: "Our engine deconstructs your inputs, identifies key entities, and maps them against your existing workspace memory.",
      tag: "Processing...",
      icon: "solar:document-text-linear",
      align: "right"
    },
    {
      num: "03",
      title: "Cognitive Architecture",
      subtitle: "PRIORITY SYNTHESIS",
      desc: "Tasks and focus windows are ranked based on cognitive load and deadline proximity. Your day is architected for peak performance.",
      tag: "Structure Found",
      icon: "solar:target-linear",
      align: "left"
    },
    {
      num: "04",
      title: "Frictionless Execution",
      subtitle: "ACTIONABLE OUTPUT",
      desc: "Wake up to a perfectly sequenced daily brief. Next actions are already prepared, owners assigned, and friction removed.",
      tag: "Ready to Act",
      icon: "solar:checklist-minimalistic-linear",
      align: "right"
    }
  ];

  return (
    <section id="workflow" ref={containerRef} className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-violet-100/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Section Intro */}
      <div className="text-center max-w-4xl mx-auto mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white px-3 py-1 mb-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),inset_0_1px_0_white] backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-bold tracking-wider text-violet-600 uppercase">
            The Synthesis Protocol
          </p>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-8xl font-normal tracking-[-0.05em] text-slate-950 leading-[0.9] mb-10"
        >
          From noise to <span className="text-slate-400 font-light italic">architecture.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed"
        >
          SHIRO doesn't just store your data — it builds a logical framework for your life, 
          automating the transition from raw input to precise action.
        </motion.p>
      </div>

      {/* The Spine Layout */}
      <div className="relative max-w-5xl mx-auto">
        {/* Animated Central Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 hidden md:block">
          <motion.div 
            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="w-full bg-gradient-to-b from-violet-400 to-indigo-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          />
        </div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-0">
          {steps.map((step, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 md:h-[400px] ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              
              {/* Central Node */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.05),inset_0_1px_0_white] flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-violet-500" />
                </motion.div>
              </div>

              {/* Step Content */}
              <div className={`w-full md:w-1/2 flex ${step.align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                <motion.div 
                  initial={{ opacity: 0, x: step.align === 'left' ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, ease: "circOut" }}
                  className="w-full max-w-md group"
                >
                  <div className="relative p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.1),inset_0_1px_0_white] hover:bg-white/60 hover:shadow-[0_40px_80px_-40px_rgba(139,92,246,0.2),inset_0_1px_0_white] transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <iconify-icon icon={step.icon} style={{"strokeWidth":"1.5"}} className="text-2xl text-violet-500"></iconify-icon>
                      </div>
                      <span className="font-['JetBrains_Mono',monospace] text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                        Step {step.num}
                      </span>
                    </div>

                    {/* Body */}
                    <div>
                      <p className="text-[10px] font-bold font-mono text-violet-500 uppercase tracking-widest mb-2 opacity-60">
                        {step.subtitle}
                      </p>
                      <h3 className="text-2xl font-normal tracking-tight text-slate-950 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 font-light leading-relaxed mb-6">
                        {step.desc}
                      </p>
                    </div>

                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-slate-100 px-3 py-1.5 shadow-[inset_0_1px_0_white]">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-medium text-slate-600 tracking-tight uppercase">
                        {step.tag}
                      </span>
                    </div>

                    {/* Hover Decoration */}
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <iconify-icon icon="solar:round-alt-arrow-right-linear" className="text-xl text-violet-200"></iconify-icon>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Side Illustration / Data Placeholder */}
              <div className={`hidden md:flex w-1/2 ${step.align === 'left' ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative"
                >
                  {/* Abstract UI Element representing the step */}
                  <div className="w-32 h-32 rounded-3xl border border-dashed border-slate-200 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-white shadow-sm flex items-center justify-center">
                      <div className="space-y-2 w-full px-4">
                         <div className="h-1 w-3/4 bg-slate-200 rounded-full" />
                         <div className="h-1 w-1/2 bg-violet-200 rounded-full" />
                         <div className="h-1 w-2/3 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <div className="inline-flex flex-col items-center gap-6">
          <p className="text-slate-400 font-light text-sm">
            Experience the full architecture of performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <a href="#features" className="px-8 py-4 rounded-full bg-slate-950 text-white text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-[0_15px_30px_-10px_rgba(15,23,42,0.3)]">
                See Capabilities
             </a>
             <a href="#pricing" className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-950 text-sm font-medium hover:bg-slate-50 transition-all">
                View Pricing
             </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

