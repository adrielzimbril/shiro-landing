"use client";

import { AuroraBackground } from "@/components/background/aurora-background";
import LightRays from "@/components/background/LightRays";
import PixelBlast from "@/components/background/PixelBlast";
import GradientBlinds from "@/components/background/GradientBlinds";

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

      {/* Atmospheric Gradient Layer (GradientBlinds) - Inspired by Ashura */}
      <div className="absolute inset-x-0 top-0 h-[1000px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <GradientBlinds
          gradientColors={["#faf8ff", "#ddd6fe", "#a78bfa", "#7c3aed"]}
          angle={18}
          noise={0.15}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.8}
          spotlightSoftness={1.1}
          spotlightOpacity={0.6}
          distortAmount={0.07}
          mixBlendMode="multiply"
        />
      </div>

      {/* Aurora Background Layer - Softened for Light Mode */}
      <div className="absolute inset-0 opacity-[0.18]">
        <AuroraBackground className="h-full w-full">
          <div className="hidden" />
        </AuroraBackground>
      </div>

      {/* Premium Gradient Blobs */}
      <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-300/30 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-200/25 blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Pixel Grid Layer - Subtle and clean */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #7c3aed 1.2px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Light Rays Layer - Ashura Style */}
      <div className="absolute inset-x-0 top-0 h-screen opacity-35">
        <LightRays
          raysOrigin="top-center"
          raysColor="#a78bfa"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={1.8}
          fadeDistance={0.9}
          saturation={1.4}
          followMouse
          mouseInfluence={0.05}
          noiseAmount={0.02}
          distortion={0.06}
        />
      </div>

      {/* Subtle Pixel Blast for edge detail */}
      <div className="absolute inset-0 opacity-[0.03]">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#7c3aed"
          patternScale={2}
          patternDensity={0.15}
          enableRipples
          rippleSpeed={0.15}
          rippleThickness={0.05}
          rippleIntensityScale={0.3}
          speed={0.005}
          transparent
          edgeFade={0.5}
        />
      </div>
      
      {/* Soft Vignette/Fade to Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf8ff]/80" />
    </div>
  );
}
