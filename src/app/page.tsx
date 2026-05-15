import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <BackgroundEffects />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Problem />
        <Features />
        
        {/* Simple CTA Section before footer */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto rounded-[3rem] bg-gradient-to-b from-slate-900 to-slate-950 p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.3),transparent_70%)] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight mb-6">
                Ready to reclaim your focus?
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-light max-w-xl mx-auto leading-relaxed">
                Join thousands of high-performers who use Shiro to turn daily chaos into clear, effortless action.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium transition-all duration-300 shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
                  Get Started for Free
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md transition-all duration-300 border border-white/10">
                  Talk to Sales
                </button>
              </div>
              <p className="mt-8 text-xs text-slate-500 font-light">
                No credit card required. 14-day free trial on all premium plans.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
