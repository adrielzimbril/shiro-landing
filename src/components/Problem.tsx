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
    className="group relative rounded-3xl bg-white border border-slate-200 p-8 shadow-[0_2px_12px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.12)] transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-500">
      <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors duration-500" />
    </div>
    <h3 className="text-xl font-normal text-slate-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-sm text-slate-500 leading-6 font-light">{description}</p>
  </motion.div>
);

export const Problem = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col z-10 w-full relative gap-y-16">
        {/* Section Intro */}
        <div className="max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4"
          >
            THE CHALLENGE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl"
          >
            Your work does not arrive neatly.
            <span className="block text-slate-400">It arrives as chaos.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-2xl"
          >
            Procrastination isn&apos;t laziness—it&apos;s cognitive overload. Shiro eliminates the friction 
            of deciding what to do next by organizing the noise into a clear, actionable path.
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <ProblemCard 
            icon={Brain}
            title="Mental Clutter"
            description="Half-baked ideas and random thoughts scattered across apps, tabs, and physical notes."
            delay={0.1}
          />
          <ProblemCard 
            icon={Clock}
            title="Time Fragmentation"
            description="Constant context switching that leaves you with shallow work and zero deep focus."
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
            description="Spending more time planning what to work on than actually doing the work."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
