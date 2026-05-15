"use client";

import React from "react";
import { motion } from "motion/react";
import { navItems } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="py-20 relative z-10 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="text-2xl font-instrument italic text-slate-950 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-white" />
              </div>
              Shiro.
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              The unified intelligence layer for modern customer teams. Built for speed, precision, and human connection.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'LinkedIn', 'YouTube'].map(social => (
                 <a key={social} href="#" className="text-xs font-bold text-slate-400 hover:text-violet-600 transition-colors uppercase tracking-widest">{social}</a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-950 mb-6 uppercase tracking-widest text-[10px]">Product</h4>
            <ul className="space-y-4">
              {navItems.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-500 hover:text-slate-950 transition-colors">{item.label}</a>
                </li>
              ))}
              <li><a href="#" className="text-slate-500 hover:text-slate-950 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-950 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-950 mb-6 uppercase tracking-widest text-[10px]">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-slate-950 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-950 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-950 transition-colors">Security</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-950 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2024 Shiro Intelligence Inc. All rights reserved.
          </div>
          <div className="flex gap-8">
             <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-950">Privacy Policy</a>
             <a href="#" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-950">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
