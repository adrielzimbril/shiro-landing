import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { OperationsHub } from "@/components/OperationsHub";
import { Reviews } from "@/components/Reviews";
import { BackgroundScene } from "@/components/background/BackgroundScene";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-violet-100 selection:text-violet-900">
      <BackgroundScene />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Logos />
        <HowItWorks />
        <Features />
        <OperationsHub />
        <Reviews />
        <Footer />
      </div>
    </main>
  );
}
