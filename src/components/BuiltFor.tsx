import React from 'react';

export const BuiltFor = () => {
  return (
    <section id="built-for" className="max-w-7xl mx-auto px-6 py-24">
      {/* Section Header */}
      <div className="text-center max-w-5xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-100 px-3 py-1 mb-6 shadow-[inset_0_1px_0_white]">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
          <p className="font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-tight text-violet-500 uppercase">
            BUILT FOR
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-[-0.04em] text-slate-950 leading-[0.95] max-w-5xl mx-auto">
          Built for people
          <span className="block text-slate-400">with too much context.</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl leading-8 text-slate-500 font-light max-w-3xl mx-auto">
          SHIRO is designed for busy minds: people who move between meetings,
          messages, ideas, documents, and decisions all day.
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="bg-violet-600 text-white rounded-full px-8 py-4 text-sm font-medium shadow-[0_20px_40px_-10px_rgba(139,92,246,0.3)] hover:bg-violet-500 transition-all hover:-translate-y-0.5">
            Try SHIRO Free
          </a>
          <a href="#workflow" className="bg-white text-slate-900 border border-slate-200 rounded-full px-8 py-4 text-sm font-medium hover:bg-slate-50 transition-all">
            Explore Workflow
          </a>
        </div>
      </div>

      {/* Use Case Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Founders & Builders",
            desc: "Turn scattered calls, customer notes, and team decisions into clear priorities.",
            tag: "Momentum",
            icon: "solar:rocket-linear",
            ui: (
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                    <span className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
                  <span className="font-['JetBrains_Mono',monospace] text-[9px] text-slate-400">PRIORITIES</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                    <div className="w-4 h-1 bg-violet-400 rounded-full mb-2" />
                    <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                    <div className="w-2/3 h-1.5 bg-slate-100 rounded-full mt-1.5" />
                  </div>
                  <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm opacity-60">
                    <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Executives & Operators",
            desc: "Prepare for meetings and protect focus time without losing track of decisions.",
            tag: "Efficiency",
            icon: "solar:user-check-linear",
            featured: true,
            ui: (
              <div className="p-5 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono',monospace] text-[9px] text-violet-200">DAILY BRIEF</span>
                  <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                    <iconify-icon icon="solar:star-linear" className="text-xs"></iconify-icon>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <p className="text-xs text-violet-100 mb-1">Focus Window</p>
                  <p className="text-xl font-light">10:30–12:00</p>
                </div>
              </div>
            )
          },
          {
            title: "Creators & Consultants",
            desc: "Capture ideas and summarize research across multiple client projects.",
            tag: "Organization",
            icon: "solar:magic-stick-3-linear",
            ui: (
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono',monospace] text-[9px] text-slate-400">PIPELINE</span>
                  <iconify-icon icon="solar:folder-linear" className="text-slate-300"></iconify-icon>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-violet-50 border border-violet-100 p-3 rounded-xl text-center">
                    <p className="text-lg font-light text-violet-600">12</p>
                    <p className="text-[8px] text-violet-400">IDEAS</p>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                    <p className="text-lg font-light text-slate-600">4</p>
                    <p className="text-[8px] text-slate-400">DRAFTS</p>
                  </div>
                </div>
              </div>
            )
          }
        ].map((item, i) => (
          <article 
            key={i} 
            className={`group relative rounded-[3rem] overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
              item.featured 
                ? "bg-violet-600 border-violet-700 shadow-[0_40px_80px_-20px_rgba(139,92,246,0.4)]" 
                : "bg-white border-slate-100 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.1)] hover:bg-slate-50/50"
            }`}
          >
            {/* Visual Header */}
            <div className={`m-4 rounded-[2rem] h-48 border overflow-hidden relative ${
              item.featured ? "bg-violet-500/50 border-white/20" : "bg-slate-50 border-slate-100"
            }`}>
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
              {item.ui}
            </div>

            {/* Content */}
            <div className="p-8 pt-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                item.featured ? "bg-white/10 border border-white/20" : "bg-violet-50 border border-violet-100"
              }`}>
                <iconify-icon 
                  icon={item.icon} 
                  className={`text-2xl ${item.featured ? "text-white" : "text-violet-500"}`}
                />
              </div>
              <h3 className={`text-2xl font-normal tracking-tight mb-4 ${item.featured ? "text-white" : "text-slate-950"}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 font-light ${item.featured ? "text-violet-100" : "text-slate-500"}`}>
                {item.desc}
              </p>
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-medium ${
                item.featured ? "bg-white/10 text-white border border-white/20" : "bg-violet-50 text-violet-600 border border-violet-100"
              }`}>
                <span className={`w-1 h-1 rounded-full ${item.featured ? "bg-white" : "bg-violet-500"}`} />
                {item.tag}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Metrics Row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { val: "9+", label: "Daily Signals", sub: "Processed automatically" },
          { val: "3", label: "Top Priorities", sub: "Surfaced by 8:00 AM" },
          { val: "5", label: "Follow-ups", sub: "Recovered from context" },
          { val: "1", label: "Daily Brief", sub: "Your entire day summarized" }
        ].map((m, i) => (
          <div key={i} className="bg-white/[0.4] border border-white backdrop-blur-xl rounded-[2rem] p-6 text-center shadow-[inset_0_1px_0_white]">
            <p className="text-3xl font-normal text-slate-950 mb-1">{m.val}</p>
            <p className="text-xs font-medium text-violet-600 uppercase tracking-wider mb-2">{m.label}</p>
            <p className="text-[10px] text-slate-400 font-light leading-tight">{m.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
