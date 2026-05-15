import React from 'react';

export const Problem = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col z-10 w-full relative gap-y-20">
    
        {/* Section Intro */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1 mb-8 shadow-[inset_0_1px_0_white]">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
            <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-tight text-violet-500 uppercase">
              The Cognitive Tax
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-normal tracking-[-0.04em] text-slate-950 leading-[0.95] max-w-5xl">
            Information isn't the problem.
            <span className="block text-slate-400 mt-2">The architecture is.</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl leading-relaxed text-slate-500 font-normal max-w-2xl">
            Scattered notes, buried emails, and endless pings aren't just noise—they're a tax on your focus. 
            Procrastination happens when the distance between <span className="text-violet-600 font-medium">intent</span> and <span className="text-violet-600 font-medium">action</span> is too wide.
          </p>
        </div>
    
        {/* Problem Cards - Refined for Premium Feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
          {[
            {
              icon: "solar:leaf-linear",
              title: "Decision Fatigue",
              desc: "Wasting your best hours just deciding where to start. Shiro clears the fog by highlighting your true north."
            },
            {
              icon: "solar:clapperboard-linear",
              title: "Signal Chaos",
              desc: "Important follow-ups lost in threads. Shiro extracts the signal and builds your day around it."
            },
            {
              icon: "solar:ghost-linear",
              title: "The Ghost Cost",
              desc: "The mental weight of 'unfinished things.' Shiro tracks the loose ends so you can truly focus."
            },
            {
              icon: "solar:link-broken-linear",
              title: "Fragmented Focus",
              desc: "Jumping between apps costs more than time—it costs flow. Shiro unifies your context in one place."
            }
          ].map((item, i) => (
            <div key={i} className="group flex flex-col gap-6 rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white p-8 shadow-[0_15px_35px_-15px_rgba(139,92,246,0.1),inset_0_1px_0_white] hover:border-violet-200 hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-500 shadow-[inset_0_1px_0_white] group-hover:scale-110 transition-transform duration-500">
                <iconify-icon icon={item.icon} style={{ strokeWidth: '1.5' }} className="text-2xl"></iconify-icon>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-sm font-light text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
    
        {/* Transformation Block - The "Architecture" Visualization */}
        <div className="overflow-hidden min-h-[600px] rounded-[3.5rem] bg-white/50 backdrop-blur-3xl text-slate-900 border border-white relative shadow-[0_50px_100px_-50px_rgba(139,92,246,0.2),inset_0_1px_0_white]">
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] min-h-[600px]">
    
            {/* Transformation Copy */}
            <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-100/50 border border-violet-200 px-3 py-1 mb-6">
                <span className="font-mono text-[10px] font-bold text-violet-600 uppercase tracking-widest">
                  The Transformation
                </span>
              </div>
    
              <h2 className="text-3xl md:text-5xl font-normal text-slate-950 tracking-tight leading-[1.1] mb-8">
                From noise to 
                <span className="block text-violet-600 italic font-serif">architecture.</span>
              </h2>
    
              <p className="text-base md:text-lg leading-relaxed text-slate-500 font-light max-w-xl">
                Shiro doesn't just "organize." It digests the complexity of your digital life and returns a structured environment where execution is the only option left.
              </p>
    
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href="#how-it-works" className="group flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-500 transition-all duration-500 text-white text-[15px] font-semibold rounded-full px-8 py-4 shadow-[0_15px_30px_-10px_rgba(139,92,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                  <span>See the Method</span>
                  <iconify-icon icon="solar:arrow-right-bold" className="text-xl group-hover:translate-x-1.5 transition-transform"></iconify-icon>
                </a>
                <a href="#pricing" className="group flex items-center justify-center gap-3 bg-white/60 hover:bg-white transition-all duration-500 text-slate-900 text-[15px] font-semibold rounded-full px-8 py-4 border border-violet-100 shadow-[inset_0_1px_1px_white] hover:-translate-y-1">
                  <span>Start Building</span>
                </a>
              </div>
            </div>
    
            {/* The Pipeline Visual - Refined with better Glassmorphism */}
            <div className="relative flex items-center justify-center p-6 md:p-12 lg:pr-20">
              
              {/* Outer Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-violet-400/10 blur-[6rem] rounded-full pointer-events-none" />
              <div className="relative w-full max-w-2xl rounded-[3rem] bg-white/[0.4] border border-white p-4 md:p-6 shadow-[inset_0_1px_1px_white,0_40px_80px_-40px_rgba(139,92,246,0.2)] backdrop-blur-2xl">
    
                <div className="rounded-[2.5rem] bg-white/[0.8] text-slate-900 border border-white overflow-hidden shadow-[0_20px_60px_-30px_rgba(139,92,246,0.25),inset_0_1px_1px_white]">
    
                  {/* Panel Top Bar */}
                  <div className="px-6 py-5 flex items-center justify-between border-b border-violet-100/40 bg-white/40">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400/30" />
                      <span className="w-2 h-2 rounded-full bg-amber-400/30" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/30" />
                    </div>
                    <div className="font-mono text-[10px] text-violet-500 font-bold tracking-widest uppercase">
                      Synthesis Pipeline
                    </div>
                  </div>
    
                  <div className="p-6 md:p-8">
                    {/* Pipeline Grid */}
                    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
    
                      {/* Inputs Column */}
                      <div className="space-y-4">
                        <p className="font-mono text-[9px] text-slate-400 uppercase tracking-[0.2em] mb-2 px-1">Raw Inputs</p>
                        
                        {[
                          { icon: "solar:microphone-bold", title: "Voice Notes", sub: "Fragmented ideas" },
                          { icon: "solar:letter-bold", title: "Slack/Email", sub: "Buried actions" },
                          { icon: "solar:document-bold", title: "Docs/Briefs", sub: "Heavy context" }
                        ].map((input, idx) => (
                          <div key={idx} className="flex items-center gap-3 rounded-2xl bg-white border border-violet-50 p-3 shadow-[0_4px_12px_rgba(0,0,0,0.02),inset_0_1px_0_white] hover:border-violet-200 transition-colors">
                            <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center text-violet-500 flex-shrink-0">
                              <iconify-icon icon={input.icon} className="text-lg"></iconify-icon>
                            </div>
                            <div>
                              <p className="text-[11px] font-bold text-slate-900">{input.title}</p>
                              <p className="text-[10px] text-slate-400 font-medium">{input.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
    
                      {/* Core Logic Visualizer */}
                      <div className="hidden md:flex flex-col items-center justify-center gap-4 py-4">
                        <div className="h-full w-px bg-gradient-to-b from-transparent via-violet-200/50 to-transparent" />
                        <div className="w-14 h-14 rounded-2xl bg-violet-600 border border-violet-400 flex items-center justify-center text-white shadow-[0_20px_40px_-10px_rgba(139,92,246,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] animate-pulse">
                          <iconify-icon icon="solar:magic-stick-bold" className="text-3xl"></iconify-icon>
                        </div>
                        <div className="h-full w-px bg-gradient-to-b from-transparent via-violet-200/50 to-transparent" />
                      </div>
    
                      {/* Outputs Column */}
                      <div className="space-y-4">
                        <p className="font-mono text-[9px] text-violet-500 uppercase tracking-[0.2em] mb-2 px-1">Architected Output</p>
                        
                        <div className="rounded-2xl bg-violet-50/50 border border-violet-100 p-4 shadow-[inset_0_1px_0_white]">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-900 bg-white/60 px-3 py-2 rounded-xl border border-white">
                              <span>Priorities Ranked</span>
                              <span className="text-violet-600">3</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] font-bold text-slate-900 bg-white/60 px-3 py-2 rounded-xl border border-white">
                              <span>Action Recovered</span>
                              <span className="text-violet-600">12</span>
                            </div>
                          </div>
                          
                          <div className="mt-5 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-4 shadow-xl shadow-violet-200">
                            <div className="flex items-center gap-3 mb-2">
                              <iconify-icon icon="solar:calendar-date-bold" className="text-xl text-white"></iconify-icon>
                              <p className="text-[11px] font-bold text-white uppercase tracking-wider">The Plan</p>
                            </div>
                            <p className="text-[10px] text-violet-100 leading-relaxed font-medium">
                              Optimal focus windows secured. Ready to execute.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Status Widgets */}
                <div className="absolute -right-4 top-24 rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),inset_0_1px_0_white] hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <iconify-icon icon="solar:check-circle-bold" className="text-lg"></iconify-icon>
                    </div>
                    <p className="text-[11px] text-slate-600 font-bold">14 Pings Silenced</p>
                  </div>
                </div>
                <div className="absolute -left-8 bottom-12 rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),inset_0_1px_0_white] hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center text-violet-500">
                      <iconify-icon icon="solar:bolt-bold" className="text-lg"></iconify-icon>
                    </div>
                    <p className="text-[11px] text-slate-600 font-bold">Flow state secured</p>
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
