"use client";

import React from "react";
import { motion } from "motion/react";
import { Brain, Clock, Layers, ZapOff } from "lucide-react";

const ProblemCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any; title: string; description: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative rounded-[2.5rem] bg-white border border-slate-200/60 p-8 md:p-10 shadow-[0_14px_34px_-26px_rgba(15,23,42,0.1),inset_0_1px_0_white] hover:shadow-[0_40px_80px_-40px_rgba(15,23,42,0.15)] hover:border-blue-100 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
  >
    {/* Decorative Background */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl group-hover:bg-blue-100/50 transition-colors duration-500" />
    
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:from-blue-500 group-hover:to-blue-600 group-hover:border-blue-400 group-hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all duration-500">
        <Icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl md:text-2xl font-normal text-slate-950 mb-4 tracking-tight">{title}</h3>
      <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">{description}</p>
    </div>
  </motion.div>
);

export const Problem = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col z-10 w-full relative gap-y-16">
        {/* Section Intro */}
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-blue-500" />
            <p className="font-mono text-[10px] md:text-xs font-semibold tracking-wider text-blue-600 uppercase">
              The Reality
            </p>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl"
          >
            Your work does not <br />
            <span className="text-slate-400">arrive neatly.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-base md:text-xl leading-relaxed text-slate-600 font-light max-w-2xl"
          >
            It arrives as notes, messages, meetings, and half-ideas. Shiro turns that scattered noise 
            into priorities, summaries, and actions you can actually use.
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <ProblemCard 
            icon={Brain}
            title="Mental Clutter"
            description="Half-baked ideas and random thoughts scattered across multiple apps, tabs, and notebooks."
            delay={0.1}
          />
          <ProblemCard 
            icon={Clock}
            title="Time Fragmentation"
            description="Constant context switching that leaves you with shallow work and zero deep focus time."
            delay={0.2}
          />
          <ProblemCard 
            icon={Layers}
            title="Information Gaps"
            description="Important details lost in meeting transcripts or long email threads you never re-read."
            delay={0.3}
          />
          <ProblemCard 
            icon={ZapOff}
            title="Decision Fatigue"
            description="Spending more time planning what to work on than actually getting the work done."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
