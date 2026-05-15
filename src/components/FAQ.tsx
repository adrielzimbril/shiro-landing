import React from 'react';

export const FAQ = () => {
  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-20">

  {/* Section Intro */}

  <div className="text-center max-w-3xl mx-auto mb-14">

    <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-violet-500 mb-4">

      FAQ

    </p>

    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-950 leading-[1.05]">

      Common questions.

      <span className="block">Clear answers.</span>

    </h2>

    <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 font-light">

      A few practical answers about how SHIRO captures context, protects memory,

      and helps turn scattered information into clear action.

    </p>

  </div>

  {/* FAQ Shell */}

  <div className="relative overflow-hidden rounded-[2.75rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,1)] p-4 md:p-6 lg:p-8">

    {/* Soft Background Glows */}

    <div className="absolute top-[-35%] left-[-10%] w-[34rem] h-[34rem] rounded-full bg-violet-200/35 blur-[6rem] pointer-events-none">
    </div>

    <div className="absolute bottom-[-40%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-indigo-200/22 blur-[6rem] pointer-events-none">
    </div>

    {/* Dot Texture */}

    <div className="absolute inset-0 opacity-[0.16] pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(15,23,42,0.10) 1px, transparent 0)","backgroundSize":"2rem 2rem"}}>
    </div>

    <div className="relative grid lg:grid-cols-[0.82fr_1.18fr] gap-6 lg:gap-8 items-start">

      {/* Left Support Card */}

      <div className="rounded-[2.25rem] bg-white/40 backdrop-blur-2xl border border-white p-6 md:p-8 shadow-[0_24px_60px_-35px_rgba(139,92,246,0.15),inset_0_1px_0_white] overflow-hidden relative group">

        {/* Inner Texture */}

        <div className="absolute inset-0 opacity-[0.05]" style={{"backgroundImage":"radial-gradient(circle at 1px 1px, rgba(139,92,246,0.2) 1px, transparent 0)","backgroundSize":"24px 24px"}}>
        </div>

        {/* Soft Glow */}

        <div className="absolute top-[-35%] right-[-25%] w-[18rem] h-[18rem] rounded-full bg-violet-400/10 blur-[4.5rem] pointer-events-none">
        </div>

        <div className="absolute bottom-[-35%] left-[-20%] w-[16rem] h-[16rem] rounded-full bg-indigo-200/10 blur-[4rem] pointer-events-none">
        </div>

        <div className="relative">

          <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white] mb-8">

            <iconify-icon icon="solar:question-circle-linear" style={{"strokeWidth":"1.5"}} className="text-2xl text-violet-500"></iconify-icon>

          </div>

          <p className="font-['JetBrains_Mono',monospace] text-xs font-medium tracking-[-0.04em] text-violet-500 mb-4">

            STILL DECIDING?

          </p>

          <h3 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-950 leading-[1.08]">

            Stop planning.
            <span className="block">Start executing.</span>

          </h3>

          <p className="mt-5 text-sm md:text-base leading-7 text-slate-500 font-light">

            SHIRO is designed to eliminate the mental friction that leads to procrastination.
            It architectures your day so you always know exactly what to do next.

          </p>

          <div className="mt-8 grid gap-3">

            <div className="rounded-2xl bg-white border border-violet-100 px-4 py-3 shadow-[0_4px_12px_rgba(139,92,246,0.05),inset_0_1px_0_white]">

              <div className="flex items-center gap-3">

                <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

                <span className="text-sm text-slate-600 font-normal">

                  Proactive Focus Blocking

                </span>

              </div>

            </div>

            <div className="rounded-2xl bg-white border border-violet-100 px-4 py-3 shadow-[0_4px_12px_rgba(139,92,246,0.05),inset_0_1px_0_white]">

              <div className="flex items-center gap-3">

                <iconify-icon icon="solar:document-text-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

                <span className="text-sm text-slate-600 font-normal">

                  Cognitive Load Balancing

                </span>

              </div>

            </div>

            <div className="rounded-2xl bg-white border border-violet-100 px-4 py-3 shadow-[0_4px_12px_rgba(139,92,246,0.05),inset_0_1px_0_white]">

              <div className="flex items-center gap-3">

                <iconify-icon icon="solar:restart-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

                <span className="text-sm text-slate-600 font-normal">

                  Instant Friction Removal

                </span>

              </div>

            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">

            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-violet-600 text-white text-sm font-normal border border-violet-500 shadow-lg shadow-violet-200 hover:bg-violet-500 hover:-translate-y-0.5 transition-all">

              Try SHIRO Free

              <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth":"1.5"}} className="text-lg"></iconify-icon>

            </a>

            <a href="#privacy" className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-white text-slate-600 text-sm font-normal border border-slate-200 shadow-sm hover:bg-slate-50 transition-all">

              Review Privacy

            </a>

          </div>

        </div>

      </div>

      {/* Accordion List */}

      <div className="space-y-3">

        {/* FAQ 01 */}

        <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

          <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 shrink-0 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:chat-round-like-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

              </div>

              <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                How does SHIRO help with procrastination?

              </h3>

            </div>

            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

              <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

            </div>

          </summary>

          <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

            <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

              A regular chatbot waits for prompts. SHIRO works more like a proactive operating layer:
              it architectures your day, balances your cognitive load, and surfaces exactly what
              matters so you can start from organized action instead of a blank chat box.

            </p>

          </div>

        </details>

        {/* FAQ 02 */}

        <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

          <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 shrink-0 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:microphone-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

              </div>

              <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                What can I capture with SHIRO?

              </h3>

            </div>

            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

              <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

            </div>

          </summary>

          <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

            <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

              You can capture voice notes, rough ideas, links, documents, meeting fragments,

              messages, reminders, and follow-ups. The goal is to collect useful context

              without interrupting your flow.

            </p>

          </div>

        </details>

        {/* FAQ 03 */}

        <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

          <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 shrink-0 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:devices-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

              </div>

              <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                Does SHIRO work across desktop and mobile?

              </h3>

            </div>

            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

              <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

            </div>

          </summary>

          <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

            <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

              Yes. The product story is designed around capturing from wherever you are:

              quick notes on mobile, deeper review on desktop, and a consistent daily brief

              that keeps priorities connected.

            </p>

          </div>

        </details>

        {/* FAQ 04 */}

        <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

          <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 shrink-0 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:sun-2-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

              </div>

              <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                What happens in the daily brief?

              </h3>

            </div>

            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

              <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

            </div>

          </summary>

          <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

            <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

              The daily brief gives you a clear starting point: top priorities, upcoming meetings,

              unresolved follow-ups, useful summaries, reminders, and suggested next actions.

              It helps you begin the day with direction instead of searching across tools.

            </p>

          </div>

        </details>

        {/* FAQ 05 */}

        <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

          <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 shrink-0 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:shield-check-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

              </div>

              <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                Can I delete or reset memory?

              </h3>

            </div>

            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

              <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

            </div>

          </summary>

          <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

            <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

              Yes. Memory should be reviewable, editable, and removable. As your projects,

              priorities, or preferences change, you can clean up outdated context and keep SHIRO

              aligned with how you work now.

            </p>

          </div>

        </details>

        {/* FAQ 06 */}

        <details className="group rounded-[2rem] bg-white/72 border border-white shadow-[0_14px_34px_-26px_rgba(15,23,42,0.32),inset_0_1px_0_white] overflow-hidden open:bg-white/90 transition-all">

          <summary className="cursor-pointer list-none px-5 md:px-6 py-5 flex items-center justify-between gap-5">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 shrink-0 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center shadow-[inset_0_1px_0_white]">

                <iconify-icon icon="solar:user-check-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-violet-500"></iconify-icon>

              </div>

              <h3 className="text-base md:text-lg font-normal tracking-tight text-slate-950">

                Who is SHIRO best for?

              </h3>

            </div>

            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-b from-white to-slate-50 border border-slate-200 flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05),inset_0_1px_0_white]">

              <iconify-icon icon="solar:add-circle-linear" style={{"strokeWidth":"1.5"}} className="text-xl text-slate-500 group-open:rotate-45 transition-transform"></iconify-icon>

            </div>

          </summary>

          <div className="px-5 md:px-6 pb-6 md:pl-[5.75rem]">

            <p className="text-sm md:text-base leading-7 text-slate-600 font-light">

              SHIRO is best for founders, executives, creators, consultants, and busy professionals

              who manage lots of information and need faster clarity without constantly reorganizing

              their workspace manually.

            </p>

          </div>

        </details>

      </div>

    </div>

  </div>

</section>
  );
}
