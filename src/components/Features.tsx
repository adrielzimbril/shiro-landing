"use client";

import React from "react";
import { motion } from "motion/react";
import { capabilities } from "@/lib/data";
import { Zap, LayoutGrid, Bell, BarChart3, ArrowUpRight } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-instrument text-slate-950 mb-6"
          >
            Capabilities designed for <br />
            <span className="italic">human speed.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            We built Shiro to be the interface your support team actually enjoys using. Fast, intuitive, and packed with intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = icons[cap.icon as keyof typeof icons];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${cap.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4 group-hover:text-violet-600 transition-colors">{cap.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {cap.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Detail</span>
                   <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-violet-600 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Interactive Bento Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[3rem] bg-slate-50 border border-slate-100 p-8 md:p-12 overflow-hidden relative group"
          >
            <div className="relative z-10 max-w-sm">
               <h3 className="text-3xl font-instrument text-slate-950 mb-6">
                 Custom workflows that <br /> <span className="text-violet-600 italic">match your team.</span>
               </h3>
               <p className="text-slate-500 mb-8">
                 No two support teams are the same. Shiro lets you build visual logic for how tickets should move, who gets notified, and when to escalate.
               </p>
               <button className="bg-slate-950 text-white px-6 py-3 rounded-full text-sm font-bold active:scale-95 transition-transform shadow-lg shadow-slate-300">
                 Build Your First Flow
               </button>
            </div>
            {/* Visual Abstract */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 p-8 hidden md:block">
               <div className="h-full w-full rounded-2xl bg-white border border-slate-100 shadow-2xl p-6 space-y-4 translate-y-12 rotate-3 group-hover:translate-y-8 group-hover:rotate-0 transition-all duration-700">
                  <div className="h-4 w-32 bg-slate-100 rounded-full" />
                  <div className="h-12 w-full bg-violet-50 rounded-xl border border-violet-100" />
                  <div className="h-px w-full bg-slate-100" />
                  <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100" />
                  <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100" />
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 rounded-[3rem] bg-violet-600 p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20">
               <Zap className="w-40 h-40" />
            </div>
            <div className="relative z-10">
               <h3 className="text-3xl font-instrument mb-6">
                 Built for speed. <br /> <span className="text-violet-200">Keyboard first.</span>
               </h3>
               <p className="text-violet-100 opacity-80 leading-relaxed">
                 Every action is a shortcut away. Browse, reply, and resolve without your hand ever leaving the keyboard.
               </p>
            </div>
            <div className="mt-12 flex gap-2">
               {['⌘', 'K'].map(key => (
                 <div key={key} className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center font-bold">{key}</div>
               ))}
               <div className="flex-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center px-4 text-xs font-bold tracking-widest uppercase">Quick Actions</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
