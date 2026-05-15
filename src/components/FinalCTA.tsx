import React from 'react';

export const FinalCTA = () => {
  return (
    <section id="final-cta" className="max-w-7xl mx-auto px-6 pt-14 pb-20">

  {/* Transition Copy Between FAQ + CTA */}
  <div className="relative text-center max-w-3xl mx-auto mb-10">
    <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/0 via-blue-100/20 to-transparent blur-2xl pointer-events-none">
    </div>

    <p className="relative font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-3">
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

  {/* Blue CTA Shell */}
  <div className="relative isolate overflow-hidden rounded-[2.75rem] bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white border border-blue-700 shadow-[0_40px_90px_-45px_rgba(59,130,246,0.72),inset_0_1px_0_rgba(255,255,255,0.34)] [clip-path:inset(0_round_2.75rem)]">

    {/* Blue surface texture */}
    <div className="absolute inset-0 z-0 opacity-[0.13]" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)","backgroundSize":"2rem 2rem"}}>
    </div>

    {/* Blue depth glows */}
    <div className="absolute top-[-35%] left-[-12%] z-0 w-[34rem] h-[34rem] rounded-full bg-white/26 blur-[6rem] pointer-events-none">
    </div>
    <div className="absolute bottom-[-40%] right-[-12%] z-0 w-[32rem] h-[32rem] rounded-full bg-blue-900/18 blur-[6rem] pointer-events-none">
    </div>
    <div className="absolute top-[30%] left-[48%] z-0 w-[20rem] h-[20rem] rounded-full bg-sky-200/18 blur-[5rem] pointer-events-none">
    </div>

    {/* Floating Bubble: Top Left */}
    <div className="hidden md:block absolute left-10 top-12 z-20 rotate-[-5deg] animate-[shiroFinalFloatOne_5.5s_ease-in-out_infinite]">
      <div className="rounded-2xl bg-white border border-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(15,23,42,0.52),inset_0_1px_0_white] min-w-[12.5rem]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
            <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-blue-500"></iconify-icon>
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
      <div className="rounded-2xl bg-white border border-white px-4 py-3 shadow-[0_28px_60px_-24px_rgba(15,23,42,0.52),inset_0_1px_0_white] min-w-[12.5rem]">
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

      <div className="inline-flex items-center gap-2 rounded-full bg-white/16 border border-white/20 px-3.5 py-2 mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_0_5px_rgba(255,255,255,0.14)]"></span>

        <span className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-50">
          YOUR AI ASSISTANT IS WAITING
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.05] max-w-5xl mx-auto">
        No more scattered mornings.
        <span className="block">No more procrastinated days.</span>
      </h2>

      <p className="mt-6 text-base md:text-lg leading-8 text-blue-50/90 font-light max-w-3xl mx-auto">
        Shiro wakes up before you do. Your priorities, reminders, and daily plan are ready the moment you open your eyes.
        All you have to do is start.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-gradient-to-b from-white to-blue-50 border border-white text-blue-600 text-sm font-normal shadow-[0_14px_30px_rgba(15,23,42,0.18),inset_0_1px_0_white] hover:from-white hover:to-white hover:-translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(15,23,42,0.08)] transition-all duration-300">
          Start Free Today
          <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth":"1.5"}} className="text-lg"></iconify-icon>
        </a>

        <a href="#workflow" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 bg-white/14 border border-white/24 text-white text-sm font-normal shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300">
          See How It Works
        </a>
      </div>

      {/* Small Trust Row */}
      <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 text-xs text-blue-50/78 font-light">
        <span className="inline-flex items-center gap-2">
          <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth":"1.5"}} className="text-base text-white"></iconify-icon>
          Private by design
        </span>

        <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40"></span>

        <span className="inline-flex items-center gap-2">
          <iconify-icon icon="solar:database-linear" style={{"strokeWidth":"1.5"}} className="text-base text-white"></iconify-icon>
          Controlled memory
        </span>

        <span className="hidden sm:block w-1 h-1 rounded-full bg-white/40"></span>

        <span className="inline-flex items-center gap-2">
          <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth":"1.5"}} className="text-base text-white"></iconify-icon>
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
