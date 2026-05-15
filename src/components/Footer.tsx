import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-white/72 border-t border-white shadow-[0_-18px_55px_-40px_rgba(15,23,42,0.45),inset_0_1px_0_white] backdrop-blur-xl">

  {/* Subtle footer glow */}

  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

  <div className="max-w-7xl mx-auto px-6 py-12">

    {/* Main Footer Grid */}

    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-10 lg:gap-16">

      {/* Brand / Summary */}

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

        <a href="#" className="flex items-center gap-3 group">

          <span className="w-10 h-10 rounded-full bg-gradient-to-b from-white to-slate-100 border border-slate-200 shadow-[0_2px_8px_rgba(15,23,42,0.06),inset_0_1px_0_white] flex items-center justify-center">

            <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.08em] text-blue-600">

              AU

            </span>

          </span>

          <span className="flex flex-col justify-center leading-none">

            <span className="font-['JetBrains_Mono',monospace] text-sm font-semibold tracking-[-0.08em] text-slate-950 group-hover:text-blue-600 transition-colors">

              SHIRO

            </span>

          <span className="mt-1 text-[10px] font-light tracking-[-0.03em] text-slate-400">

              Personal AI

            </span>

          </span>

        </a>

        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500 font-light">

          A calmer way to capture context, organize priorities, and move through your day with less friction.

        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-xs text-blue-600 shadow-[inset_0_1px_0_white]">

          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

          Built for busy minds

        </div>

      </div>

      {/* Footer Link Groups */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* Product */}

        <div>

          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[-0.04em] text-slate-400 uppercase mb-4">

            Product

          </p>

          <div className="flex flex-col gap-3 text-sm text-slate-500 font-light">

            <a href="#features" className="hover:text-blue-600 transition-colors">

              Features

            </a>

            <a href="#workflow" className="hover:text-blue-600 transition-colors">

              Workflow

            </a>

            <a href="#built-for" className="hover:text-blue-600 transition-colors">

              Built For

            </a>

            <a href="#pricing" className="hover:text-blue-600 transition-colors">

              Pricing

            </a>

          </div>

        </div>

        {/* Workflow */}

        <div>

          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[-0.04em] text-slate-400 uppercase mb-4">

            Workflow

          </p>

          <div className="flex flex-col gap-3 text-sm text-slate-500 font-light">

            <a href="#workflow" className="hover:text-blue-600 transition-colors">

              Capture ideas

            </a>

            <a href="#features" className="hover:text-blue-600 transition-colors">

              Summarize context

            </a>

            <a href="#features" className="hover:text-blue-600 transition-colors">

              Recover follow-ups

            </a>

            <a href="#features" className="hover:text-blue-600 transition-colors">

              Daily brief

            </a>

          </div>

        </div>

        {/* Trust */}

        <div>

          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[-0.04em] text-slate-400 uppercase mb-4">

            Trust

          </p>

          <div className="flex flex-col gap-3 text-sm text-slate-500 font-light">

            <a href="#privacy" className="hover:text-blue-600 transition-colors">

              Privacy controls

            </a>

            <a href="#privacy" className="hover:text-blue-600 transition-colors">

              Controlled memory

            </a>

            <a href="#privacy" className="hover:text-blue-600 transition-colors">

              Reset anytime

            </a>

            <a href="#faq" className="hover:text-blue-600 transition-colors">

              FAQ

            </a>

          </div>

        </div>

      </div>

    </div>

    {/* Bottom Row */}

    <div className="mt-12 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-xs text-slate-400 font-light">

        © 2026 SHIRO. All rights reserved.

      </p>

      <div className="flex items-center gap-4 text-xs text-slate-400 font-light">

        <a href="#" className="hover:text-blue-600 transition-colors">

          Terms

        </a>

        <span className="w-1 h-1 rounded-full bg-slate-300"></span>

        <a href="#" className="hover:text-blue-600 transition-colors">

          Privacy

        </a>

        <span className="w-1 h-1 rounded-full bg-slate-300"></span>

        <a href="#" className="hover:text-blue-600 transition-colors">

          Contact

        </a>

      </div>

    </div>

  </div>

</footer>
  );
}
