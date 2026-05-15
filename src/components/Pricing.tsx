import React from 'react';

export const Pricing = () => {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-20">

  {/* Section Intro */}
  
  <div className="text-center max-w-5xl mx-auto mb-14">
  
    <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-blue-500 mb-4">
  
      PRICING
  
    </p>
  
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05] max-w-5xl mx-auto">
  
      Choose the plan
  
      <span className="block">that fits your workflow.</span>
  
    </h2>
  
    <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light max-w-3xl mx-auto">
  
      Start simple, upgrade when your context grows, and keep the same calm workspace
  
      as your notes, projects, meetings, and priorities expand.
  
    </p>
  
  </div>

    {/* Skeuomorphic Toggle */}
    
    <div className="mb-12 flex justify-center">
    
      <label className="relative flex items-center p-1 bg-[#e2e8f0] rounded-full cursor-pointer w-[16rem] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_1px_1px_rgba(255,255,255,1)] border border-slate-300">
    
    
    
        <input type="checkbox" id="toggle-checkbox" className="sr-only" onchange="togglePricing()" />
    
        {/* Toggle Pill */}
    
        <div id="toggle-pill" className="absolute left-1 top-1 bottom-1 w-[calc(50%-0.25rem)] bg-gradient-to-b from-white to-slate-50 rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] border border-slate-200 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
    
        </div>
    
        <span id="label-mo" className="relative w-1/2 text-center text-xs text-slate-800 font-normal transition-colors duration-300 py-2.5 z-10">
    
          Monthly
    
        </span>
    
        <span id="label-yr" className="relative w-1/2 flex items-center justify-center gap-1.5 text-center text-xs text-slate-400 font-normal transition-colors duration-300 py-2.5 z-10">
    
          Annually
    
        </span>
    
      </label>
    
    </div>


  {/* Cards Container */}

  <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-5xl mx-auto">

    {/* Card 1: Starter */}

    <div className="relative w-full lg:w-1/3 rounded-[2rem] bg-[#f8fafc] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_0_rgba(255,255,255,1)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">

      <div className="p-8 h-full flex flex-col">

        {/* Header */}

        <div className="flex justify-between items-start">

          <div>

            <h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">

              Starter

            </h3>

            <div className="flex items-baseline text-slate-800">

              <span className="text-4xl font-normal tracking-tight">$</span>

              <span className="text-5xl font-normal tracking-tight price-val" data-monthly="15" data-yearly="12">15</span>

              <span className="text-xs font-light text-slate-400 ml-1">/mo</span>

            </div>

            <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">

              For individuals who want a calmer way to capture ideas, notes, and daily priorities.

            </p>

          </div>

          <div className="w-11 h-11 min-w-11 min-h-11 shrink-0 rounded-2xl bg-gradient-to-b from-white to-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.08),inset_0_1px_0_white] flex items-center justify-center text-slate-400 border border-slate-200">
            <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="block text-[22px] leading-none"></iconify-icon>
          </div>

        </div>

        {/* Expanded Body */}

        <div className="pt-6 flex flex-col gap-6 flex-1">

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <ul className="flex flex-col gap-y-3 flex-grow">

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Personal daily brief

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Voice notes and quick capture

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Basic summaries and reminders

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Private memory controls

            </li>

          </ul>

          <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 font-normal text-xs shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all">

            Get Started

          </button>

        </div>

      </div>

    </div>

    {/* Card 2: Pro */}

    <div className="relative w-full lg:w-1/3 rounded-[2rem] bg-gradient-to-b from-blue-50/50 to-[#f8fafc] border border-white shadow-[0_15px_35px_-10px_rgba(59,130,246,0.15),inset_0_2px_0_rgba(255,255,255,1)] transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.2),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">

      {/* Floating Badge */}

      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-b from-blue-400 to-blue-500 text-white text-[0.65rem] font-medium rounded-full shadow-[0_2px_6px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] border border-blue-600 tracking-wide z-10">

        Recommended

      </div>

      <div className="p-8 h-full flex flex-col">

        {/* Header */}

        <div className="flex justify-between items-start pt-2">

          <div>

            <h3 className="text-xs font-medium text-blue-500 uppercase tracking-widest mb-4">

              Pro

            </h3>

            <div className="flex items-baseline text-slate-800">

              <span className="text-4xl font-normal tracking-tight">$</span>

              <span className="text-5xl font-normal tracking-tight price-val" data-monthly="65" data-yearly="45">65</span>

              <span className="text-xs font-light text-slate-400 ml-1">/mo</span>

            </div>

            <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">

              For busy professionals who want deeper context, faster summaries, and stronger daily execution.

            </p>

          </div>

          <div className="w-11 h-11 min-w-11 min-h-11 shrink-0 rounded-2xl bg-gradient-to-b from-white to-blue-50 shadow-[0_6px_16px_rgba(59,130,246,0.12),inset_0_1px_0_white] flex items-center justify-center text-blue-500 border border-blue-100">
            <iconify-icon icon="solar:stars-linear" style={{"strokeWidth":"1.5"}} className="block text-[22px] leading-none"></iconify-icon>
          </div>

        </div>

        {/* Expanded Body */}

        <div className="pt-6 flex flex-col gap-6 flex-1">

          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

          <ul className="flex flex-col gap-y-3 flex-grow">

            <li className="flex items-center gap-3 text-xs font-light text-slate-700">

              <iconify-icon icon="solar:check-circle-linear" className="text-blue-500 text-lg"></iconify-icon>

              Everything in Starter

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-700">

              <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

              Advanced document summaries

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-700">

              <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

              Suggested replies and action recovery

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-700">

              <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

              Priority and focus window planning

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-700">

              <iconify-icon icon="solar:check-circle-bold" className="text-blue-500 text-lg"></iconify-icon>

              Extended private memory

            </li>

          </ul>

          <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 border border-blue-700 text-white font-normal text-xs shadow-[0_4px_10px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-blue-400 hover:to-blue-500 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] transition-all">

            Start Free Trial

          </button>

        </div>

      </div>

    </div>

    {/* Card 3: Team */}

    <div className="relative w-full lg:w-1/3 rounded-[2rem] bg-[#f8fafc] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_0_rgba(255,255,255,1)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),inset_0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">

      <div className="p-8 h-full flex flex-col">

        {/* Header */}

        <div className="flex justify-between items-start">

          <div>

            <h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">

              Team

            </h3>

            <div className="flex items-baseline text-slate-800">

              <span className="text-4xl font-normal tracking-tight">$</span>

              <span className="text-5xl font-normal tracking-tight price-val" data-monthly="249" data-yearly="199">249</span>

              <span className="text-xs font-light text-slate-400 ml-1">/mo</span>

            </div>

            <p className="mt-4 text-xs font-light text-slate-500 leading-relaxed">

              For teams that need shared context, stronger controls, and reliable execution across projects.

            </p>

          </div>

          <div className="w-11 h-11 min-w-11 min-h-11 shrink-0 rounded-2xl bg-gradient-to-b from-white to-slate-50 shadow-[0_6px_16px_rgba(15,23,42,0.08),inset_0_1px_0_white] flex items-center justify-center text-slate-400 border border-slate-200">
          
            <iconify-icon icon="solar:buildings-2-linear" style={{"strokeWidth":"1.5"}} className="block text-[22px] leading-none"></iconify-icon>
          
          </div>

        </div>

        {/* Expanded Body */}

        <div className="pt-6 flex flex-col gap-6 flex-1">

          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

          <ul className="flex flex-col gap-y-3 flex-grow">

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Everything in Pro

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Shared workspace memory

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Team summaries and briefings

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Admin controls and permissions

            </li>

            <li className="flex items-center gap-3 text-xs font-light text-slate-600">

              <iconify-icon icon="solar:check-circle-linear" style={{"strokeWidth":"1.5"}} className="text-blue-400 text-lg"></iconify-icon>

              Priority support

            </li>

          </ul>

          <button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 text-slate-700 font-normal text-xs shadow-[0_2px_4px_rgba(0,0,0,0.02),inset_0_1px_0_white] hover:from-slate-50 hover:to-slate-100 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] transition-all">

            Contact Sales

          </button>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}
