"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, PlayCircle, ShieldCheck, Smartphone, Zap, Bell, FileText, Calendar, MessageSquare, Lock, Mic, CheckSquare } from "lucide-react";

const FloatingBubble = ({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20, y: 10, scale: 0.95 }}
    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      opacity: { duration: 0.7, delay },
      x: { duration: 0.7, delay },
      scale: { duration: 0.7, delay },
      y: {
        duration: 4.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay + 0.5
      }
    }}
    className={`absolute rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white] min-w-[12rem] z-20 ${className}`}
  >
    {children}
  </motion.div>
);

const HeroCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white] ${className}`}
  >
    {children}
  </motion.div>
);

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-20 overflow-visible">
      <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
        
        {/* Hero Copy */}
        <div className="text-center lg:text-left relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/75 border border-white px-3.5 py-2 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.3),inset_0_1px_0_white] mb-8"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-b from-blue-50 to-white border border-blue-100 shadow-[inset_0_1px_0_white] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            </span>
            <span className="font-mono text-xs font-medium tracking-[-0.04em] text-slate-500">
              PREMIUM PERSONAL AI
            </span>
          </motion.div>

          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-light tracking-[-0.075em] leading-[0.92] text-slate-950">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block"
            >
              Think clearer.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block mt-2"
            >
              Stay organized.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex mt-4 rounded-[1.35rem] bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 px-4 md:px-5 pb-2.5 pt-1.5 text-white font-normal shadow-[0_18px_38px_-20px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.38)]"
            >
              Move faster.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-base md:text-lg leading-8 text-slate-600 font-light max-w-2xl mx-auto lg:mx-0"
          >
            SHIRO is your personal AI assistant for capturing thoughts,
            summarizing notes, managing priorities, and turning scattered
            information into calm, useful action.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3"
          >
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white text-sm font-normal shadow-[0_10px_24px_rgba(59,130,246,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)] transition-all duration-300">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#workflow" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 text-sm font-normal shadow-[0_4px_12px_rgba(15,23,42,0.05),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">
              <PlayCircle className="w-4 h-4 text-blue-500" />
              See How It Works
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 font-light"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              Private by design
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="inline-flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-blue-500" />
              Works across all devices
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="inline-flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-blue-500" />
              Built for busy minds
            </span>
          </motion.div>
        </div>

        {/* Hero Product Mockup */}
        <div className="relative lg:pl-4">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-white/20 to-sky-200/30 blur-3xl"></div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-[2rem] bg-[#f8fafc] border border-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35),inset_0_2px_0_rgba(255,255,255,1)] p-4 sm:p-5"
          >
            {/* Floating Bubbles */}
            <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">
              <FloatingBubble className="-right-7 top-10" delay={0.3}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Follow-up found</p>
                    <p className="text-[10px] text-slate-400 font-light">Client reply due today</p>
                  </div>
                </div>
              </FloatingBubble>

              <FloatingBubble className="-right-10 top-[35%]" delay={0.6}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Summary ready</p>
                    <p className="text-[10px] text-slate-400 font-light">18 pages into 9 bullets</p>
                  </div>
                </div>
              </FloatingBubble>

              <FloatingBubble className="-right-5 bottom-[26%]" delay={0.9}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Focus block saved</p>
                    <p className="text-[10px] text-slate-400 font-light">10:30–12:00 protected</p>
                  </div>
                </div>
              </FloatingBubble>

              <FloatingBubble className="left-8 -bottom-6" delay={1.2}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Reply drafted</p>
                    <p className="text-[10px] text-slate-400 font-light">Ready for review</p>
                  </div>
                </div>
              </FloatingBubble>
            </div>

            <div className="rounded-[1.5rem] bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-[inset_0_1px_0_white] overflow-hidden">
              {/* Mockup Top Bar */}
              <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
                </div>
                <div className="font-mono text-[10px] text-slate-400 tracking-[-0.05em]">
                  DAILY BRIEF
                </div>
              </div>

              {/* Mockup Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[10px] text-slate-400 font-light mb-1">Today</p>
                    <h2 className="text-2xl font-normal tracking-tight text-slate-900 leading-tight">
                      Your priorities are ready.
                    </h2>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-[inset_0_1px_0_white]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>

                <div className="grid gap-3">
                  <HeroCard delay={1.4}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Mic className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs font-normal text-slate-800">Captured idea</p>
                        <p className="text-[10px] leading-4 text-slate-500 mt-1 font-light">
                          “Package last week’s customer calls into a launch positioning memo.”
                        </p>
                      </div>
                    </div>
                  </HeroCard>

                  <HeroCard delay={1.6}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <CheckSquare className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-normal text-slate-800">Next actions</p>
                          <span className="text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">
                            4 found
                          </span>
                        </div>
                        <div className="mt-2.5 space-y-2">
                          <div className="flex items-center gap-2 text-[10px] text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                            Send founder update by 4 PM
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                            Prepare strategy notes
                          </div>
                        </div>
                      </div>
                    </div>
                  </HeroCard>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-slate-200 text-slate-900 border border-blue-100 p-4 shadow-[0_12px_28px_-16px_rgba(59,130,246,0.24),inset_0_1px_0_white]"
                    >
                      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-300/30 blur-2xl pointer-events-none"></div>
                      <div className="relative flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"></span>
                            <p className="text-[10px] text-slate-500 font-light">Focus window</p>
                          </div>
                          <p className="mt-2 text-xl font-light tracking-tight text-slate-950">10:30–12:00</p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-white/80 border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">
                          <Lock className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>
                      <div className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/70 border border-white px-2.5 py-1 text-[9px] text-slate-500 shadow-[inset_0_1px_0_white]">
                        <ShieldCheck className="w-3 h-3 text-blue-500" />
                        Protected for deep work
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 text-white border border-blue-700 p-4 shadow-[0_10px_24px_-14px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.30)]"
                    >
                      <p className="text-[10px] text-blue-100 font-light">Suggested reply</p>
                      <p className="mt-1 text-xs leading-5 font-light">Drafted from context, ready to edit.</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
