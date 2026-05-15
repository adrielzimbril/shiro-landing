"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PixelGridProps {
  className?: string;
  gridSize?: number;
  pixelColor?: string;
  opacity?: number;
}

export const PixelGrid = ({
  className,
  gridSize = 40,
  pixelColor = "#7c3aed",
  opacity = 0.07,
}: PixelGridProps) => {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, ${pixelColor} 1.2px, transparent 0)`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        opacity: opacity,
      }}
    />
  );
};
