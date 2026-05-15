"use client";

import React from "react";
import { motion } from "motion/react";
import { ListTodo, Sparkles, Timer, MessageCircle, Share2, Shield } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, className, delay = 0 }: { icon: any; title: string; description: string; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-[0_2px_12px_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-20px_rgba(15,23,42,0.1)] transition-all duration-500 ${className}`}
  >
    <div className="p-8 h-full flex flex-col">
      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-normal text-slate-900 mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500 leading-6 font-light">{description}</p>
      
      {/* Decorative gradient corner */}
      <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/5 blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
    </div>
  </motion.div>
);

export const Features = () => {
  return (
    <section id="workflow" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        
        {/* Large Feature 1 */}
        <FeatureCard 
          icon={Sparkles}
          title="Intelligent Briefing"
          description="Every morning, Shiro synthesizes your emails, slack messages, and notes into a 2-minute daily brief. No more digging for context."
          className="md:col-span-6 lg:col-span-8 lg:row-span-2 min-h-[320px] lg:min-h-[400px]"
          delay={0.1}
        />

        {/* Feature 2 */}
        <FeatureCard 
          icon={Timer}
          title="Deep Focus Protection"
          description="Automatically detects priority work and silences non-urgent notifications during your peak performance hours."
          className="md:col-span-3 lg:col-span-4"
          delay={0.2}
        />

        {/* Feature 3 */}
        <FeatureCard 
          icon={MessageCircle}
          title="Contextual Replies"
          description="Draft high-quality responses based on previous interactions, saving you hours of repetitive typing."
          className="md:col-span-3 lg:col-span-4"
          delay={0.3}
        />

        {/* Feature 4 */}
        <FeatureCard 
          icon={ListTodo}
          title="Smart Action Items"
          description="Turn voice memos or messy notes into formatted task lists and calendar events instantly."
          className="md:col-span-3 lg:col-span-4"
          delay={0.4}
        />

        {/* Feature 5 */}
        <FeatureCard 
          icon={Share2}
          title="Seamless Sync"
          description="Available across all your devices with real-time cloud synchronization."
          className="md:col-span-3 lg:col-span-4"
          delay={0.5}
        />

        {/* Feature 6 */}
        <FeatureCard 
          icon={Shield}
          title="Private-First AI"
          description="Your data never leaves your device. All processing happens locally or in your private secure vault."
          className="md:col-span-6 lg:col-span-4"
          delay={0.6}
        />
      </div>
    </section>
  );
};
