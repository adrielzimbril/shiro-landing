import React from 'react';

export const BuiltFor = () => {
  return (
    <section id="built-for" className="max-w-7xl mx-auto px-6 py-20">

  {/* Section Header */}

  <div className="text-center max-w-5xl mx-auto mb-14">

    <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">

      BUILT FOR

    </p>

    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">

      Built for people

      <span className="block">with too much context.</span>

    </h2>

    <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">

      SHIRO is designed for busy minds: people who move between meetings,

      messages, ideas, documents, and decisions all day.

    </p>

    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

      <a href="#pricing" className="inline-flex items-center gap-2 justify-center rounded-full px-6 py-3.5 text-sm font-normal text-white bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 shadow-[0_10px_24px_rgba(59,130,246,0.26),inset_0_1px_0_rgba(255,255,255,0.35)] hover:from-blue-400 hover:to-blue-500 hover:-translate-y-0.5 transition-all duration-300">

        Try SHIRO Free

        <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth":"1.5"}} className="text-lg"></iconify-icon>

      </a>

      <a href="#workflow" className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-normal text-slate-700 bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-[0_6px_16px_rgba(15,23,42,0.06),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 hover:-translate-y-0.5 transition-all duration-300">

        Explore Workflow

      </a>

    </div>

  </div>

  {/* Use Case Cards */}

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

    {/* Card 01 — Founders */}
    <article className="group bg-white/70 rounded-[2rem] border border-white shadow-[0_18px_44px_-28px_rgba(15,23,42,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 hover:bg-white/88 transition-all duration-300">
    
      {/* Visual Panel */}
      <div className="relative isolate mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.28),inset_0_1px_0_white] min-h-[13rem] [clip-path:inset(0_round_1.5rem)]">
    
        {/* Texture + Glow */}
        <div className="absolute inset-0 z-0 opacity-[0.16]" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)","backgroundSize":"1.5rem 1.5rem"}}>
        </div>
        <div className="absolute top-[-35%] right-[-20%] z-0 w-[14rem] h-[14rem] rounded-full bg-blue-200/55 blur-[4rem] pointer-events-none">
        </div>
    
        {/* Mini UI */}
        <div className="relative z-10 p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
            </div>
    
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400">
              FOUNDER MODE
            </span>
          </div>
    
          <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
            <p className="text-xs text-slate-400 font-light">
              Morning priorities
            </p>
    
            <p className="mt-1 text-xl font-normal tracking-tight text-slate-950">
              Investor update ready.
            </p>
    
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Draft weekly founder note
              </div>
    
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Follow up with 3 warm leads
              </div>
    
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Review product decisions
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">
            <iconify-icon icon="solar:rocket-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>
          </div>
    
          <div>
            <h3 className="text-xl font-normal tracking-tight text-slate-950">
              Founders &amp; Builders
            </h3>
    
            <p className="mt-3 text-sm leading-6 text-slate-500 font-light">
              Turn scattered calls, customer notes, investor updates, product ideas,
              and team decisions into clear priorities and next actions.
            </p>
    
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Momentum without mental clutter
            </div>
          </div>
        </div>
      </div>
    </article>

    {/* Card 02 — Executives / Featured Blue */}

    <article className="group relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-[2rem] border border-blue-700 shadow-[0_24px_60px_-30px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] overflow-hidden hover:-translate-y-1 transition-all duration-300">

      {/* Light Glows */}

      <div className="absolute top-[-35%] right-[-20%] w-[18rem] h-[18rem] rounded-full bg-white/25 blur-[4rem] pointer-events-none"></div>

      <div className="absolute bottom-[-40%] left-[-25%] w-[16rem] h-[16rem] rounded-full bg-sky-200/20 blur-[4rem] pointer-events-none"></div>

      {/* Visual Panel */}
      <div className="relative mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 shadow-[0_18px_42px_-24px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] min-h-[13rem]">
      
        {/* Blue depth glows */}
        <div className="absolute top-[-35%] right-[-20%] w-[14rem] h-[14rem] rounded-full bg-white/24 blur-[4rem] pointer-events-none">
        </div>
        <div className="absolute bottom-[-40%] left-[-25%] w-[14rem] h-[14rem] rounded-full bg-blue-900/16 blur-[4rem] pointer-events-none">
        </div>
      
        {/* Soft surface texture */}
        <div className="absolute inset-0 opacity-[0.12]" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)","backgroundSize":"1.35rem 1.35rem"}}>
        </div>
      
        {/* Mini UI */}
        <div className="relative p-5">
          <div className="flex items-center justify-between mb-5">
            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-100">
              EXECUTIVE BRIEF
            </span>
      
            <div className="w-9 h-9 rounded-xl bg-white/90 border border-white flex items-center justify-center shadow-[0_8px_18px_-12px_rgba(15,23,42,0.35),inset_0_1px_0_white]">
              <iconify-icon icon="solar:case-round-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-blue-500"></iconify-icon>
            </div>
          </div>
      
          <div className="space-y-3">
      
            {/* Meeting Prep */}
            <div className="rounded-[1.35rem] bg-white/95 border border-white p-4 shadow-[0_12px_28px_-18px_rgba(15,23,42,0.26),inset_0_1px_0_white]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-normal text-slate-900">
                    Meeting prep
                  </p>
                  <p className="mt-1 text-xs text-slate-400 font-light">
                    Previous decisions summarized
                  </p>
                </div>
      
                <span className="text-xs text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-2 py-1">
                  ready
                </span>
              </div>
            </div>
      
            {/* Focus Window */}
            <div className="rounded-[1.35rem] bg-blue-500/32 text-white border border-white/20 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-blue-100 font-light">
                    Protected focus
                  </p>
                  <p className="mt-1 text-2xl font-light tracking-tight text-white">
                    10:30–12:00
                  </p>
                </div>
      
                <div className="w-8 h-8 rounded-xl bg-white/90 border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">
                  <iconify-icon icon="solar:lock-keyhole-linear" style={{"strokeWidth":"1.5"}} className="text-base text-blue-500"></iconify-icon>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="relative p-6 text-white">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 shrink-0 rounded-2xl bg-white/16 border border-white/20 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">

            <iconify-icon icon="solar:user-check-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-white"></iconify-icon>

          </div>

          <div>

            <h3 className="text-xl font-normal tracking-tight text-white">

              Executives &amp; Operators

            </h3>

            <p className="mt-3 text-sm leading-6 text-blue-50/90 font-light">

              Prepare for meetings, track follow-ups, protect focus time,

              and keep decisions from disappearing across tools and conversations.

            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/16 border border-white/20 px-3 py-1.5 text-[11px] text-white">

              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>

              Your day, already organized

            </div>

          </div>

        </div>

      </div>

    </article>

    {/* Card 03 — Creators */}

    <article className="group bg-white/70 rounded-[2rem] border border-white shadow-[0_18px_44px_-28px_rgba(15,23,42,0.34),inset_0_1px_0_white] overflow-hidden hover:-translate-y-1 hover:bg-white/88 transition-all duration-300">

      {/* Visual Panel */}

      <div className="relative mx-4 mt-4 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-white to-slate-100 border border-white shadow-[0_18px_42px_-30px_rgba(15,23,42,0.28),inset_0_1px_0_white] min-h-[13rem]">

        {/* Texture + Glow */}

        <div className="absolute inset-0 opacity-[0.16]" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)","backgroundSize":"1.5rem 1.5rem"}}></div>

        <div className="absolute top-[-30%] left-[-18%] z-0 w-[14rem] h-[14rem] rounded-full bg-sky-200/42 blur-[3.75rem] pointer-events-none">
        </div>

        {/* Mini UI */}

        <div className="relative p-5">

          <div className="flex items-center justify-between mb-5">

            <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400">

              CREATOR SYSTEM

            </span>

            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

              <iconify-icon icon="solar:pen-new-square-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-blue-500"></iconify-icon>

            </div>

          </div>

          <div className="rounded-2xl bg-white text-slate-900 border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

            <p className="text-xs text-slate-400 font-light">

              Content pipeline

            </p>

            <p className="mt-1 text-xl font-normal tracking-tight text-slate-950">

              5 ideas became outlines.

            </p>

            <div className="mt-4 grid grid-cols-3 gap-2">

              <div className="rounded-xl bg-blue-50 border border-blue-100 px-3 py-2 text-center">

                <p className="text-lg font-light text-blue-600">

                  5

                </p>

                <p className="text-[10px] text-blue-500">

                  ideas

                </p>

              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-center">

                <p className="text-lg font-light text-slate-900">

                  3

                </p>

                <p className="text-[10px] text-slate-400">

                  drafts

                </p>

              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-center">

                <p className="text-lg font-light text-slate-900">

                  2

                </p>

                <p className="text-[10px] text-slate-400">

                  scripts

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

            <iconify-icon icon="solar:magic-stick-3-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>

          </div>

          <div>

            <h3 className="text-xl font-normal tracking-tight text-slate-950">

              Creators &amp; Consultants

            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

              Capture ideas, summarize research, draft replies, prepare outlines,

              and keep project context organized across every client or topic.

            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] text-blue-600">

              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>

              Ideas turned into output

            </div>

          </div>

        </div>

      </div>

    </article>

  </div>

  {/* Metrics / Outcome Strip */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  
    {/* Metric 01 */}
    <div className="bg-white/68 border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
        <iconify-icon icon="solar:widget-5-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-blue-500"></iconify-icon>
      </div>
  
      <p className="text-3xl font-normal tracking-tight text-slate-950">
        9+ <span className="text-2xl text-slate-700">signals</span>
      </p>
  
      <p className="mt-2 text-sm leading-6 text-slate-500 font-light">
        Organized from notes, meetings, messages, and documents.
      </p>
    </div>
  
    {/* Metric 02 */}
    <div className="bg-white/68 border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
        <iconify-icon icon="solar:target-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-blue-500"></iconify-icon>
      </div>
  
      <p className="text-3xl font-normal tracking-tight text-slate-950">
        3 <span className="text-2xl text-slate-700">top priorities</span>
      </p>
  
      <p className="mt-2 text-sm leading-6 text-slate-500 font-light">
        Surfaced before your day starts.
      </p>
    </div>
  
    {/* Metric 03 */}
    <div className="bg-white/68 border border-white rounded-[2rem] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.3),inset_0_1px_0_white]">
      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
        <iconify-icon icon="solar:bell-bing-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-blue-500"></iconify-icon>
      </div>
  
      <p className="text-3xl font-normal tracking-tight text-slate-950">
        5 <span className="text-2xl text-slate-700">follow-ups</span>
      </p>
  
      <p className="mt-2 text-sm leading-6 text-slate-500 font-light">
        Recovered from scattered context.
      </p>
    </div>
  
    {/* Metric 04 */}
    <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-[2rem] p-6 shadow-[0_16px_38px_-26px_rgba(59,130,246,0.28),inset_0_1px_0_white]">
      <div className="w-10 h-10 rounded-2xl bg-white border border-white flex items-center justify-center shadow-[inset_0_1px_0_white] mb-5">
        <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-blue-500"></iconify-icon>
      </div>
  
      <p className="text-3xl font-normal tracking-tight text-blue-600">
        Daily <span className="text-2xl text-slate-700">brief</span>
      </p>
  
      <p className="mt-2 text-sm leading-6 text-slate-600 font-light">
        Prepared before your first meeting starts.
      </p>
    </div>
  </div>

</section>
  );
}
