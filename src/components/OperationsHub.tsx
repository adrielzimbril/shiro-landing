"use client";

import React from "react";
import { motion } from "motion/react";
import { stats, channels } from "@/lib/data";
import { BarChart3, TrendingUp, TrendingDown, Layers } from "lucide-react";

export const OperationsHub = () => {
  return (
    <section id="intelligence" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Stats and Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-violet-600 font-bold text-xs uppercase tracking-widest mb-4"
            >
              Operations Hub
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-instrument text-slate-950 mb-8"
            >
              Intelligence that <br />
              <span className="italic">drives growth.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed mb-12"
            >
              Stop guessing. Shiro provides a unified view of your entire support operation, revealing the bottlenecks and opportunities that others miss.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm"
                >
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-tighter mb-2">{stat.label}</div>
                  <div className="text-3xl font-instrument text-slate-950 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> {stat.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Data Simulation */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-[3.5rem] bg-slate-950 p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                 <Layers className="w-64 h-64 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-white uppercase tracking-widest text-xs">Live Channel Performance</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                    Live Data
                  </div>
                </div>

                <div className="space-y-6">
                  {channels.map((channel, idx) => (
                    <motion.div
                      key={channel.name}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.2 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between group-hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${channel.type === 'success' ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]'}`} />
                        <span className="font-bold text-white tracking-tight">{channel.name}</span>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="text-right">
                           <div className="text-lg font-instrument text-white">{channel.count}</div>
                           <div className="text-[10px] font-bold text-slate-500 uppercase">Requests</div>
                         </div>
                         <div className={`flex items-center gap-1 font-bold text-xs ${channel.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                           {channel.type === 'success' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                           {channel.trend}
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                   <p className="text-slate-500 text-sm italic">
                     "The reporting in Shiro is miles ahead of anything else we tested."
                   </p>
                   <button className="text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                     View All Metrics <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-violet-600 transition-colors">→</div>
                   </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
