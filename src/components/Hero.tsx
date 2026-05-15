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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/75 border border-white px-3.5 py-2 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.3),inset_0_1px_0_white] mb-10 transition-all hover:bg-white">
              <span className="w-7 h-7 rounded-full bg-gradient-to-b from-blue-50 to-white border border-blue-100 shadow-[inset_0_1px_0_white] flex items-center justify-center">
                <iconify-icon icon="solar:stars-minimalistic-linear" style={{"strokeWidth":"1.5"}} className="text-sm text-blue-500"></iconify-icon>
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-slate-500">
                YOUR PERSONAL AI ASSISTANT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-light tracking-[-0.075em] leading-[0.92] text-slate-950">
              <span className="block">Your day,</span>
              <span className="block mt-2">finally</span>
              <span className="inline-flex mt-4 rounded-[1.35rem] bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 px-4 md:px-5 pb-2.5 pt-1.5 text-white font-normal shadow-[0_18px_38px_-20px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.38)]">
                under control.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="mt-10 text-lg md:text-xl leading-8 text-slate-600 font-light max-w-2xl mx-auto lg:mx-0">
              Shiro is your AI-powered personal assistant that plans your days, 
              tracks your priorities, and makes sure nothing slips through the cracks — 
              so you can finally stop procrastinating and start doing.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#pricing"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 transition-all text-white text-sm font-normal rounded-full px-8 py-4 shadow-[0_10px_24px_rgba(59,130,246,0.28),inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 border border-blue-700"
              >
                <span>Get Started Free</span>
                <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth":"1.5"}} className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
              </a>
              <a
                href="#workflow"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-slate-50 transition-all text-slate-900 text-sm font-normal rounded-full px-8 py-4 border border-slate-200 shadow-[0_4px_12px_rgba(15,23,42,0.05),inset_0_1px_0_white] hover:-translate-y-0.5 active:translate-y-0"
              >
                <iconify-icon icon="solar:play-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-blue-500"></iconify-icon>
                <span>See How It Works</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-light">
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth":"1.5"}} className="text-base text-blue-500"></iconify-icon>
                <span>Private by design</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:calendar-mark-linear" style={{"strokeWidth":"1.5"}} className="text-base text-blue-500"></iconify-icon>
                <span>Plans your full day</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2">
                <iconify-icon icon="solar:bolt-circle-linear" style={{"strokeWidth":"1.5"}} className="text-base text-blue-500"></iconify-icon>
                <span>Zero procrastination</span>
              </div>
            </div>
          </div>

          {/* ── Hero Visual ────────────────────────────────────────── */}
          <div className="relative lg:pl-10">

            {/* Ambient glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[32rem] h-[32rem] rounded-full bg-blue-100/40 blur-[6rem] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[-10%] right-[-15%] w-[24rem] h-[24rem] rounded-full bg-indigo-100/30 blur-[5rem] pointer-events-none" />

            {/* App container */}
            <div className="relative z-10 w-full max-w-2xl mx-auto rounded-[2.5rem] bg-white/[0.65] border border-white p-4 md:p-5 shadow-[0_40px_90px_-45px_rgba(15,23,42,0.22),inset_0_1px_0_white] backdrop-blur-xl">

              {/* Floating bubble 01 — Reminder */}
              <div className="shiro-float absolute -right-4 top-12 z-20 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                    <iconify-icon icon="solar:bell-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-amber-500"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Reminder</p>
                    <p className="text-[10px] text-slate-400 font-light">Team sync in 15 min</p>
                  </div>
                </div>
              </div>

              {/* Floating bubble 02 — Task done */}
              <div className="shiro-float absolute -right-8 top-[35%] z-20 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]" style={{ animationDelay: '-3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-emerald-500"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Task completed</p>
                    <p className="text-[10px] text-slate-400 font-light">Deep work block: 2h</p>
                  </div>
                </div>
              </div>

              {/* Floating bubble 03 — Plan ready */}
              <div className="shiro-float absolute -right-2 bottom-[26%] z-20 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]" style={{ animationDelay: '-1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <iconify-icon icon="solar:calendar-mark-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-blue-500"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Plan generated</p>
                    <p className="text-[10px] text-slate-400 font-light">6 tasks · 4h focus time</p>
                  </div>
                </div>
              </div>

              {/* Floating bubble 04 — No procrastination */}
              <div className="shiro-float absolute left-6 -bottom-6 z-20 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]" style={{ animationDelay: '-5.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center">
                    <iconify-icon icon="solar:stars-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-violet-500"></iconify-icon>
                  </div>
                  <div>
                    <p className="text-xs text-slate-900 font-normal">Streak: 7 days</p>
                    <p className="text-[10px] text-slate-400 font-light">No missed priorities</p>
                  </div>
                </div>
              </div>

              {/* App Shell */}
              <div className="rounded-[2.15rem] bg-gradient-to-b from-white to-slate-50 text-slate-900 border border-white/80 overflow-hidden shadow-[0_18px_50px_-30px_rgba(0,0,0,0.45),inset_0_1px_0_white]">

                {/* App Top Bar */}
                <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="shiro-pulse-dot w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="font-['JetBrains_Mono',monospace] text-xs text-slate-400 tracking-[-0.05em]">
                      SHIRO · DAILY PLAN
                    </span>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-5 md:p-6">

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs text-slate-400 font-light mb-1">Thursday, May 15</p>
                      <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-950">
                        Good morning, Alex.
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-light">You have 5 priorities today.</p>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-[inset_0_1px_0_white] flex-shrink-0">
                      <iconify-icon icon="solar:stars-linear" style={{"strokeWidth":"1.5"}} className="text-2xl"></iconify-icon>
                    </div>
                  </div>

                  {/* Today's schedule */}
                  <div className="grid gap-4 md:gap-5">

                    {/* Top priority */}
                    <div className="rounded-[1.5rem] bg-white border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white] hover:border-blue-100 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                          <iconify-icon icon="solar:flame-linear" style={{"strokeWidth":"1.5"}} className="text-xl"></iconify-icon>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs font-medium text-slate-950">Top priority</p>
                            <span className="text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5 flex-shrink-0">#1</span>
                          </div>
                          <p className="text-[11px] leading-5 text-slate-500 mt-1 font-light truncate">
                            Finish Q2 report before the 3 PM review
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Focus block row */}
                    <div className="grid md:grid-cols-2 gap-4">

                      {/* Focus time */}
                      <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-50 to-slate-200 text-slate-900 border border-blue-100 p-4 shadow-[0_12px_28px_-16px_rgba(59,130,246,0.24),inset_0_1px_0_white]">
                        <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-300/30 blur-2xl pointer-events-none" />
                        <div className="relative">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
                            <p className="text-[10px] text-slate-500 font-light">Focus block</p>
                          </div>
                          <p className="text-xl font-light tracking-tight text-slate-950">09:00–11:00</p>
                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/70 border border-white px-2.5 py-1 text-[9px] text-slate-500">
                            <iconify-icon icon="solar:lock-password-linear" className="text-xs text-blue-500"></iconify-icon>
                            Notifications paused
                          </div>
                        </div>
                      </div>

                      {/* AI suggestion */}
                      <div className="rounded-[1.5rem] bg-gradient-to-b from-blue-400 to-blue-600 text-white border border-blue-700 p-4 shadow-[0_10px_24px_-14px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.30)]">
                        <div className="flex items-center gap-2 mb-2">
                          <iconify-icon icon="solar:chat-round-dots-linear" style={{"strokeWidth":"1.5"}} className="text-base text-blue-100"></iconify-icon>
                          <p className="text-[10px] text-blue-100 font-light">Shiro suggests</p>
                        </div>
                        <p className="text-xs leading-5 font-light">
                          Move your gym to 6 PM — your morning is best for deep work.
                        </p>
                      </div>

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
