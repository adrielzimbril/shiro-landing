"use client";

import { AuroraBackground } from "@/components/background/aurora-background";
import LightRays from "@/components/background/LightRays";
import PixelBlast from "@/components/background/PixelBlast";
import GradientBlinds from "@/components/background/GradientBlinds";
import PixelGrid from "@/components/background/PixelGrid";

export function BackgroundScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#faf8ff]">
      {/* Base Grain Effect */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric Gradient Layer (GradientBlinds) - Violet Dominant */}
      <div className="absolute inset-x-0 top-0 h-[1200px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <GradientBlinds
          gradientColors={["#faf8ff", "#ede9fe", "#ddd6fe", "#c4b5fd"]}
          angle={15}
          noise={0.1}
          blindCount={20}
          blindMinWidth={50}
          spotlightRadius={0.7}
          spotlightSoftness={1.2}
          spotlightOpacity={0.5}
          distortAmount={0.05}
          mixBlendMode="multiply"
        />
      </div>

      {/* Aurora Background Layer - Softened Violet */}
      <div className="absolute inset-0 opacity-[0.25]">
        <AuroraBackground className="h-full w-full">
          <div className="hidden" />
        </AuroraBackground>
      </div>

      {/* Premium Gradient Blobs - Purple/Violet accents */}
      <div className="absolute top-[-5%] left-[-10%] w-[70%] h-[70%] rounded-full bg-violet-400/20 blur-[130px] animate-pulse" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full bg-purple-300/15 blur-[110px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Pixel Grid Layer - Precise and clean */}
      <div className="absolute inset-0 opacity-[0.12]">
        <PixelGrid 
          dotSize={1.5}
          gap={32}
          color="#8b5cf6"
          opacity={0.8}
        />
      </div>

      {/* Light Rays Layer - Elegant focus */}
      <div className="absolute inset-x-0 top-0 h-screen opacity-40">
        <LightRays
          raysOrigin="top-center"
          raysColor="#8b5cf6"
          raysSpeed={0.4}
          lightSpread={0.7}
          rayLength={2.0}
          fadeDistance={0.8}
          saturation={1.5}
          followMouse
          mouseInfluence={0.04}
          noiseAmount={0.015}
          distortion={0.05}
        />
      </div>

      {/* Subtle Pixel Blast for motion detail */}
      <div className="absolute inset-0 opacity-[0.04]">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#7c3aed"
          patternScale={1.5}
          patternDensity={0.12}
          enableRipples
          rippleSpeed={0.12}
          rippleThickness={0.04}
          rippleIntensityScale={0.25}
          speed={0.004}
          transparent
          edgeFade={0.6}
        />
      </div>
      
      {/* Soft Vignette/Fade to Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf8ff]/90" />
    </div>
  );
}
