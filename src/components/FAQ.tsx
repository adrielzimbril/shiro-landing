"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  MessageCircle, 
  Mic, 
  Smartphone, 
  Sun, 
  ShieldCheck, 
  UserCheck, 
  Plus, 
  FileText, 
  RefreshCcw,
  ArrowRight
} from "lucide-react";

const faqData = [
  {
    id: "01",
    question: "How is SHIRO different from a regular chatbot?",
    answer: "A regular chatbot waits for prompts. SHIRO works more like a personal operating layer: it captures context, summarizes what matters, surfaces priorities, finds follow-ups, and helps you start from organized action instead of a blank chat box.",
    icon: MessageCircle
  },
  {
    id: "02",
    question: "What can I capture with SHIRO?",
    answer: "You can capture voice notes, rough ideas, links, documents, meeting fragments, messages, reminders, and follow-ups. The goal is to collect useful context without interrupting your flow.",
    icon: Mic
  },
  {
    id: "03",
    question: "Does SHIRO work across desktop and mobile?",
    answer: "Yes. SHIRO is designed around capturing from wherever you are: quick notes on mobile, deeper review on desktop, and a consistent daily brief that keeps priorities connected.",
    icon: Smartphone
  },
  {
    id: "04",
    question: "What happens in the daily brief?",
    answer: "The daily brief gives you a clear starting point: top priorities, upcoming meetings, unresolved follow-ups, useful summaries, reminders, and suggested next actions. It helps you begin the day with direction.",
    icon: Sun
  },
  {
    id: "05",
    question: "Can I delete or reset memory?",
    answer: "Yes. Memory should be reviewable, editable, and removable. As your projects, priorities, or preferences change, you can clean up outdated context and keep SHIRO aligned with how you work now.",
    icon: ShieldCheck
  },
  {
    id: "06",
    question: "Who is SHIRO best for?",
    answer: "SHIRO is best for founders, executives, creators, consultants, and busy professionals who manage lots of information and need faster clarity without constantly reorganizing manually.",
    icon: UserCheck
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Support Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative lg:sticky lg:top-24 rounded-[2.5rem] bg-slate-950 p-8 md:p-10 text-white overflow-hidden shadow-[0_40px_80px_-30px_rgba(15,23,42,0.5)]"
        >
          {/* Background Patterns */}
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-mono font-medium tracking-wider text-blue-100 uppercase">Support Center</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-[1.1] mb-6">
              Got questions? <br />
              <span className="text-slate-400">We&apos;ve got answers.</span>
            </h2>

            <p className="text-slate-400 font-light leading-7 mb-10 max-w-sm">
              Everything you need to know about SHIRO and how it helps you master your focus.
            </p>

            <div className="space-y-4 mb-10">
              <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-300" strokeWidth={1.5} />
                  <span className="text-sm text-white font-normal">Summaries & Priorities</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-3">
                  <RefreshCcw className="w-5 h-5 text-blue-300" strokeWidth={1.5} />
                  <span className="text-sm text-white font-normal">Reset memory anytime</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-white text-slate-950 text-sm font-medium border border-white shadow-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 group">
                Try SHIRO Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white/10 text-white text-sm font-medium border border-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.details
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[2rem] bg-white/70 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.3),inset_0_1px_0_white] overflow-hidden open:bg-white/95 transition-all duration-500 backdrop-blur-sm"
            >
              <summary className="cursor-pointer list-none px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-5 outline-none">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] group-open:bg-blue-600 group-open:border-blue-700 transition-colors duration-300">
                    <faq.icon className="w-6 h-6 text-blue-600 group-open:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-medium tracking-tight text-slate-950">
                    {faq.question}
                  </h3>
                </div>
                <div className="w-10 h-10 shrink-0 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shadow-sm group-open:rotate-45 transition-transform duration-500">
                  <Plus className="w-5 h-5 text-slate-500" strokeWidth={1.5} />
                </div>
              </summary>
              <div className="px-6 md:px-8 pb-8 md:pl-[6.5rem]">
                <p className="text-sm md:text-base leading-relaxed text-slate-600 font-light">
                  {faq.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};
