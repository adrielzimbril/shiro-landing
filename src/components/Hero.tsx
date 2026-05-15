"use client";

import React from "react";

export const Hero = () => {
  return (
    <section className="relative overflow-visible pt-32 pb-20 md:pt-48 md:pb-32">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shiro-float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(4px); }
          50% { transform: translateY(-4px) translateX(-6px); }
          75% { transform: translateY(-12px) translateX(2px); }
        }
        .shiro-float {
          animation: shiro-float 8s ease-in-out infinite;
        }
        @keyframes shiro-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        .shiro-pulse-dot {
          animation: shiro-pulse-dot 2s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

          {/* ── Hero Copy ──────────────────────────────────────────── */}
          <div className="relative z-10 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/30 backdrop-blur-md border border-violet-200/50 px-4 py-1.5 mb-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] hover:bg-violet-100/50 transition-all duration-500 group cursor-default">
              <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] animate-pulse" />
              <p className="font-mono text-[10px] font-bold tracking-wider text-violet-600 uppercase">
                A New Standard of Focus
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-[3.8rem] md:text-[5.5rem] lg:text-[7.8rem] font-normal tracking-[-0.05em] leading-[0.85] text-slate-900">
              Don't just plan.
              <span className="block mt-2 font-light text-slate-400">Architect.</span>
              <span className="relative inline-block mt-4 text-violet-600 italic font-serif px-2 drop-shadow-sm">
                Meet Shiro.
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-violet-300/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-12 text-lg md:text-xl leading-relaxed text-slate-500 font-normal max-w-2xl mx-auto lg:mx-0">
              The first AI companion that bridges the gap between intent and action. 
              Shiro doesn't just list your tasks—it builds the environment for you to execute them.
            </p>

            {/* CTAs */}
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a
                href="#pricing"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-br from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 transition-all duration-500 text-white text-[15px] font-semibold rounded-full px-10 py-5 shadow-[0_20px_40px_-10px_rgba(139,92,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:translate-y-0"
              >
                <span>Find Your Flow</span>
                <iconify-icon icon="solar:round-alt-arrow-right-bold" className="text-xl group-hover:translate-x-1.5 transition-transform"></iconify-icon>
              </a>
              <a
                href="#how-it-works"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/40 backdrop-blur-2xl hover:bg-white/70 transition-all duration-500 text-slate-900 text-[15px] font-semibold rounded-full px-10 py-5 border border-white/60 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1),inset_0_1px_1px_white] hover:-translate-y-1 active:translate-y-0"
              >
                <iconify-icon icon="solar:play-bold" className="text-xl text-violet-500 group-hover:scale-110 transition-transform"></iconify-icon>
                <span>The Shiro Method</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6 text-[11px] text-slate-400 font-medium uppercase tracking-widest">
              <div className="flex items-center gap-2.5 group transition-colors hover:text-violet-500">
                <iconify-icon icon="solar:shield-keyhole-bold" className="text-lg text-violet-400 group-hover:text-violet-500 transition-colors"></iconify-icon>
                <span>Private by Design</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-violet-200" />
              <div className="flex items-center gap-2.5 group transition-colors hover:text-violet-500">
                <iconify-icon icon="solar:star-fall-bold" className="text-lg text-violet-400 group-hover:text-violet-500 transition-colors"></iconify-icon>
                <span>Cognitive Relief</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-violet-200" />
              <div className="flex items-center gap-2.5 group transition-colors hover:text-violet-500">
                <iconify-icon icon="solar:graph-up-bold" className="text-lg text-violet-400 group-hover:text-violet-500 transition-colors"></iconify-icon>
                <span>3.2x Focus Score</span>
              </div>
            </div>
          </div>

          {/* ── Hero Visual ────────────────────────────────────────── */}
          <div className="relative lg:pl-10">

            {/* Ambient glows */}
            <div className="absolute top-[-25%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-violet-400/20 blur-[8rem] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute bottom-[-15%] right-[-20%] w-[30rem] h-[30rem] rounded-full bg-purple-400/15 blur-[6rem] pointer-events-none" />

            {/* App container */}
            <div className="relative z-10 w-full max-w-2xl mx-auto rounded-[3.5rem] bg-white/[0.2] border border-white/40 p-4 md:p-6 shadow-[0_50px_100px_-40px_rgba(139,92,246,0.3),inset_0_1px_1px_white/80] backdrop-blur-3xl">

              {/* Floating bubble 01 — Assistant Message */}
              <div className="shiro-float absolute -right-6 top-16 z-20 rounded-3xl bg-white/95 backdrop-blur-xl border border-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(139,92,246,0.3),inset_0_1px_1px_white]" style={{ animationDelay: '0.s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-200">
                    <iconify-icon icon="solar:chat-round-dots-bold" className="text-xl text-white"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-bold">Shiro</p>
                    <p className="text-[11px] text-slate-500 font-medium">Your energy is peaking. Ready for deep work?</p>
                  </div>
                </div>
              </div>

              {/* Floating bubble 02 — Focus Mode */}
              <div className="shiro-float absolute -left-10 bottom-24 z-20 rounded-3xl bg-violet-600 px-6 py-4 shadow-[0_20px_50px_-20px_rgba(124,58,237,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]" style={{ animationDelay: '-4s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  <p className="text-[13px] text-white font-bold tracking-wide uppercase">Flow Secured</p>
                </div>
              </div>

              {/* App Shell */}
              <div className="rounded-[2.75rem] bg-white/[0.85] text-slate-900 border border-white/60 overflow-hidden shadow-[0_30px_70px_-40px_rgba(139,92,246,0.3),inset_0_1px_1px_white] backdrop-blur-2xl">

                {/* App Top Bar */}
                <div className="px-6 py-5 flex items-center justify-between border-b border-violet-100/60">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100">
                    <span className="shiro-pulse-dot w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    <span className="font-mono text-[11px] font-bold text-violet-600 tracking-tighter uppercase">
                      Architecture Active
                    </span>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 md:p-8">

                  {/* Header */}
                  <div className="flex items-start justify-between gap-6 mb-10">
                    <div>
                      <p className="text-[11px] text-violet-500 font-bold font-mono mb-2 uppercase tracking-[0.2em]">Current Session</p>
                      <h3 className="text-3xl md:text-4xl font-normal tracking-[-0.04em] text-slate-900">
                        Deep Focus Zone.
                      </h3>
                      <p className="text-[13px] text-slate-400 mt-2.5 font-medium leading-relaxed">
                        I've blocked 12 distracting domains and silenced all pings. 
                        You have 75 minutes of pure output ahead.
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white shadow-xl shadow-violet-200">
                      <iconify-icon icon="solar:ghost-bold" className="text-3xl"></iconify-icon>
                    </div>
                  </div>

                  {/* Today's schedule - Bento Grid Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Top priority */}
                    <div className="col-span-1 md:col-span-2 rounded-3xl bg-white border border-slate-100 p-6 shadow-sm hover:border-violet-200 transition-all duration-500 group">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <iconify-icon icon="solar:bolt-bold" className="text-2xl"></iconify-icon>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[13px] font-bold text-slate-900">Finish Design System</p>
                            <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-lg">95% FLOW</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[85%] h-full bg-violet-500 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Suggestion */}
                    <div className="rounded-3xl bg-slate-50 border border-slate-100 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-slate-900 shadow-sm">
                          <iconify-icon icon="solar:cup-first-bold" className="text-lg"></iconify-icon>
                        </div>
                        <p className="text-xs font-bold text-slate-900">Rest Stop</p>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                        Walk 10 mins. Your cognitive fatigue index is rising.
                      </p>
                    </div>

                    {/* Notification blocker */}
                    <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-purple-700 text-white p-6 shadow-xl shadow-violet-200">
                      <div className="flex items-center gap-3 mb-3">
                        <iconify-icon icon="solar:armchair-bold" className="text-xl text-violet-200"></iconify-icon>
                        <p className="text-xs font-bold tracking-wider uppercase">Shield On</p>
                      </div>
                      <p className="text-[11px] leading-relaxed text-violet-100 font-medium">
                        14 notifications suppressed to maintain flow.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
