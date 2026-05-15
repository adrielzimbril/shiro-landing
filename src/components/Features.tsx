"use client";

import React from 'react';
import { motion } from "motion/react";

export const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-indigo-50/20 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Section Intro */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-white px-3 py-1 mb-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05),inset_0_1px_0_white] backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-bold tracking-wider text-violet-600 uppercase">
            System Capabilities
          </p>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-8xl font-normal tracking-[-0.05em] text-slate-950 leading-[0.9] mb-10"
        >
          High-fidelity <span className="text-slate-400 font-light italic">assistance.</span>
        </motion.h2>
        
        <p className="text-lg text-slate-500 font-light max-w-xl mx-auto">
          Every layer of Shiro is architected to eliminate the friction between your intent and your output.
        </p>
      </div>

      {/* Bento Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6"
      >
        {/* Card 1: Morning Brief (Wide) */}
        <motion.div variants={item} className="md:col-span-3 lg:col-span-7 group">
          <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white p-10 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.1),inset_0_1px_0_white] hover:bg-white/60 transition-all duration-500">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-12">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <iconify-icon icon="solar:sun-2-linear" className="text-2xl text-violet-500"></iconify-icon>
                </div>
                <div className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-200 text-[10px] font-bold text-violet-600 uppercase tracking-widest">
                  Live Preview
                </div>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-3xl font-normal tracking-tight text-slate-950 mb-4">The Morning Brief</h3>
                <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                  A surgically precise summary of your priorities, schedule context, and required decisions for the day.
                </p>
              </div>

              {/* Simulation Element */}
              <div className="mt-12 relative h-48 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-white shadow-inner p-6 overflow-hidden">
                <div className="space-y-3">
                  <div className="h-8 w-full bg-white rounded-xl border border-slate-100 shadow-sm flex items-center px-4 gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-2 w-32 bg-slate-100 rounded-full" />
                  </div>
                  <div className="h-8 w-3/4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center px-4 gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                    <div className="h-2 w-24 bg-slate-100 rounded-full" />
                  </div>
                  <div className="h-8 w-5/6 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center px-4 gap-3 opacity-50">
                    <div className="w-2 h-2 rounded-full bg-slate-300" />
                    <div className="h-2 w-40 bg-slate-100 rounded-full" />
                  </div>
                </div>
                {/* Floating "Focus" Indicator */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-violet-600 text-white text-[10px] font-bold shadow-lg animate-bounce">
                  3 PRIORITIES READY
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Smart Scheduling (Square) */}
        <motion.div variants={item} className="md:col-span-3 lg:col-span-5 group">
          <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white p-10 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.1),inset_0_1px_0_white] hover:bg-white/60 transition-all duration-500">
             <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <iconify-icon icon="solar:calendar-minimalistic-linear" className="text-2xl text-indigo-500"></iconify-icon>
             </div>
             <h3 className="text-2xl font-normal tracking-tight text-slate-950 mb-4">Smart Scheduling</h3>
             <p className="text-slate-500 font-light leading-relaxed mb-8">
               Architects your day based on energy levels and cognitive load, not just slots.
             </p>
             <div className="aspect-square relative rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-violet-100 border-t-violet-500 animate-spin" />
                <span className="absolute text-[10px] font-mono text-slate-400">OPTIMIZING</span>
             </div>
          </div>
        </motion.div>

        {/* Card 3: Deep Focus (Standard) */}
        <motion.div variants={item} className="md:col-span-3 lg:col-span-4 group">
          <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.1),inset_0_1px_0_white] hover:bg-white/60 transition-all duration-500">
             <iconify-icon icon="solar:shield-check-linear" className="text-3xl text-emerald-500 mb-6"></iconify-icon>
             <h3 className="text-xl font-normal tracking-tight text-slate-950 mb-3">Deep Focus</h3>
             <p className="text-sm text-slate-500 font-light leading-relaxed">
               Proactive distraction blocking that activates when you need to execute.
             </p>
          </div>
        </motion.div>

        {/* Card 4: Action Recovery (Wide-ish) */}
        <motion.div variants={item} className="md:col-span-3 lg:col-span-8 group">
          <div className="h-full relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.4)] transition-all duration-500">
             {/* Dark Glass Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent pointer-events-none" />
             
             <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center h-full">
                <div>
                   <iconify-icon icon="solar:checklist-minimalistic-linear" className="text-3xl text-violet-400 mb-6"></iconify-icon>
                   <h3 className="text-2xl font-normal tracking-tight text-white mb-4">Action Recovery</h3>
                   <p className="text-slate-400 font-light leading-relaxed">
                     Turns messy notes and fragments into tasks and owners automatically.
                   </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-4 h-4 rounded bg-violet-500" />
                         <div className="h-1.5 w-full bg-white/10 rounded-full" />
                      </div>
                      <div className="flex items-center gap-3 opacity-60">
                         <div className="w-4 h-4 rounded bg-white/20" />
                         <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
                      </div>
                      <div className="flex items-center gap-3 opacity-30">
                         <div className="w-4 h-4 rounded bg-white/20" />
                         <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Card 5: Private Memory (Full Width) */}
        <motion.div variants={item} className="md:col-span-6 lg:col-span-12 group">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white p-10 lg:p-14 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.1),inset_0_1px_0_white] hover:bg-white/60 transition-all duration-500">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
                     Enterprise Security
                   </div>
                   <h3 className="text-4xl font-normal tracking-tight text-slate-950 mb-6">Private Digital Memory</h3>
                   <p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl">
                     Shiro carries context forward without rebuilding. It remembers your preferences, past decisions, and unique workflow patterns — securely.
                   </p>
                   <div className="mt-10 flex flex-wrap gap-4">
                      <div className="px-5 py-2.5 rounded-xl bg-white border border-slate-100 text-xs text-slate-600 font-medium shadow-sm">
                        E2E Encryption
                      </div>
                      <div className="px-5 py-2.5 rounded-xl bg-white border border-slate-100 text-xs text-slate-600 font-medium shadow-sm">
                        Local Inference
                      </div>
                   </div>
                </div>
                
                {/* Knowledge Graph Simulation */}
                <div className="relative aspect-video lg:aspect-auto h-full min-h-[300px] rounded-3xl bg-slate-50/50 border border-dashed border-slate-200 flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "24px 24px"}} />
                   {/* Animated Circles/Nodes */}
                   <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center animate-pulse">
                         <div className="w-16 h-16 rounded-full bg-violet-200 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-violet-500" />
                         </div>
                      </div>
                      <div className="absolute -top-10 -left-10 w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center animate-[bounce_3s_infinite]">
                         <iconify-icon icon="solar:user-linear" className="text-violet-400"></iconify-icon>
                      </div>
                      <div className="absolute -bottom-8 -right-12 w-14 h-14 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center animate-[bounce_4s_infinite]">
                         <iconify-icon icon="solar:document-linear" className="text-indigo-400"></iconify-icon>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

