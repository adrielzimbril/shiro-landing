"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Database, Settings2, RotateCcw, Lock, CheckCircle2, Clock } from "lucide-react";

const TrustCard = ({ title, description, icon: Icon, isPrimary = false, delay }: {
  title: string;
  description: string;
  icon: any;
  isPrimary?: boolean;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative overflow-hidden ${isPrimary ? 'bg-gradient-to-b from-blue-50 to-white border-blue-100 shadow-[0_16px_38px_-26px_rgba(59,130,246,0.28),inset_0_1px_0_white]' : 'bg-white/78 border-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]'} border rounded-[2rem] p-6`}
  >
    <div className={`${isPrimary ? 'bg-white' : 'bg-blue-50'} w-11 h-11 rounded-2xl border ${isPrimary ? 'border-white' : 'border-blue-100'} flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]`}>
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <h3 className="text-lg font-normal tracking-tight text-slate-950">
      {title}
    </h3>
    <p className={`mt-3 text-sm leading-6 ${isPrimary ? 'text-slate-600' : 'text-slate-500'} font-light`}>
      {description}
    </p>
  </motion.div>
);

export const Privacy = () => {
  return (
    <section id="privacy" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs font-medium tracking-tight text-blue-500 mb-4"
        >
          PRIVACY & CONTROL
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05]"
        >
          Your assistant should
          <span className="block">know your context.</span>
          <span className="block">Not own it.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto"
        >
          Shiro helps you remember, summarize, and act without turning your workspace into a black box.
          You stay in control of what is saved, used, and carried forward.
        </motion.p>
      </div>

      {/* Main Workspace Panel */}
      <div className="relative overflow-hidden rounded-[2.75rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)]">
        {/* Soft background glows */}
        <div className="absolute top-[-35%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-blue-200/35 blur-[6rem] pointer-events-none"></div>
        <div className="absolute bottom-[-40%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-sky-200/24 blur-[6rem] pointer-events-none"></div>
        
        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.16] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)', backgroundSize: '2rem 2rem' }}></div>

        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">
          {/* Left Trust Copy */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs text-blue-600 font-light w-fit mb-7 shadow-[inset_0_1px_0_white]">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              Private workspace memory
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-[3.25rem] font-normal tracking-tight text-slate-950 leading-[1.08] max-w-2xl">
              Memory should feel
              <span className="block">useful, not mysterious.</span>
            </h3>
            <p className="mt-6 text-base leading-8 text-slate-600 font-light max-w-xl">
              Shiro keeps context helpful by making memory visible, reviewable, and adjustable.
              Save what matters, keep temporary context temporary, and reset outdated information anytime.
            </p>

            {/* Trust Pills */}
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { icon: Database, label: "Controlled memory" },
                { icon: Settings2, label: "Clear boundaries" },
                { icon: RotateCcw, label: "Reset anytime" }
              ].map((pill, i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">
                  <pill.icon className="w-4 h-4 text-blue-500" />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Privacy Visual */}
          <div className="relative">
            <div className="relative isolate overflow-hidden rounded-[2.35rem] bg-gradient-to-b from-white to-slate-50 border border-slate-200/80 p-5 md:p-6 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.42),inset_0_1px_0_white]">
              {/* Inner Light Glow */}
              <div className="absolute top-[-35%] right-[-20%] z-0 w-[22rem] h-[22rem] rounded-full bg-blue-200/45 blur-[4.5rem] pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Browser Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 tracking-tight uppercase">Privacy Center</span>
                </div>

                {/* Privacy Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-400 font-light mb-1">Workspace memory</p>
                    <h3 className="text-2xl font-normal tracking-tight text-slate-950">You control what Shiro remembers.</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
                    <Lock className="w-6 h-6 text-blue-500" />
                  </div>
                </div>

                {/* Controls List */}
                <div className="grid gap-3">
                  {/* Control 01 */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-normal text-slate-900">Project preferences</p>
                          <p className="text-xs text-slate-400 font-light">Saved for future briefs</p>
                        </div>
                      </div>
                      <div className="relative inline-flex h-6 w-10 items-center rounded-full bg-blue-500">
                        <span className="inline-block h-4 w-4 translate-x-5 rounded-full bg-white"></span>
                      </div>
                    </div>
                  </div>

                  {/* Control 02 */}
                  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-normal text-slate-900">Temporary meeting context</p>
                          <p className="text-xs text-slate-400 font-light">Expires after briefing</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">temporary</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-4 rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-normal text-slate-900">Review memory anytime</p>
                    <p className="text-[10px] text-slate-400 font-light">Edit or reset context.</p>
                  </div>
                  <button className="px-3 py-1.5 text-[11px] text-blue-600 bg-blue-50 border border-blue-100 rounded-full">Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 pt-4 md:pt-2">
          <TrustCard 
            title="Controlled memory"
            description="Decide what Shiro should remember and what should stay temporary."
            icon={Database}
            delay={0.1}
          />
          <TrustCard 
            title="Private workspace"
            description="Notes, summaries, and priorities stay organized around your context."
            icon={ShieldCheck}
            delay={0.2}
          />
          <TrustCard 
            title="Clear boundaries"
            description="Shiro works only from the information you provide and tools you connect."
            icon={Settings2}
            delay={0.3}
          />
          <TrustCard 
            title="Reset anytime"
            description="Remove outdated context when projects or priorities change."
            icon={RotateCcw}
            isPrimary={true}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
