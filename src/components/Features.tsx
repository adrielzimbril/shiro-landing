"use client";

import React from "react";
import { motion } from "motion/react";
import { capabilities } from "@/lib/data";
import { Zap, LayoutGrid, Bell, BarChart3, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

const icons = {
  Zap: Zap,
  LayoutGrid: LayoutGrid,
  Bell: Bell,
  BarChart3: BarChart3,
};

export const Features = () => {
  return (
    <section id="capabilities" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-8"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Core Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-instrument text-slate-950 mb-8 leading-tight"
          >
            Capabilities designed for <br />
            <span className="italic text-violet-600">hyper-growth speed.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We built Shiro to be the interface your support team actually enjoys using. Fast, intuitive, and packed with intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = icons[cap.icon as keyof typeof icons];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-200/50 hover:-translate-y-2 transition-all duration-700 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 ${cap.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-4 transition-colors">{cap.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed mb-10 flex-1">
                  {cap.description}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-violet-500 transition-colors">Core Module</span>
                   <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-violet-50 group-hover:border-violet-100 transition-all">
                     <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-violet-600" />
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Interactive Bento Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[4rem] bg-slate-50 border border-slate-100 p-10 md:p-16 overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-md">
               <h3 className="text-4xl md:text-5xl font-instrument text-slate-950 mb-8 leading-[1.1]">
                 Custom workflows that <br /> <span className="text-violet-600 italic">match your DNA.</span>
               </h3>
               <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                 No two support teams are the same. Shiro lets you build visual logic for how tickets should move, who gets notified, and when to escalate.
               </p>
               <button className="bg-slate-950 text-white px-8 py-4 rounded-full text-sm font-bold active:scale-95 transition-transform shadow-xl shadow-slate-300 hover:bg-violet-700 hover:shadow-violet-200">
                 Build Your First Flow
               </button>
            </div>
            
            {/* Visual Abstract - Dashboard Mockup */}
            <div className="absolute right-[-5%] bottom-[-5%] w-[60%] h-[80%] hidden md:block">
               <div className="h-full w-full rounded-[3rem] bg-white border border-slate-200 shadow-2xl p-10 space-y-8 translate-y-16 rotate-6 group-hover:translate-y-8 group-hover:rotate-2 transition-all duration-1000">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-40 bg-slate-100 rounded-full" />
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-16 w-full bg-violet-50 rounded-2xl border border-violet-100 flex items-center px-6">
                      <div className="w-10 h-10 rounded-full bg-violet-200/50 mr-4" />
                      <div className="h-2.5 w-32 bg-violet-200 rounded-full" />
                    </div>
                    <div className="h-16 w-full bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-6">
                      <div className="w-10 h-10 rounded-full bg-slate-200/50 mr-4" />
                      <div className="h-2.5 w-48 bg-slate-200 rounded-full" />
                    </div>
                    <div className="h-16 w-full bg-slate-50 rounded-2xl border border-slate-100 flex items-center px-6 opacity-50">
                      <div className="w-10 h-10 rounded-full bg-slate-200/50 mr-4" />
                      <div className="h-2.5 w-24 bg-slate-200 rounded-full" />
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 rounded-[4rem] bg-violet-600 p-10 md:p-16 text-white flex flex-col justify-between overflow-hidden relative"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:scale-110 transition-transform duration-1000">
               <Cpu className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
               <h3 className="text-4xl md:text-5xl font-instrument mb-8 leading-tight">
                 Built for speed. <br /> <span className="text-violet-200 italic">Keyboard first.</span>
               </h3>
               <p className="text-violet-100 text-lg opacity-90 leading-relaxed max-w-sm">
                 Every action is a shortcut away. Browse, reply, and resolve without your hand ever leaving the keyboard.
               </p>
            </div>
            
            <div className="relative z-10 mt-16 flex flex-wrap gap-3">
               {['⌘', 'K', 'Shift', 'A'].map(key => (
                 <div key={key} className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-bold text-xl shadow-lg">{key}</div>
               ))}
               <div className="flex-1 min-w-[140px] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center px-6 text-xs font-bold tracking-[0.2em] uppercase">Quick Command Bar</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
