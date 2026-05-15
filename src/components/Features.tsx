import React from 'react';

export const Features = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
    
      {/* Section Intro */}
    
      <div className="text-center max-w-5xl mx-auto mb-14">
    
        <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">
    
          CORE CAPABILITIES
    
        </p>
    
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">
    
          SHIRO turns your day
    
          <span className="block">into an organized loop.</span>
    
        </h2>
    
        <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">
    
          Capture what happens, understand what matters, and move forward with clear priorities,
    
          reminders, summaries, and next actions.
    
        </p>
    
      </div>
    
      {/* Capability Grid */}
    
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    
        {/* Capability 01 */}
    
        <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">
    
          <div className="flex items-center justify-between gap-4">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>
    
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
    
              3 priorities ready
    
            </span>
    
          </div>
    
          <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">
    
            Morning Brief
    
          </h3>
    
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
    
            Start with priorities, schedule context, unresolved follow-ups, and the decisions waiting for you.
    
          </p>
    
        </div>
    
        {/* Capability 02 */}
    
        <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">
    
          <div className="flex items-center justify-between gap-4">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:microphone-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>
    
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-500 bg-white border border-slate-200 rounded-full px-2.5 py-1 shadow-[inset_0_1px_0_white]">
    
              Voice note saved
    
            </span>
    
          </div>
    
          <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">
    
            Capture in Motion
    
          </h3>
    
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
    
            Save ideas, voice notes, links, documents, and messages without breaking focus.
    
          </p>
    
        </div>
    
        {/* Capability 03 */}
    
        <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">
    
          <div className="flex items-center justify-between gap-4">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:case-round-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>
    
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
    
              Context prepared
    
            </span>
    
          </div>
    
          <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">
    
            Meeting Prep
    
          </h3>
    
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
    
            Walk into conversations with summaries, previous context, and reminders already prepared.
    
          </p>
    
        </div>
    
        {/* Capability 04 */}
    
        <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">
    
          <div className="flex items-center justify-between gap-4">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:checklist-minimalistic-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>
    
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
    
              5 actions found
    
            </span>
    
          </div>
    
          <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">
    
            Action Recovery
    
          </h3>
    
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
    
            Turn messy notes and conversations into tasks, owners, due dates, and suggested next steps.
    
          </p>
    
        </div>
    
        {/* Capability 05 */}
    
        <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">
    
          <div className="flex items-center justify-between gap-4">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:chat-round-dots-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>
    
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-1">
    
              Reply ready
    
            </span>
    
          </div>
    
          <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">
    
            Suggested Replies
    
          </h3>
    
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
    
            Draft thoughtful replies and updates from the context SHIRO already understands.
    
          </p>
    
        </div>
    
        {/* Capability 06 */}
    
        <div className="rounded-[2rem] bg-white/68 border border-white p-6 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/84 transition-all duration-300">
    
          <div className="flex items-center justify-between gap-4">
    
            <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:database-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-slate-600"></iconify-icon>
    
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-500 bg-white border border-slate-200 rounded-full px-2.5 py-1 shadow-[inset_0_1px_0_white]">
    
              Memory updated
    
            </span>
    
          </div>
    
          <h3 className="mt-6 text-xl font-normal tracking-tight text-slate-950">
    
            Private Memory
    
          </h3>
    
          <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
    
            Carry useful context forward without rebuilding your workspace every morning.
    
          </p>
    
        </div>
    
        {/* Capability 07 / Wide Card */}
    
        <div className="md:col-span-2 lg:col-span-3 rounded-[2.25rem] bg-gradient-to-b from-[#1d2a3d] to-[#131c2b] text-white border border-white/10 p-6 md:p-8 shadow-[0_28px_70px_-35px_rgba(15,23,42,0.72),inset_0_1px_0_rgba(255,255,255,0.13)] overflow-hidden relative">
    
          {/* Background glow */}
    
          <div className="absolute top-[-40%] right-[-10%] w-[24rem] h-[24rem] rounded-full bg-blue-400/18 blur-[5rem]"></div>
    
          <div className="absolute bottom-[-45%] left-[-12%] w-[22rem] h-[22rem] rounded-full bg-sky-300/10 blur-[5rem]"></div>
    
          <div className="absolute inset-0 opacity-[0.09]" style={{"backgroundImage":"linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)","backgroundSize":"36px 36px"}}>
          </div>
    
          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
    
            {/* Wide Card Copy */}
    
            <div>
    
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-3 py-1.5 mb-6">
    
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
    
                <span className="font-['JetBrains_Mono',monospace] text-[10px] tracking-[-0.03em] text-blue-200">
    
                  TOMORROW ORGANIZED
    
                </span>
    
              </div>
    
              <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-white leading-tight">
    
                End-of-Day Wrap
    
              </h3>
    
              <p className="mt-4 text-sm md:text-base leading-7 text-slate-300 font-light max-w-xl">
    
                Review what moved, what stalled, what needs attention tomorrow, and what SHIRO should remember.
    
              </p>
    
            </div>
    
            {/* Mini End-of-Day UI */}
    
            <div className="rounded-[1.75rem] bg-white text-slate-900 border border-white/80 p-4 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.62),inset_0_1px_0_white]">
    
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
    
                <div>
    
                  <p className="text-xs text-slate-400 font-light">
    
                    Today’s wrap
    
                  </p>
    
                  <p className="mt-1 text-xl font-normal tracking-tight text-slate-950">
    
                    Ready for tomorrow.
    
                  </p>
    
                </div>
    
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
    
                  <iconify-icon icon="solar:moon-stars-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-blue-500"></iconify-icon>
    
                </div>
    
              </div>
    
              <div className="grid sm:grid-cols-3 gap-3">
    
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">
    
                  <p className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400 uppercase tracking-widest">
    
                    Moved
    
                  </p>
    
                  <p className="mt-2 text-2xl font-light tracking-tight text-slate-950">
    
                    7
    
                  </p>
    
                  <p className="mt-1 text-xs text-slate-500 font-light">
    
                    actions completed
    
                  </p>
    
                </div>
    
                <div className="rounded-2xl bg-blue-50 text-slate-900 border border-blue-100 p-4 shadow-[inset_0_1px_0_white]">
    
                  <p className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-500 uppercase tracking-widest">
    
                    Carry
    
                  </p>
    
                  <p className="mt-2 text-2xl font-light tracking-tight text-slate-950">
    
                    3
    
                  </p>
    
                  <p className="mt-1 text-xs text-slate-500 font-light">
    
                    priorities tomorrow
    
                  </p>
    
                </div>
    
                <div className="rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 text-white border border-blue-700 p-4 shadow-[0_12px_28px_-18px_rgba(59,130,246,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]">
    
                  <p className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-100 uppercase tracking-widest">
    
                    Memory
    
                  </p>
    
                  <p className="mt-2 text-2xl font-light tracking-tight text-white">
    
                    5
    
                  </p>
    
                  <p className="mt-1 text-xs text-blue-100 font-light">
    
                    updates saved
    
                  </p>
    
                </div>
    
              </div>
    
            </div>
    
          </div>
    
        </div>
    
      </div>
    
    </section>
  );
}
