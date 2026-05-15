"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe, X, Link, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="privacy" className="relative z-10 border-t border-slate-200/60 bg-white/40 backdrop-blur-xl pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <span className="w-9 h-9 rounded-full bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.06),inset_0_1px_0_white] flex items-center justify-center">
                <span className="font-mono text-xs font-medium tracking-[-0.08em] text-blue-600">
                  SH
                </span>
              </span>
              <span className="font-mono text-lg font-semibold tracking-[-0.08em] text-slate-950">
                SHIRO
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-7 font-light max-w-xs">
              The premium personal AI assistant designed to eliminate procrastination and bring clarity to your digital life.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 text-xs font-semibold tracking-widest uppercase mb-6 font-mono">Product</h4>
            <ul className="space-y-4">
              {["Features", "Workflow", "Pricing", "Privacy"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-500 text-sm font-light transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-xs font-semibold tracking-widest uppercase mb-6 font-mono">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: X, href: "https://twitter.com/adrielzimbril" },
                { icon: Globe, href: "https://github.com/adrielzimbril" },
                { icon: Link, href: "https://www.linkedin.com/in/adrielzimbrilcode" },
                { icon: Mail, href: "mailto:hello@adrielzimbril.com" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-200/40">
          <p className="text-slate-400 text-xs font-light">
            © 2026 Shiro AI. Developed by Adriel Zimbril.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-[10px] font-mono tracking-wider transition-colors">TERMS</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-[10px] font-mono tracking-wider transition-colors">PRIVACY</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-[10px] font-mono tracking-wider transition-colors">SECURITY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
