"use client";

import React from "react";
import { motion } from "motion/react";
import { Inbox, FileText, Target, ClipboardList, ArrowRight } from "lucide-react";

const StepCard = ({ number, title, description, icon: Icon, badge, delay }: { 
  number: string; 
  title: string; 
  description: string; 
  icon: any;
  badge: string;
  delay: number;
}) => (
  <div className="group relative flex flex-col items-center text-center">
    {/* Number Circle */}
    <div className="h-24 w-full relative flex items-center justify-center">
      <span className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_16px_34px_-20px_rgba(15,23,42,0.55),inset_0_1px_0_white]">
        <span className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_22px_rgba(59,130,246,0.28)]"></span>
        <span className="relative font-mono text-sm font-semibold text-white">
          {number}
        </span>
      </span>
    </div>

    {/* Card */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="mt-4 rounded-[2rem] bg-white/70 border border-white p-6 min-h-[15rem] shadow-[0_16px_36px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] group-hover:-translate-y-1 group-hover:bg-white/85 transition-all duration-300"
    >
      <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h3 className="text-xl font-normal tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
        {description}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
        {badge}
      </div>
    </motion.div>
  </div>
);

export const HowItWorks = () => {
  return (
    <section id="workflow" className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs font-medium tracking-tight text-blue-500 mb-4"
        >
          HOW IT WORKS
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05]"
        >
          Turn scattered context
          <span className="block">into clear daily action.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light"
        >
          Capture what happens, let Shiro organize the context, then start with priorities,
          summaries, reminders, and next actions already prepared.
        </motion.p>
      </div>

      {/* Timeline Shell */}
      <div className="relative overflow-hidden rounded-[2.75rem] bg-white/55 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)] px-6 md:px-10 pt-16 pb-12">
        {/* Soft background glows */}
        <div className="absolute top-[-35%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-blue-200/35 blur-[6rem] pointer-events-none"></div>
        <div className="absolute bottom-[-35%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-sky-200/22 blur-[6rem] pointer-events-none"></div>
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,1) 1px, transparent 0)', backgroundSize: '2rem 2rem' }}></div>

        <div className="relative">
          {/* Animated Connection Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-[3.05rem] h-px">
            <div className="absolute inset-x-12 top-0 border-t border-dashed border-blue-300/60"></div>
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-1px] left-12 h-[2px] w-52 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent rounded-full"
            />
          </div>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <StepCard 
              number="01"
              title="Capture"
              description="Drop in voice notes, links, documents, meeting fragments, messages, and rough ideas before they disappear."
              icon={Inbox}
              badge="Input saved instantly"
              delay={0.1}
            />
            <StepCard 
              number="02"
              title="Understand"
              description="Shiro summarizes long notes, extracts useful details, connects related context, and identifies what matters."
              icon={FileText}
              badge="Context organized"
              delay={0.2}
            />
            <StepCard 
              number="03"
              title="Prioritize"
              description="Your tasks, follow-ups, decisions, and focus windows are ranked so you know what needs attention first."
              icon={Target}
              badge="3 priorities ready"
              delay={0.3}
            />
            <StepCard 
              number="04"
              title="Act"
              description="Start with a clear daily brief, suggested replies, reminders, summaries, and next actions already prepared."
              icon={ClipboardList}
              badge="Daily brief generated"
              delay={0.4}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-12 flex flex-col sm:flex-row justify-center items-center gap-3">
          <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 text-sm font-normal shadow-[0_6px_16px_rgba(15,23,42,0.06),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">
            Explore Capabilities
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white text-sm font-normal shadow-[0_10px_24px_rgba(59,130,246,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-300">
            Try Shiro Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
