import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { BuiltFor } from "@/components/BuiltFor";
import { Privacy } from "@/components/Privacy";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { BackgroundScene } from "@/components/background/BackgroundScene";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-violet-200 selection:text-violet-900 bg-[#faf8ff]">
      <BackgroundScene />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <BuiltFor />
        <Privacy />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
