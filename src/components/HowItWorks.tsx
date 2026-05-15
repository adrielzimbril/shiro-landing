"use client";

import React from "react";
import { motion } from "motion/react";
import { workflowSteps } from "@/lib/data";
import { PlugZap, Settings2, BadgeCheck, ArrowRight } from "lucide-react";

const icons = {
  PlugZap: PlugZap,
  Settings2: Settings2,
  BadgeCheck: BadgeCheck,
};

export const HowItWorks = () => {
  return (
    <section id="workflow" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-violet-600 font-bold text-xs uppercase tracking-widest mb-4"
            >
              The Workflow
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-instrument leading-none text-slate-950"
            >
              From chaos to <br />
              <span className="italic">operational excellence.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:text-right"
          >
            <p className="text-slate-500 mb-6 max-w-sm ml-auto">
              Shiro automates the heavy lifting of support management so your team can focus on what they do best: talking to humans.
            </p>
            <button className="inline-flex items-center gap-2 font-bold text-slate-950 group">
              See the full process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px bg-slate-100 -z-10" />
          
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
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${step.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-200 font-instrument text-4xl italic">0{idx + 1}</span>
                    <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed pr-4">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[3rem] bg-slate-950 p-1 bg-gradient-to-br from-violet-500/20 to-transparent"
        >
          <div className="rounded-[2.8rem] bg-slate-950 p-8 md:p-16 overflow-hidden relative group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-instrument text-white mb-6">
                  Intelligent <span className="text-violet-400 italic">auto-sorting</span> that learns your business.
                </h3>
                <p className="text-slate-400 text-lg mb-8">
                  Shiro's AI analyzes incoming messages for intent, sentiment, and urgency, automatically labeling and routing them to the best-suited agent.
                </p>
                <div className="flex flex-wrap gap-3">
                   {['Instant Detection', 'VIP Escalation', 'Language Recognition'].map(badge => (
                     <span key={badge} className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">{badge}</span>
                   ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-violet-600/20 blur-3xl rounded-full" />
                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-4 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="space-y-3">
                    <div className="h-2 w-24 bg-slate-800 rounded-full" />
                    <div className="h-2 w-full bg-slate-800/50 rounded-full" />
                    <div className="h-2 w-full bg-slate-800/50 rounded-full" />
                    <div className="pt-4 flex justify-between">
                      <div className="h-8 w-24 rounded-lg bg-violet-600/50 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-tighter">Routing...</div>
                      <div className="h-8 w-8 rounded-full bg-slate-800" />
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
