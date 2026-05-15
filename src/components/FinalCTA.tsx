"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sun, 
  CheckCircle, 
  ShieldCheck, 
  Database, 
  RefreshCcw 
} from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="max-w-7xl mx-auto px-6 pt-14 pb-32">
      {/* Transition Copy */}
      <div className="relative text-center max-w-3xl mx-auto mb-16">
        <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/0 via-blue-100/20 to-transparent blur-2xl pointer-events-none" />
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative font-mono text-[10px] md:text-xs font-semibold tracking-wider text-blue-600 mb-4 uppercase"
        >
          Final Step
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative text-3xl md:text-5xl font-normal tracking-tight text-slate-950 leading-[1.1]"
        >
          Less organizing. <br />
          <span className="text-slate-400">More moving forward.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mt-6 text-sm md:text-base leading-7 text-slate-500 font-light"
        >
          Once your context is captured, SHIRO helps turn it into a calmer tomorrow.
        </motion.p>
      </div>

      {/* Blue CTA Shell */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative isolate overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white border border-blue-400/30 shadow-[0_40px_90px_-30px_rgba(37,99,235,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]"
      >
        {/* Background Textures */}
        <div className="absolute inset-0 z-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        {/* Dynamic Glows */}
        <div className="absolute top-[-20%] left-[-10%] z-0 w-[40rem] h-[40rem] rounded-full bg-white/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-10%] z-0 w-[35rem] h-[35rem] rounded-full bg-indigo-900/30 blur-[100px] pointer-events-none" />

        {/* Floating Bubble: Top Left */}
        <motion.div 
          animate={{ 
            y: [0, -12, 0],
            rotate: [-5, -3, -5]
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden lg:block absolute left-12 top-16 z-20"
        >
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-white px-5 py-4 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4),inset_0_1px_0_white] min-w-[220px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Sun className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-slate-900 font-semibold">Daily brief ready</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">3 priorities surfaced</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Bubble: Bottom Right */}
        <motion.div 
          animate={{ 
            y: [0, 12, 0],
            rotate: [5, 3, 5]
          }}
          transition={{ 
            duration: 6.25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden lg:block absolute right-12 bottom-16 z-20"
        >
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-white px-5 py-4 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4),inset_0_1px_0_white] min-w-[220px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-slate-900 font-semibold">Follow-ups handled</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Work feels lighter</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Content */}
        <div className="relative z-10 px-6 py-24 md:px-12 md:py-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-2 mb-10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <span className="font-mono text-[10px] font-medium tracking-wider text-blue-50 uppercase">
              Ready when your day gets messy
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-normal tracking-tight text-white leading-[1.05] max-w-4xl mx-auto mb-8"
          >
            Start tomorrow with <br className="hidden md:block" />
            <span className="text-blue-100">less scattered context.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base md:text-xl leading-relaxed text-blue-50/80 font-light max-w-2xl mx-auto mb-12"
          >
            Capture what happens, keep your priorities visible, and let SHIRO turn messy information into trusted actions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-white text-blue-600 text-base font-semibold shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3),inset_0_1px_0_white] hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 group">
              Try SHIRO Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#workflow" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 bg-white/10 text-white text-base font-medium border border-white/20 backdrop-blur-md hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              See Workflow
            </a>
          </motion.div>

          {/* Trust Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-100/70 font-light"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              Private by design
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-2">
              <Database className="w-4 h-4 text-white" />
              Controlled memory
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4 text-white" />
              Reset anytime
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
