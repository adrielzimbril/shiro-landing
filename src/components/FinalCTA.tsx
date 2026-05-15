import React from 'react';

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="max-w-7xl mx-auto px-6 pt-14 pb-20">

  {/* Transition Copy Between FAQ + CTA */}
  <div className="relative text-center max-w-3xl mx-auto mb-10">
    <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/0 via-violet-100/20 to-transparent blur-2xl pointer-events-none">
    </div>

    <p className="relative font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-violet-600 mb-3">
      YOUR FIRST STEP
    </p>

    <h2 className="relative text-3xl md:text-4xl font-normal tracking-tight text-slate-950 leading-[1.08]">
      Tomorrow starts tonight.
      <span className="block">Let Shiro handle the rest.</span>
    </h2>

    <p className="relative mt-4 text-sm md:text-base leading-7 text-slate-600 font-light">
      Stop planning to plan. Give Shiro five minutes tonight, wake up tomorrow with a clear head.
    </p>
  </div>

  {/* Light Glassmorphic CTA Shell */}
  <div className="relative isolate overflow-hidden rounded-[2.75rem] bg-white/40 backdrop-blur-xl border border-white shadow-[0_40px_90px_-45px_rgba(139,92,246,0.15),inset_0_1px_0_white] [clip-path:inset(0_round_2.75rem)]">

    {/* Surface texture */}
    <div className="absolute inset-0 z-0 opacity-[0.03]" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(139,92,246,0.3) 1px, transparent 0)","backgroundSize":"2rem 2rem"}}>
    </div>

    {/* Depth glows */}
    <div className="absolute top-[-35%] left-[-12%] z-0 w-[34rem] h-[34rem] rounded-full bg-violet-100/40 blur-[6rem] pointer-events-none">
    </div>
    <div className="absolute bottom-[-40%] right-[-12%] z-0 w-[32rem] h-[32rem] rounded-full bg-violet-200/30 blur-[6rem] pointer-events-none">
    </div>
    <div className="absolute top-[30%] left-[48%] z-0 w-[20rem] h-[20rem] rounded-full bg-indigo-50/40 blur-[5rem] pointer-events-none">
    </div>

    {/* Floating Bubble: Top Left */}
    <div className="hidden md:block absolute left-10 top-12 z-20 rotate-[-5deg] animate-[shiroFinalFloatOne_5.5s_ease-in-out_infinite]">
      <div className="rounded-2xl bg-white/80 backdrop-blur-md border border-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(139,92,246,0.15),inset_0_1px_0_white] min-w-[12.5rem]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
            <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-violet-600"></iconify-icon>
          </div>

          <div>
            <p className="text-xs text-slate-950 font-normal">
              Daily brief ready
            </p>
            <p className="text-xs text-slate-500 font-light">
              3 priorities surfaced
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Bubble: Bottom Right */}
    <div className="hidden md:block absolute right-10 bottom-12 z-20 rotate-[5deg] animate-[shiroFinalFloatTwo_6.25s_ease-in-out_infinite]">
      <div className="rounded-2xl bg-white/80 backdrop-blur-md border border-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(139,92,246,0.15),inset_0_1px_0_white] min-w-[12.5rem]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
            <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-emerald-500"></iconify-icon>
          </div>

          <div>
            <p className="text-xs text-slate-950 font-normal">
              Follow-ups handled
            </p>
            <p className="text-xs text-slate-500 font-light">
              Work feels lighter
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Content */}
    <div className="relative z-10 px-6 py-24 md:px-12 md:py-28 text-center">

      <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3.5 py-2 mb-8 shadow-[inset_0_1px_0_white]">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_0_5px_rgba(139,92,246,0.14)]"></span>

        <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-violet-600">
          YOUR AI ASSISTANT IS WAITING
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">
        No more scattered mornings.
        <span className="block">No more procrastinated days.</span>
      </h2>

      <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">
        Shiro wakes up before you do. Your priorities, reminders, and daily plan are ready the moment you open your eyes.
        All you have to do is start.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-gradient-to-b from-violet-600 to-indigo-600 border border-violet-500 text-white text-sm font-normal shadow-[0_14px_30px_rgba(139,92,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:opacity-90 hover:-translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300">
          Start Free Today
          <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth":"1.5"}} className="text-lg"></iconify-icon>
        </a>

        <a href="#workflow" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-violet-50 border border-violet-100 text-violet-600 text-sm font-normal shadow-[inset_0_1px_0_white] hover:bg-violet-100 hover:-translate-y-0.5 transition-all duration-300">
          See How It Works
        </a>
      </div>

      {/* Small Trust Row */}
      <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 text-xs text-slate-400 font-light">
        <span className="inline-flex items-center gap-2">
          <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>
          Private by design
        </span>

        <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>

        <span className="inline-flex items-center gap-2">
          <iconify-icon icon="solar:database-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>
          Controlled memory
        </span>

        <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>

        <span className="inline-flex items-center gap-2">
          <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>
          Reset anytime
        </span>
      </div>
    </div>
  </div>

  <style dangerouslySetInnerHTML={{__html: `
    @keyframes shiroFinalFloatOne {

      0%,
      100% {
        transform: translateY(0) rotate(-5deg);
      }

      50% {
        transform: translateY(-10px) rotate(-3deg);
      }
    }

    @keyframes shiroFinalFloatTwo {

      0%,
      100% {
        transform: translateY(0) rotate(5deg);
      }

      50% {
        transform: translateY(10px) rotate(3deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {

      .animate-\[shiroFinalFloatOne_5\.5s_ease-in-out_infinite\],
      .animate-\[shiroFinalFloatTwo_6\.25s_ease-in-out_infinite\] {
        animation: none;
      }
    }
  `}} />
</section>
  );
}
