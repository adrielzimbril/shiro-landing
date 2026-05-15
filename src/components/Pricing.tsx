"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Sparkles, Building2, ArrowRight } from "lucide-react";

const PricingCard = ({ 
  tier, 
  price, 
  priceYearly, 
  description, 
  features, 
  isRecommended = false, 
  icon: Icon,
  isYearly,
  delay 
}: {
  tier: string;
  price: number;
  priceYearly: number;
  description: string;
  features: string[];
  isRecommended?: boolean;
  icon: any;
  isYearly: boolean;
  delay: number;
}) => {
  const [displayPrice, setDisplayPrice] = useState(isYearly ? priceYearly : price);

  useEffect(() => {
    const target = isYearly ? priceYearly : price;
    let start = displayPrice;
    if (start === target) return;

    const duration = 300;
    const distance = Math.abs(target - start);
    const stepTime = Math.max(10, Math.floor(duration / distance));
    
    const timer = setInterval(() => {
      if (start < target) {
        start += 1;
      } else {
        start -= 1;
      }
      setDisplayPrice(start);
      if (start === target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isYearly, price, priceYearly]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative w-full lg:w-1/3 rounded-[2rem] p-8 h-full flex flex-col transition-all duration-500 ${
        isRecommended 
        ? 'bg-gradient-to-b from-blue-50/50 to-[#f8fafc] border border-white shadow-[0_15px_35px_-10px_rgba(59,130,246,0.15),inset_0_2px_0_rgba(255,255,255,1)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.2),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1' 
        : 'bg-[#f8fafc] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_0_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-b from-blue-400 to-blue-500 text-white text-[0.65rem] font-medium rounded-full shadow-[0_2px_6px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] border border-blue-600 tracking-wide z-10">
          Recommended
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className={`text-xs font-medium uppercase tracking-widest mb-4 ${isRecommended ? 'text-blue-500' : 'text-slate-400'}`}>
            {tier}
          </h3>
          <div className="flex items-baseline text-slate-800">
            <span className="text-4xl font-normal tracking-tight">$</span>
            <span className="text-5xl font-normal tracking-tight">{displayPrice}</span>
            <span className="text-xs font-light text-slate-400 ml-1">/mo</span>
          </div>
          <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">
            {description}
          </p>
        </div>
        <div className={`w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center border ${
          isRecommended 
          ? 'bg-gradient-to-b from-white to-blue-50 shadow-[0_6px_16px_rgba(59,130,246,0.12),inset_0_1px_0_white] text-blue-500 border-blue-100'
          : 'bg-gradient-to-b from-white to-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.08),inset_0_1px_0_white] text-slate-400 border-slate-200'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

      {/* Features */}
      <ul className="flex flex-col gap-y-3 flex-grow mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-xs font-light text-slate-600">
            <CheckCircle2 className={`w-4 h-4 ${isRecommended ? 'text-blue-500' : 'text-blue-400'}`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`w-full py-3 rounded-xl font-normal text-xs transition-all ${
        isRecommended
        ? 'bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white shadow-[0_4px_10px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-blue-400 hover:to-blue-500 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]'
        : 'bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]'
      }`}>
        {isRecommended ? 'Start Free Trial' : 'Get Started'}
      </button>
    </motion.div>
  );
};

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-14">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs font-medium tracking-tight text-blue-500 mb-4"
        >
          PRICING
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto"
        >
          Choose the plan
          <span className="block">that fits your workflow.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto"
        >
          Start simple, upgrade when your context grows, and keep the same calm workspace
          as your notes, projects, meetings, and priorities expand.
        </motion.p>
      </div>

      {/* Toggle */}
      <div className="mb-12 flex justify-center">
        <label className="relative flex items-center p-1 bg-[#e2e8f0] rounded-full cursor-pointer w-[16rem] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_1px_1px_rgba(255,255,255,1)] border border-slate-300">
          <input 
            type="checkbox" 
            className="sr-only" 
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div 
            className={`absolute left-1 top-1 bottom-1 w-[calc(50%-0.25rem)] bg-gradient-to-b from-white to-slate-50 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isYearly ? 'translate-x-[100%]' : 'translate-x-0'
            }`}
          />
          <span className={`relative w-1/2 text-center text-xs font-normal transition-colors duration-300 py-2.5 z-10 ${!isYearly ? 'text-slate-800' : 'text-slate-400'}`}>
            Monthly
          </span>
          <span className={`relative w-1/2 text-center text-xs font-normal transition-colors duration-300 py-2.5 z-10 ${isYearly ? 'text-slate-800' : 'text-slate-400'}`}>
            Annually
          </span>
        </label>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-5xl mx-auto">
        <PricingCard 
          tier="Starter"
          price={15}
          priceYearly={12}
          description="For individuals who want a calmer way to capture ideas, notes, and daily priorities."
          features={["Personal daily brief", "Voice notes & capture", "Basic summaries", "Private memory controls"]}
          icon={CheckCircle2}
          isYearly={isYearly}
          delay={0.1}
        />
        <PricingCard 
          tier="Pro"
          price={65}
          priceYearly={45}
          description="For busy professionals who want deeper context and stronger daily execution."
          features={["Everything in Starter", "Advanced document summaries", "Suggested replies", "Focus window planning", "Extended private memory"]}
          isRecommended={true}
          icon={Sparkles}
          isYearly={isYearly}
          delay={0.2}
        />
        <PricingCard 
          tier="Team"
          price={249}
          priceYearly={199}
          description="For teams that need shared context and reliable execution across projects."
          features={["Everything in Pro", "Shared workspace memory", "Team summaries & briefs", "Admin controls", "Priority support"]}
          icon={Building2}
          isYearly={isYearly}
          delay={0.3}
        />
      </div>
    </section>
  );
};
