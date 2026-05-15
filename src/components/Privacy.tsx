import React from 'react';

export const Privacy = () => {
  return (
    <section id="privacy" className="max-w-7xl mx-auto px-6 py-20">

  {/* Section Header */}

  <div className="text-center max-w-5xl mx-auto mb-14">

    <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-violet-600 mb-4">

      PRIVACY &amp; CONTROL

    </p>

    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">
    
      Your assistant should
    
      <span className="block">know your context.</span>
    
      <span className="block">Not own it.</span>
    
    </h2>

    <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">

      SHIRO helps you remember, summarize, and act without turning your workspace into a black box.

      You stay in control of what is saved, used, and carried forward.

    </p>

  </div>

  {/* Light Privacy Workspace */}

  <div className="relative overflow-hidden rounded-[2.75rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)]">

    {/* Soft Hero-style Glows */}

    <div className="absolute top-[-35%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-violet-200/35 blur-[6rem] pointer-events-none">
    </div>

    <div className="absolute bottom-[-40%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-indigo-100/24 blur-[6rem] pointer-events-none">
    </div>

    {/* Subtle Dot Texture */}

    <div className="absolute inset-0 opacity-[0.16] pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)","backgroundSize":"2rem 2rem"}}>
    </div>

    <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">

      {/* Left Trust Copy */}

      <div className="flex flex-col justify-center">

        <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1.5 text-xs text-violet-600 font-light w-fit mb-7 shadow-[inset_0_1px_0_white]">

          <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>

          Private workspace memory

        </div>

        <h3 className="text-3xl md:text-4xl lg:text-[3.25rem] font-normal tracking-tight text-slate-950 leading-[1.08] max-w-2xl">
        
          Memory should feel
        
          <span className="block whitespace-nowrap">useful, not mysterious.</span>
        
        </h3>

        <p className="mt-6 text-base leading-8 text-slate-600 font-light max-w-xl">

          SHIRO keeps context helpful by making memory visible, reviewable, and adjustable.

          Save what matters, keep temporary context temporary, and reset outdated information when your work changes.

        </p>

        {/* Trust Pills */}

        <div className="mt-9 flex flex-wrap gap-3">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">

            <iconify-icon icon="solar:database-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>

            Controlled memory

          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">

            <iconify-icon icon="solar:tuning-2-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>

            Clear boundaries

          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/72 border border-white px-4 py-2 text-xs text-slate-600 font-light shadow-[0_8px_20px_-16px_rgba(15,23,42,0.24),inset_0_1px_0_white]">

            <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth":"1.5"}} className="text-base text-violet-500"></iconify-icon>

            Reset anytime

          </span>

        </div>

      </div>

      {/* Right Privacy Visual */}

      <div className="relative">

        {/* Main Privacy Panel */}

        <div className="relative isolate overflow-hidden rounded-[2.35rem] bg-gradient-to-b from-white to-slate-50 text-slate-900 border border-slate-200/80 p-5 md:p-6 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.42),0_10px_30px_-24px_rgba(15,23,42,0.24),inset_0_1px_0_white] [clip-path:inset(0_round_2.35rem)]">

          {/* Inner Light Glow */}

          <div className="absolute top-[-35%] right-[-20%] z-0 w-[22rem] h-[22rem] rounded-full bg-violet-100/45 blur-[4.5rem] pointer-events-none">
          </div>

          <div className="absolute bottom-[-40%] left-[-20%] z-0 w-[20rem] h-[20rem] rounded-full bg-indigo-50/28 blur-[4rem] pointer-events-none">
          </div>

          <div className="relative z-10">

            {/* Browser Bar */}

            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">

              <div className="flex items-center gap-2">

                <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>

                <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>

                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>

              </div>

              <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400 tracking-[-0.04em]">

                PRIVACY CENTER

              </span>

            </div>

            {/* Privacy Header */}

            <div className="flex items-start justify-between gap-4 mb-6">

              <div>

                <p className="text-xs text-slate-400 font-light mb-1">

                  Workspace memory

                </p>

                <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-950">

                  You control what SHIRO remembers.

                </h3>

              </div>

              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:lock-keyhole-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>

              </div>

            </div>

            {/* Memory Controls */}

            <div className="grid gap-3">

              {/* Control 01 */}

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">

                      <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-blue-500"></iconify-icon>

                    </div>

                    <div>

                      <p className="text-sm font-normal text-slate-900">

                        Remember project preferences

                      </p>

                      <p className="mt-1 text-xs text-slate-400 font-light">

                        Saved for future briefs and summaries

                      </p>

                    </div>

                  </div>

                  <span className="relative inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-b from-violet-500 to-indigo-600 border border-violet-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">

                    <span className="inline-block h-5 w-5 translate-x-6 rounded-full bg-white shadow-sm"></span>

                  </span>

                </div>

              </div>

              {/* Control 02 */}

              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">

                      <iconify-icon icon="solar:clock-circle-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-slate-600"></iconify-icon>

                    </div>

                    <div>

                      <p className="text-sm font-normal text-slate-900">

                        Temporary meeting context

                      </p>

                      <p className="mt-1 text-xs text-slate-400 font-light">

                        Expires after the daily brief

                      </p>

                    </div>

                  </div>

                  <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1">

                    temporary

                  </span>

                </div>

              </div>

              {/* Control 03 */}

              <div className="rounded-2xl bg-gradient-to-b from-blue-50 to-white text-slate-900 border border-blue-100 p-4 shadow-[0_12px_28px_-20px_rgba(59,130,246,0.28),inset_0_1px_0_white]">

                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-white border border-white flex items-center justify-center shadow-[inset_0_1px_0_white]">

                      <iconify-icon icon="solar:shield-warning-linear" style={{"strokeWidth":"1.5"}} className="text-lg text-blue-500"></iconify-icon>

                    </div>

                    <div>

                      <p className="text-sm font-normal text-slate-900">

                        Sensitive notes stay private

                      </p>

                      <p className="mt-1 text-xs text-slate-500 font-light">

                        Clear boundaries for personal context

                      </p>

                    </div>

                  </div>

                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]"></span>

                </div>

              </div>

            </div>

            {/* Bottom Control Bar */}

            <div className="mt-4 rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                <div>

                  <p className="text-xs font-normal text-slate-900">

                    Memory review available anytime

                  </p>

                  <p className="mt-1 text-[11px] text-slate-400 font-light">

                    Edit, remove, or reset context as your work changes.

                  </p>

                </div>

                <button className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs text-violet-600 bg-violet-50 border border-violet-100 shadow-[inset_0_1px_0_white]">

                  Review memory

                </button>

              </div>

            </div>

          </div>

        </div>

        

      </div>

    </div>

    {/* Trust Cards */}

    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 pt-4 md:pt-2">

      {/* Trust Card 01 */}

      <div className="relative overflow-hidden bg-white/78 border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>

        <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

          <iconify-icon icon="solar:database-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>

        </div>

        <h3 className="text-lg font-normal tracking-tight text-slate-950">

          Controlled memory

        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

          Decide what SHIRO should remember and what should stay temporary.

        </p>

      </div>

      {/* Trust Card 02 */}

      <div className="relative overflow-hidden bg-white/78 border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>

        <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

          <iconify-icon icon="solar:folder-security-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>

        </div>

        <h3 className="text-lg font-normal tracking-tight text-slate-950">

          Private workspace

        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

          Notes, summaries, and priorities stay organized around your context.

        </p>

      </div>

      {/* Trust Card 03 */}

      <div className="relative overflow-hidden bg-white/78 border border-white rounded-[2rem] p-6 shadow-[0_18px_42px_-30px_rgba(15,23,42,0.38),0_4px_14px_-12px_rgba(59,130,246,0.20),inset_0_1px_0_white]">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent"></div>

        <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

          <iconify-icon icon="solar:tuning-2-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>

        </div>

        <h3 className="text-lg font-normal tracking-tight text-slate-950">

          Clear boundaries

        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500 font-light">

          SHIRO works from the information you provide and the tools you connect.

        </p>

      </div>

      {/* Trust Card 04 */}

      <div className="bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-[2rem] p-6 shadow-[0_16px_38px_-26px_rgba(59,130,246,0.28),inset_0_1px_0_white]">

        <div className="w-11 h-11 rounded-2xl bg-white border border-white flex items-center justify-center mb-5 shadow-[inset_0_1px_0_white]">

          <iconify-icon icon="solar:trash-bin-minimalistic-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-blue-500"></iconify-icon>

        </div>

        <h3 className="text-lg font-normal tracking-tight text-slate-950">

          Reset anytime

        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 font-light">

          Remove outdated context when projects, priorities, or preferences change.

        </p>

      </div>

    </div>

  </div>

</section>
  );
}
