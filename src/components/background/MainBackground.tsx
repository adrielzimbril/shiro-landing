"use client";

import React from "react";
import { AuroraBackground } from "./aurora-background";
import { PixelGrid } from "./PixelGrid";
import LightRays from "./LightRays";

export const MainBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      {/* 1. Aurora Layer - Soft and atmospheric */}
      <div className="absolute inset-0 opacity-[0.25]">
        <AuroraBackground className="h-full w-full" />
      </div>

      {/* 2. Pixel Grid - Structural detail */}
      <PixelGrid 
        gridSize={44}
        pixelColor="#8b5cf6"
        opacity={0.08}
      />

      {/* 3. Light Rays - Dynamic WebGL rays */}
      <div className="absolute inset-0 opacity-[0.4]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#a78bfa"
          raysSpeed={0.4}
          lightSpread={0.9}
          rayLength={1.5}
          fadeDistance={0.8}
          saturation={1.2}
          followMouse={true}
          mouseInfluence={0.03}
        />
      </div>

      {/* 4. Soft Vignette - To ensure readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 pointer-events-none" />
      
      {/* 5. Additional Glow Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-violet-200/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[35vw] h-[35vw] bg-purple-100/15 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};
