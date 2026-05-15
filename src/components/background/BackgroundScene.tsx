"use client";

import { AuroraBackground } from "@/components/background/aurora-background";
import LightRays from "@/components/background/LightRays";
import PixelBlast from "@/components/background/PixelBlast";
import GradientBlinds from "@/components/background/GradientBlinds";
import { PixelGrid } from "@/components/background/PixelGrid";

export function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#f3f3f0]">
      {/* Base Grain Effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric Gradient Layer (GradientBlinds) - Cream/Violet Blend */}
      <div className="absolute inset-x-0 top-0 h-[1200px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <GradientBlinds
          gradientColors={["#f3f3f0", "#e2e2de", "#ede9fe", "#ddd6fe"]}
          angle={15}
          noise={0.1}
          blindCount={20}
          blindMinWidth={50}
          spotlightRadius={0.7}
          spotlightSoftness={1.2}
          spotlightOpacity={0.4}
          distortAmount={0.05}
          mixBlendMode="multiply"
        />
      </div>

      {/* Aurora Background Layer - Softened Violet/Indigo */}
      <div className="absolute inset-0 opacity-[0.2]">
        <AuroraBackground className="h-full w-full">
          <div className="hidden" />
        </AuroraBackground>
      </div>

      {/* Premium Gradient Blobs - Subtle OrbitDesk accents */}
      <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] rounded-full bg-violet-400/10 blur-[130px] animate-pulse" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full bg-slate-400/10 blur-[110px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Pixel Grid Layer - Precise and clean */}
      <div className="absolute inset-0 opacity-[0.1]">
        <PixelGrid 
          dotSize={1.5}
          gap={32}
          color="#17191f"
          opacity={0.6}
        />
      </div>

      {/* Light Rays Layer - Elegant focus */}
      <div className="absolute inset-x-0 top-0 h-screen opacity-30">
        <LightRays
          raysOrigin="top-center"
          raysColor="#8b5cf6"
          raysSpeed={0.3}
          lightSpread={0.7}
          rayLength={2.0}
          fadeDistance={0.8}
          saturation={1.2}
          followMouse
          mouseInfluence={0.03}
          noiseAmount={0.01}
          distortion={0.04}
        />
      </div>

      {/* Subtle Pixel Blast for motion detail */}
      <div className="absolute inset-0 opacity-[0.03]">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#17191f"
          patternScale={1.5}
          patternDensity={0.1}
          enableRipples
          rippleSpeed={0.1}
          rippleThickness={0.03}
          rippleIntensityScale={0.2}
          speed={0.003}
          transparent
          edgeFade={0.6}
        />
      </div>
      
      {/* Soft Vignette/Fade to Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f3f3f0]/95" />
    </div>
  );
}
