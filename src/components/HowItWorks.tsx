"use client";

import React from "react";
import { motion } from "motion/react";
import { workflowSteps } from "@/lib/data";
import { PlugZap, Settings2, BadgeCheck, ArrowRight, Sparkles } from "lucide-react";

const icons = {
  PlugZap: PlugZap,
  Settings2: Settings2,
  BadgeCheck: BadgeCheck,
};

export const HowItWorks = () => {
  return (
    <section id="workflow" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-600 font-bold text-[10px] uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3" />
              The Workflow
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-instrument leading-[0.9] text-slate-950"
            >
              From chaos to <br />
              <span className="italic text-violet-600">operational bliss.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:text-right"
          >
            <p className="text-slate-500 mb-8 max-w-sm md:ml-auto text-lg leading-relaxed">
              Shiro automates the heavy lifting of support management so your team can focus on what they do best.
            </p>
            <button className="inline-flex items-center gap-3 font-bold text-slate-950 group text-sm uppercase tracking-wider">
              Explore the engine <div className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform"><ArrowRight className="w-4 h-4" /></div>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-100 to-transparent -z-10" />
          
          {workflowSteps.map((step, idx) => {
            const Icon = icons[step.icon as keyof typeof icons];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative mb-10">
                  <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center border border-violet-100 bg-white shadow-xl shadow-violet-100/50 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:border-violet-300`}>
                    <Icon className="w-10 h-10 text-violet-600" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-instrument italic text-xl border-4 border-white shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-950 group-hover:text-violet-600 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Preview Card - Premium Bento Style */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 rounded-[4rem] bg-slate-950 p-1.5 bg-gradient-to-br from-violet-500/40 via-violet-500/10 to-transparent shadow-2xl shadow-violet-900/20"
        >
          <div className="rounded-[3.8rem] bg-slate-950 p-10 md:p-20 overflow-hidden relative group">
            {/* Animated Glow */}
            <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-violet-600/20 blur-[120px] animate-pulse" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <h3 className="text-4xl md:text-6xl font-instrument text-white mb-8 leading-tight">
                  Intelligent <span className="text-violet-400 italic underline decoration-violet-500/50 underline-offset-8">auto-sorting</span> that learns your DNA.
                </h3>
                <p className="text-slate-400 text-xl mb-10 leading-relaxed">
                  Shiro's AI analyzes incoming messages for intent, sentiment, and urgency, automatically labeling and routing them to the best-suited agent.
                </p>
                <div className="flex flex-wrap gap-4">
                   {['Instant Detection', 'VIP Escalation', 'Language Recognition'].map(badge => (
                     <span key={badge} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">{badge}</span>
                   ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-10 bg-violet-600/30 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl group-hover:translate-y-[-10px] transition-transform duration-1000">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-violet-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2.5 w-32 bg-white/20 rounded-full" />
                        <div className="h-2 w-24 bg-white/10 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-[90%] bg-white/10 rounded-full" />
                      <div className="h-2 w-[70%] bg-white/5 rounded-full" />
                    </div>
                    <div className="pt-6 flex justify-between items-center">
                      <div className="px-4 py-2 rounded-xl bg-violet-600 text-[10px] font-bold text-white uppercase tracking-widest shadow-lg shadow-violet-600/40 animate-pulse">Routing Optimized</div>
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
