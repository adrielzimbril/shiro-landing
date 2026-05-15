"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Play, Zap, MessageSquare, ShieldCheck, Sparkles, Layout } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden px-5 pt-20 pb-32 sm:px-8 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/50 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-[#17191f] font-sans border border-[#17191f]/10 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-violet-600 animate-pulse" />
            Join 2,000+ support teams winning with OrbitDesk
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-6xl leading-[1.05] tracking-tight sm:text-8xl lg:text-9xl font-serif text-[#17191f]"
          >
            Unified messaging <br className="hidden sm:block" />
            <span className="italic text-violet-600">for calm support</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-[#17191f]/60 font-sans sm:text-xl"
          >
            Bring email, live chat, and social DMs into one workspace. Give your team 
            the context they need to respond beautifully, every time.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a 
              href="#" 
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#17191f] px-8 py-5 text-base font-semibold text-white shadow-2xl shadow-black/20 sm:w-auto font-sans hover:bg-violet-600 transition-all active:scale-95 group"
            >
              Start free trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#" 
              className="inline-flex w-full items-center justify-center rounded-2xl border border-[#17191f]/10 bg-white px-8 py-5 text-base font-semibold text-[#17191f] sm:w-auto font-sans hover:bg-[#f3f3f0] transition-all active:scale-95 flex items-center gap-2"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch product tour
            </a>
          </motion.div>
        </div>

        {/* Hero Bento Grid */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Unified Inbox */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.02),0_24px_48px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#17191f] font-sans">Unified Inbox</h3>
            </div>
            <p className="text-base leading-relaxed text-[#17191f]/60 font-sans">
              Connect every channel. Respond to emails, WhatsApp, and Instagram in a single, calm thread.
            </p>
            <div className="mt-8 relative h-64 overflow-hidden rounded-2xl bg-slate-50 border border-black/5">
               <img 
                src="/unified-inbox.png" 
                alt="Unified Inbox UI"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </motion.article>

          {/* Card 2: Collaboration */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.02),0_24px_48px_rgba(0,0,0,0.04)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Layout className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#17191f] font-sans">Contextual Triage</h3>
            </div>
            <p className="text-base leading-relaxed text-[#17191f]/60 font-sans">
              Instantly see a customer's full history across every platform before you even start typing.
            </p>
            <div className="mt-8 relative h-64 overflow-hidden rounded-2xl bg-slate-50 border border-black/5">
               <img 
                src="/collaboration.png" 
                alt="Collaboration UI"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </motion.article>

          {/* Card 3: Insights */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_2px_4px_rgba(0,0,0,0.02),0_24px_48px_rgba(0,0,0,0.04)] md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#17191f] font-sans">AI-Driven Insights</h3>
            </div>
            <p className="text-base leading-relaxed text-[#17191f]/60 font-sans">
              Automatically tag conversations by sentiment and get AI-suggested replies to close tickets faster.
            </p>
            <div className="mt-8 relative h-64 overflow-hidden rounded-2xl bg-slate-50 border border-black/5">
               <img 
                src="/insights.png" 
                alt="AI Insights Dashboard"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

