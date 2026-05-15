import React from 'react';

export const Problem = () => {
  return (
        <section className="max-w-7xl mx-auto px-6 py-20">
    
      <div className="flex flex-col z-10 w-full relative gap-y-16">
    
        {/* Section Intro */}
    
        <div className="max-w-3xl">
    
          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">
    
            WHY IT MATTERS
    
          </p>
    
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl">
            Your work does not
            <span className="block text-slate-950">arrive neatly.</span>
          </h2>
    
          <p className="mt-5 text-base md:text-lg leading-8 text-slate-600 font-light max-w-2xl">
    
            It arrives as notes, messages, meetings, documents, half-ideas, and forgotten follow-ups.
    
            SHIRO turns that scattered input into priorities, summaries, reminders, and next actions you can actually use.
    
          </p>
    
        </div>
    
        {/* Problem Cards */}
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    
          {/* Problem Card 01 */}
    
          <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:lightbulb-bolt-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
    
            </div>
    
            <div>
    
              <h3 className="text-lg font-normal tracking-tight text-slate-950">
    
                Ideas disappear
    
              </h3>
    
              <p className="mt-3 leading-7 text-sm font-light text-slate-600">
    
                Capture rough thoughts before they vanish between calls, commutes, and context switches.
    
              </p>
    
            </div>
    
          </div>
    
          {/* Problem Card 02 */}
    
          <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:widget-5-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
    
            </div>
    
            <div>
    
              <h3 className="text-lg font-normal tracking-tight text-slate-950">
    
                Tasks scatter
    
              </h3>
    
              <p className="mt-3 leading-7 text-sm font-light text-slate-600">
    
                Turn notes, messages, and meeting details into clear next steps, reminders, and follow-ups.
    
              </p>
    
            </div>
    
          </div>
    
          {/* Problem Card 03 */}
    
          <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:folder-with-files-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
    
            </div>
    
            <div>
    
              <h3 className="text-lg font-normal tracking-tight text-slate-950">
    
                Context piles up
    
              </h3>
    
              <p className="mt-3 leading-7 text-sm font-light text-slate-600">
    
                Summarize long notes, emails, documents, and links so you can understand what matters quickly.
    
              </p>
    
            </div>
    
          </div>
    
          {/* Problem Card 04 */}
    
          <div className="group flex flex-col gap-4 rounded-[2rem] bg-white/62 border border-white p-6 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.24),inset_0_1px_0_white] hover:-translate-y-1 hover:bg-white/82 transition-all duration-300">
    
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_0_1px_0_white]">
    
              <iconify-icon icon="solar:clock-circle-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
    
            </div>
    
            <div>
    
              <h3 className="text-lg font-normal tracking-tight text-slate-950">
    
                Organizing takes over
    
              </h3>
    
              <p className="mt-3 leading-7 text-sm font-light text-slate-600">
    
                Spend less time sorting work and more time deciding, creating, replying, and shipping.
    
              </p>
    
            </div>
    
          </div>
    
        </div>
    
        {/* Transformation Block */}
    
        <div className="overflow-hidden min-h-[560px] lg:min-h-[620px] rounded-[2.75rem] bg-gradient-to-b from-[#172033] to-[#101827] text-white border border-white/10 relative shadow-[0_40px_90px_-45px_rgba(15,23,42,0.78),inset_0_1px_0_rgba(255,255,255,0.14)]">
    
          {/* Dark Block Background Texture */}
    
          <div className="absolute inset-0 opacity-[0.10]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
    
          <div className="absolute top-[-30%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-blue-400/18 blur-[6rem]"></div>
    
          <div className="absolute bottom-[-25%] left-[-12%] w-[28rem] h-[28rem] rounded-full bg-sky-300/10 blur-[5rem]"></div>
    
          <div className="absolute top-[20%] left-[42%] w-[18rem] h-[18rem] rounded-full bg-white/5 blur-[4rem]"></div>
    
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] min-h-[560px] lg:min-h-[620px] h-full">
    
            {/* Transformation Copy */}
    
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
    
              <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-300 mb-4">
    
                THE TRANSFORMATION
    
              </p>
    
              <h2 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-light text-white tracking-tight mb-6">
    
                From mental clutter to a clear daily operating system.
    
              </h2>
    
              <p className="text-base leading-8 text-slate-300 font-light max-w-xl">
    
                SHIRO reads the signals across your day, connects what matters, and turns scattered input into priorities,
    
                summaries, follow-ups, and next actions.
    
              </p>
    
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
    
                <a href="#workflow" className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-100 transition-all text-slate-900 text-sm font-normal rounded-full px-6 py-3 w-fit shadow-[inset_0_1px_0_white] hover:-translate-y-0.5">
    
                  <span>Explore Workflow</span>
    
                  <iconify-icon icon="solar:arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
    
                </a>
    
                <a href="#pricing" className="group flex items-center justify-center gap-3 bg-white/[0.07] hover:bg-white/[0.1] transition-all text-white text-sm font-normal rounded-full px-6 py-3 w-fit border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
    
                  <span>Try SHIRO Free</span>
    
                </a>
    
              </div>
    
              <div className="mt-12 pt-8 border-t border-white/10">
    
                <p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-['JetBrains_Mono',monospace]">
    
                  Built for focused work
    
                </p>
    
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
    
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
    
                    Founders
    
                  </span>
    
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
    
                    Executives
    
                  </span>
    
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
    
                    Creators
    
                  </span>
    
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
    
                    Consultants
    
                  </span>
    
                </div>
    
              </div>
    
            </div>
    
            {/* Input-to-Action Pipeline Visual */}
    
            <div className="relative flex items-center justify-center p-6 md:p-10 lg:pr-14">
    
              {/* Pipeline Shell */}
    
              <div className="relative w-full max-w-2xl rounded-[2.25rem] bg-white/[0.065] border border-white/10 p-4 md:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_70px_-40px_rgba(0,0,0,0.72)] backdrop-blur-sm">
    
                {/* Inner Light Panel */}
    
                <div className="rounded-[1.85rem] bg-gradient-to-b from-white to-slate-100 text-slate-900 border border-white/80 overflow-hidden shadow-[0_18px_50px_-30px_rgba(0,0,0,0.55),inset_0_1px_0_white]">
    
                  {/* Panel Top Bar */}
    
                  <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200/80">
    
                    <div className="flex items-center gap-2">
    
                      <span className="w-2.5 h-2.5 rounded-full bg-red-300"></span>
    
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-300"></span>
    
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300"></span>
    
                    </div>
    
                    <div className="font-['JetBrains_Mono',monospace] text-xs text-slate-400 tracking-[-0.05em]">
    
                      INPUT → ACTION
    
                    </div>
    
                  </div>
    
                  {/* Pipeline Content */}
    
                  <div className="p-5 md:p-6">
    
                    {/* Pipeline Header */}
    
                    <div className="flex items-start justify-between gap-4 mb-6">
    
                      <div>
    
                        <p className="text-xs text-slate-400 font-light mb-1">
    
                          SHIRO has organized your workspace
    
                        </p>
    
                        <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-950">
    
                          Everything became actionable.
    
                        </h3>
    
                      </div>
    
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-[inset_0_1px_0_white]">
    
                        <iconify-icon icon="solar:stars-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
    
                      </div>
    
                    </div>
    
                    {/* Pipeline Grid */}
    
                    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch">
    
                      {/* Inputs Column */}
    
                      <div className="rounded-[1.5rem] bg-slate-50 border border-slate-200 p-4 shadow-[inset_0_1px_0_white]">
    
                        <p className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-400 uppercase tracking-widest mb-4">
    
                          Scattered inputs
    
                        </p>
    
                        <div className="space-y-3">
    
                          {/* Input 01 */}
    
                          <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
    
                            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
    
                              <iconify-icon icon="solar:microphone-linear" style={{ strokeWidth: '1.5' }} className="text-base text-blue-500"></iconify-icon>
    
                            </div>
    
                            <div>
    
                              <p className="text-xs font-normal text-slate-900">
    
                                Voice note
    
                              </p>
    
                              <p className="text-[11px] text-slate-400 font-light">
    
                                Rough idea captured
    
                              </p>
    
                            </div>
    
                          </div>
    
                          {/* Input 02 */}
    
                          <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
    
                            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
    
                              <iconify-icon icon="solar:letter-linear" style={{ strokeWidth: '1.5' }} className="text-base text-blue-500"></iconify-icon>
    
                            </div>
    
                            <div>
    
                              <p className="text-xs font-normal text-slate-900">
    
                                Messages
    
                              </p>
    
                              <p className="text-[11px] text-slate-400 font-light">
    
                                Follow-ups buried
    
                              </p>
    
                            </div>
    
                          </div>
    
                          {/* Input 03 */}
    
                          <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
    
                            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
    
                              <iconify-icon icon="solar:document-text-linear" style={{ strokeWidth: '1.5' }} className="text-base text-blue-500"></iconify-icon>
    
                            </div>
    
                            <div>
    
                              <p className="text-xs font-normal text-slate-900">
    
                                Documents
    
                              </p>
    
                              <p className="text-[11px] text-slate-400 font-light">
    
                                Too much context
    
                              </p>
    
                            </div>
    
                          </div>
    
                          {/* Input 04 */}
    
                          <div className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 px-3 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
    
                            <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
    
                              <iconify-icon icon="solar:calendar-mark-linear" style={{ strokeWidth: '1.5' }} className="text-base text-slate-600"></iconify-icon>
    
                            </div>
    
                            <div>
    
                              <p className="text-xs font-normal text-slate-900">
    
                                Meetings
    
                              </p>
    
                              <p className="text-[11px] text-slate-400 font-light">
    
                                Decisions scattered
    
                              </p>
    
                            </div>
    
                          </div>
    
                        </div>
    
                      </div>
    
                      {/* Connector Column */}
    
                      <div className="hidden md:flex flex-col items-center justify-center gap-3">
    
                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
    
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 flex items-center justify-center text-white shadow-[0_10px_24px_rgba(59,130,246,0.28),inset_0_1px_0_rgba(255,255,255,0.35)]">
    
                          <iconify-icon icon="solar:alt-arrow-right-linear" style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
    
                        </div>
    
                        <div className="h-16 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
    
                      </div>
    
                      {/* Outputs Column */}
    
                      <div className="rounded-[1.5rem] bg-gradient-to-b from-[#172033] to-[#101827] text-white border border-white/10 p-4 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.65),inset_0_1px_0_rgba(255,255,255,0.1)]">
    
                        <p className="font-['JetBrains_Mono',monospace] text-[10px] text-blue-300 uppercase tracking-widest mb-4">
    
                          Clear action
    
                        </p>
    
                        <div className="space-y-3">
    
                          <div className="rounded-2xl bg-white/8 border border-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
    
                            <div className="flex items-center justify-between gap-3">
    
                              <div className="flex items-center gap-3">
    
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
    
                                <p className="text-xs font-normal text-white">
    
                                  Priorities ranked
    
                                </p>
    
                              </div>
    
                              <span className="text-[10px] text-blue-200 bg-blue-400/10 border border-blue-300/10 rounded-full px-2 py-1">
    
                                3
    
                              </span>
    
                            </div>
    
                          </div>
    
                          <div className="rounded-2xl bg-white/8 border border-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
    
                            <div className="flex items-center justify-between gap-3">
    
                              <div className="flex items-center gap-3">
    
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
    
                                <p className="text-xs font-normal text-white">
    
                                  Follow-ups found
    
                                </p>
    
                              </div>
    
                              <span className="text-[10px] text-blue-200 bg-blue-400/10 border border-blue-300/10 rounded-full px-2 py-1">
    
                                5
    
                              </span>
    
                            </div>
    
                          </div>
    
                          <div className="rounded-2xl bg-white/8 border border-white/10 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
    
                            <div className="flex items-center justify-between gap-3">
    
                              <div className="flex items-center gap-3">
    
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
    
                                <p className="text-xs font-normal text-white">
    
                                  Summaries ready
    
                                </p>
    
                              </div>
    
                              <span className="text-[10px] text-blue-200 bg-blue-400/10 border border-blue-300/10 rounded-full px-2 py-1">
    
                                4
    
                              </span>
    
                            </div>
    
                          </div>
    
                          <div className="rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 border border-blue-700 px-3 py-3 shadow-[0_10px_22px_-14px_rgba(59,130,246,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]">
    
                            <div className="flex items-center gap-3">
    
                              <iconify-icon icon="solar:checklist-minimalistic-linear" style={{ strokeWidth: '1.5' }} className="text-lg text-white"></iconify-icon>
    
                              <div>
    
                                <p className="text-xs font-normal text-white">
    
                                  Daily brief generated
    
                                </p>
    
                                <p className="text-[11px] text-blue-100 font-light mt-0.5">
    
                                  Ready before your first meeting
    
                                </p>
    
                              </div>
    
                            </div>
    
                          </div>
    
                        </div>
    
                      </div>
    
                    </div>
    
                    {/* Bottom Summary Bar */}
    
                    <div className="mt-4 rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.03),inset_0_1px_0_white]">
    
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    
                        <div className="flex items-center gap-3">
    
                          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
    
                            <iconify-icon icon="solar:shield-check-linear" style={{ strokeWidth: '1.5' }} className="text-base text-blue-500"></iconify-icon>
    
                          </div>
    
                          <div>
    
                            <p className="text-xs font-normal text-slate-900">
    
                              Private memory used
    
                            </p>
    
                            <p className="text-[11px] text-slate-400 font-light">
    
                              Only the context you control
    
                            </p>
    
                          </div>
    
                        </div>
    
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
    
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
    
                          9 actions organized
    
                        </div>
    
                      </div>
    
                    </div>
    
                  </div>
    
                </div>
    
                {/* Floating Mini Status Card */}
    
                <div className="hidden md:block absolute -right-3 top-16 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]">
    
                  <div className="flex items-center gap-3">
    
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
    
                      <iconify-icon icon="solar:bolt-circle-linear" style={{ strokeWidth: '1.5' }} className="text-lg text-blue-500"></iconify-icon>
    
                    </div>
    
                    <div>
    
                      <p className="text-xs text-slate-900 font-normal">
    
                        Signal detected
    
                      </p>
    
                      <p className="text-xs text-slate-400 font-light">
    
                        Follow-up hidden in email
    
                      </p>
    
                    </div>
    
                  </div>
    
                </div>
    
                {/* Floating Mini Status Card */}
    
                <div className="hidden md:block absolute -left-6 -bottom-4 rounded-2xl bg-white/90 backdrop-blur border border-white px-4 py-3 shadow-[0_18px_38px_-20px_rgba(15,23,42,0.45),inset_0_1px_0_white]">
    
                  <div className="flex items-center gap-3">
    
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
    
                      <iconify-icon icon="solar:check-circle-linear" style={{ strokeWidth: '1.5' }} className="text-lg text-blue-500"></iconify-icon>
    
                    </div>
    
                    <div>
    
                      <p className="text-xs text-slate-900 font-normal">
    
                        Clarity created
    
                      </p>
    
                      <p className="text-xs text-slate-400 font-light">
    
                        Priorities, replies, tasks
    
                      </p>
    
                    </div>
    
                  </div>
    
                </div>
    
              </div>
    
            </div>
    
            {/* End Pipeline Visual */}
    
          </div>
    
        </div>
    
      </div>
    
    </section>

  );
};
