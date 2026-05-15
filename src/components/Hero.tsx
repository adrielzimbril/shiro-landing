"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Zap, Clock, Users, BarChart3, MessageSquare, ShieldCheck } from "lucide-react";
import { PixelGrid } from "./background/PixelGrid";
import { LightRays } from "./background/LightRays";

export const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#fafafa] px-5 pt-20 pb-32 sm:px-8 lg:px-10"
    >
      {/* WebGL Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <PixelGrid />
      </div>
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>

      {/* Background Gradient */}
      <div 
        className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full max-w-7xl opacity-50 pointer-events-none"
        style={{
          background: "radial-gradient(50% 50% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 100%)"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full bg-violet-600/10 px-3 py-1 text-xs font-semibold text-violet-600 font-sans border border-violet-600/20"
          >
            Support teams without the tab chaos
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl font-serif text-[#17191f]"
          >
            Customer conversations unified across every inbox
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#17191f]/60 font-sans sm:text-xl"
          >
            Move every customer message into one workspace and give your team 
            the context to respond beautifully.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a 
              href="#" 
              className="inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 sm:w-auto font-sans hover:bg-violet-700 transition-all active:scale-95 group"
            >
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="inline-flex w-full items-center justify-center rounded-xl border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-[#17191f] sm:w-auto font-sans hover:bg-violet-50 hover:border-violet-200 transition-all active:scale-95 flex items-center gap-2"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch demo
            </a>
          </motion.div>
        </div>

        {/* Hero Bento Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#17191f] font-sans">Automated Triage</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#17191f]/50 font-sans">
              Route messages to the right people automatically based on sentiment, 
              intent, or customer history.
            </p>
            <div className="mt-8 relative h-48 overflow-hidden rounded-2xl bg-slate-50">
               <img 
                src="https://images.unsplash.com/photo-1556157382-97dee2dcb96a?auto=format&fit=crop&q=80&w=800" 
                alt="Automated Triage UI"
                className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </motion.article>

          {/* Card 2 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#17191f] font-sans">Real-time Context</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#17191f]/50 font-sans">
              Instantly see the full history of a customer across every channel 
              before you even start typing.
            </p>
            <div className="mt-8 relative h-48 overflow-hidden rounded-2xl bg-slate-50">
               <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Real-time Context UI"
                className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </motion.article>

          {/* Card 3 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.05)] sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#17191f] font-sans">Team Collaboration</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#17191f]/50 font-sans">
              Collaborate on drafts, assign owners, and leave internal notes 
              without ever leaving the thread.
            </p>
            <div className="mt-8 relative h-48 overflow-hidden rounded-2xl bg-slate-50">
               <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                alt="Collaboration UI"
                className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

