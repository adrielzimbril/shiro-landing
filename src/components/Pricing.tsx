"use client";
import React, { useState } from 'react';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 12 : 15,
      desc: "For individuals who want to eliminate daily friction and find clarity.",
      features: [
        "Personal daily brief",
        "Quick capture voice & text",
        "Basic task recovery",
        "Private memory controls"
      ],
      icon: "solar:check-circle-linear",
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: isYearly ? 45 : 65,
      desc: "For deep work practitioners who need proactive focus assistance.",
      features: [
        "Everything in Starter",
        "Smart daily scheduling",
        "Proactive focus modes",
        "Cognitive load balancing",
        "Extended private memory"
      ],
      icon: "solar:stars-linear",
      featured: true,
      cta: "Start Free Trial"
    },
    {
      name: "Team",
      price: isYearly ? 199 : 249,
      desc: "For high-performance teams that execute with unified context.",
      features: [
        "Everything in Pro",
        "Shared team memory",
        "Team velocity briefs",
        "Admin accountability tools",
        "Priority dedicated support"
      ],
      icon: "solar:buildings-2-linear",
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1 mb-6 shadow-[inset_0_1px_0_white]">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-tight text-violet-500 uppercase">
            PRICING
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-[-0.04em] text-slate-950 leading-[0.95] max-w-5xl mx-auto">
          Start free. Upgrade
          <span className="block text-slate-400">when you’re ready.</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl leading-8 text-slate-500 font-light max-w-3xl mx-auto">
          Every plan gives you a calmer, more organized day. The more context Shiro
          captures, the more powerful your daily brief becomes.
        </p>
      </div>

      {/* Toggle */}
      <div className="mb-16 flex justify-center">
        <div className="p-1.5 bg-slate-100 rounded-2xl flex items-center gap-1 border border-slate-200/50 shadow-inner">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              !isYearly ? "bg-white text-slate-950 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
              isYearly ? "bg-white text-slate-950 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Yearly
            <span className="text-[10px] bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`relative rounded-[3rem] p-px transition-all duration-500 hover:-translate-y-2 ${
              plan.featured 
                ? "bg-gradient-to-b from-violet-400 to-violet-600 shadow-[0_40px_80px_-20px_rgba(139,92,246,0.3)]" 
                : "bg-white/40 backdrop-blur-xl border border-white shadow-[0_20px_40px_-20px_rgba(15,23,42,0.1)]"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg border border-violet-500 z-10 uppercase tracking-widest">
                Recommended
              </div>
            )}
            
            <div className={`h-full rounded-[2.95rem] p-10 flex flex-col ${
              plan.featured ? "bg-white" : "bg-transparent"
            }`}>
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.featured ? "bg-violet-50 border border-violet-100" : "bg-white border border-slate-100 shadow-sm"
                }`}>
                  <iconify-icon icon={plan.icon} className={`text-2xl ${plan.featured ? "text-violet-500" : "text-slate-400"}`} />
                </div>
                <h3 className="text-xl font-medium text-slate-950 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-normal tracking-tight text-slate-950">${plan.price}</span>
                  <span className="text-slate-500 text-sm">/mo</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500 font-light">
                  {plan.desc}
                </p>
              </div>

              <div className="h-px w-full bg-slate-100/50 mb-8" />

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                    <iconify-icon icon="solar:check-circle-bold" className="text-violet-500 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl text-sm font-medium transition-all ${
                plan.featured 
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-500 hover:shadow-violet-300" 
                  : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200"
              }`}>
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
