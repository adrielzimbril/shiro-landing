"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Zap, PenTool, LayoutGrid, Target, Bell, Sun } from "lucide-react";

const UseCaseCard = ({ title, description, badge, icon: Icon, delay }: { 
  title: string; 
  description: string; 
  badge: string; 
  icon: any; 
  delay: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white/70 rounded-[2.5rem] border border-white shadow-[0_18px_44px_-28px_rgba(15,23,42,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 hover:bg-white/88 transition-all duration-300"
  >
    {/* Visual Panel Placeholder / Mini UI */}
    <div className="relative mx-4 mt-4 rounded-[1.75rem] overflow-hidden bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.28),inset_0_1px_0_white] min-h-[13rem]">
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.15) 1px, transparent 0)', backgroundSize: '1rem 1rem' }}></div>
      <div className="absolute top-[-20%] left-[-10%] w-[12rem] h-[12rem] rounded-full bg-blue-100/40 blur-[3rem] pointer-events-none"></div>
      
      {/* Simulation of a UI element */}
      <div className="relative p-6">
         <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">{title} System</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500">
              <Icon className="w-4 h-4" />
            </div>
         </div>
         <div className="rounded-xl bg-white/80 border border-slate-200/60 p-4 shadow-sm">
            <div className="h-2 w-1/3 bg-slate-100 rounded mb-3"></div>
            <div className="h-4 w-3/4 bg-slate-900/10 rounded mb-2"></div>
            <div className="h-4 w-1/2 bg-slate-900/5 rounded"></div>
         </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-xl font-normal tracking-tight text-slate-950">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
            {description}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            {badge}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const MetricCard = ({ icon: Icon, value, label, description, isPrimary = false, delay }: { 
  icon: any; 
  value: string; 
  label: string; 
  description: string; 
  isPrimary?: boolean;
  delay: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`${isPrimary ? 'bg-gradient-to-b from-blue-50 to-white border-blue-100' : 'bg-white/68 border-white'} border rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]`}
  >
    <div className={`${isPrimary ? 'bg-white' : 'bg-blue-50'} w-10 h-10 rounded-2xl border ${isPrimary ? 'border-white' : 'border-blue-100'} flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5`}>
      <Icon className={`w-5 h-5 text-blue-500`} />
    </div>
    <p className={`text-3xl font-normal tracking-tight ${isPrimary ? 'text-blue-600' : 'text-slate-950'}`}>
      {value} <span className="text-2xl text-slate-700">{label}</span>
    </p>
    <p className={`mt-2 text-sm leading-6 ${isPrimary ? 'text-slate-600' : 'text-slate-500'} font-light`}>
      {description}
    </p>
  </motion.div>
);

export const BuiltFor = () => {
  return (
    <section id="built-for" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs font-medium tracking-tight text-blue-500 mb-4"
        >
          BUILT FOR
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05]"
        >
          A calmer workspace for
          <span className="block">people with busy minds.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto"
        >
          Shiro is designed for anyone who manages a high volume of scattered information
          and needs a reliable way to turn it into faster clarity.
        </motion.p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UseCaseCard 
          title="Founders & Executives"
          description="Synthesize context across every department, recall key meeting moments, and keep top priorities visible without mental fatigue."
          badge="Faster decision velocity"
          icon={Briefcase}
          delay={0.1}
        />
        <UseCaseCard 
          title="Busy Professionals"
          description="Recover follow-ups from scattered messages, summarize documents instantly, and prepare for meetings with all context at hand."
          badge="Zero context switching"
          icon={Zap}
          delay={0.2}
        />
        <UseCaseCard 
          title="Creators & Consultants"
          description="Capture ideas, summarize research, draft replies, prepare outlines, and keep project context organized across every client."
          badge="Ideas turned into output"
          icon={PenTool}
          delay={0.3}
        />
      </div>

      {/* Metrics Strip */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard 
          icon={LayoutGrid}
          value="9+"
          label="signals"
          description="Organized from notes, meetings, messages, and documents."
          delay={0.4}
        />
        <MetricCard 
          icon={Target}
          value="3"
          label="top priorities"
          description="Surfaced before your day starts."
          delay={0.5}
        />
        <MetricCard 
          icon={Bell}
          value="5"
          label="follow-ups"
          description="Recovered from scattered context."
          delay={0.6}
        />
        <MetricCard 
          icon={Sun}
          value="Daily"
          label="brief"
          description="Prepared before your first meeting starts."
          isPrimary={true}
          delay={0.7}
        />
      </div>
    </section>
  );
};
