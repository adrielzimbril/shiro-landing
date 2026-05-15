"use client";

import React from "react";
import { motion } from "motion/react";
import { heroBento } from "@/lib/data";
import { Zap, LayoutGrid, BarChart3, Clock, ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- Header Copy --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-wider text-violet-600 uppercase">
              Unified Intelligence Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-slate-950 font-instrument leading-[0.9] mb-8"
          >
            The new standard for <br />
            <span className="text-violet-600 italic">Customer Support.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            One workspace for all your customer conversations. Shiro brings your email, chat, and social DMs into a unified intelligence layer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-slate-950 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95 group">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/50 backdrop-blur-md border border-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/80 transition-all active:scale-95">
              <Play className="w-4 h-4 fill-slate-950" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* --- Hero Bento Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[240px]">
          
          {/* 1. Intelligence Routing Card (Large) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 lg:row-span-2 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col group"
          >
            <div className="p-8 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                  <Zap className="w-5 h-5 fill-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{heroBento.routing.title}</h3>
                  <p className="text-sm text-slate-500">{heroBento.routing.description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-8 pt-4 relative">
              <div className="absolute inset-x-8 top-4 space-y-4">
                {/* Simulated Interaction */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-100 max-w-sm ml-0 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={heroBento.routing.customer.avatar} className="w-6 h-6 rounded-full object-cover" alt="" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{heroBento.routing.customer.name} • {heroBento.routing.customer.time}</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-snug">{heroBento.routing.customer.message}</p>
                </motion.div>

                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  className="bg-violet-600 rounded-2xl p-4 shadow-lg shadow-violet-200 max-w-sm ml-auto text-white"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img src={heroBento.routing.agent.avatar} className="w-6 h-6 rounded-full border border-violet-400" alt="" />
                    <span className="text-[10px] font-bold text-violet-200 uppercase tracking-wider">{heroBento.routing.agent.name} • {heroBento.routing.agent.status}</span>
                  </div>
                  <p className="text-sm text-white leading-snug">{heroBento.routing.agent.message}</p>
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-32 h-32 text-violet-600 rotate-12" />
              </div>
            </div>
          </motion.div>

          {/* 2. Service Intelligence (Medium Vertical) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 lg:row-span-2 rounded-[2.5rem] bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-8">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white mb-1">{heroBento.analytics.title}</h3>
              <p className="text-sm text-slate-400 leading-snug">{heroBento.analytics.description}</p>
            </div>
            
            <div className="flex-1 mt-auto p-8 pt-0 flex flex-col justify-end">
              <div className="text-5xl font-instrument text-white mb-1">{heroBento.analytics.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-6">{heroBento.analytics.label}</div>
              <div className="h-32 w-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src={heroBento.analytics.image} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </motion.div>

          {/* 3. Contextual Timelines (Medium Horizontal) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 lg:row-span-1 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden flex items-center"
          >
            <div className="p-8 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{heroBento.timelines.title}</h3>
                  <p className="text-sm text-slate-500">{heroBento.timelines.description}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {heroBento.timelines.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-slate-100 text-slate-500 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            <div className="hidden sm:block w-1/3 h-full p-4">
              <div className="w-full h-full rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden relative group">
                <img src={heroBento.timelines.customer.cover} className="w-full h-full object-cover opacity-50" alt="" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <img src={heroBento.timelines.customer.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-xl group-hover:scale-110 transition-transform" alt="" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. Capabilities Preview (Medium Horizontal) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 lg:row-span-1 rounded-[2.5rem] bg-violet-600 border border-violet-500 shadow-xl overflow-hidden group"
          >
            <div className="p-8 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-instrument text-white">Scale your support <br /> without adding headcount.</h3>
              </div>
              <div className="flex items-center gap-2 text-violet-200 text-sm font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
                Explore all capabilities <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
