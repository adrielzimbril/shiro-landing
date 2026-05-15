"use client";

import React from "react";

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">

      {/* ── AURORA MESH ─────────────────────────────────────────────── */}

      {/* Aurora blob 1 — top-left violet/blue */}
      <div
        className="absolute -top-[20%] -left-[15%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full opacity-40 will-change-transform"
        style={{
          background: "radial-gradient(ellipse at center, #a5b4fc 0%, #6366f1 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "auroraBlob1 18s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 2 — bottom-right teal/sky */}
      <div
        className="absolute -bottom-[25%] -right-[10%] w-[75vw] h-[75vw] max-w-[850px] max-h-[850px] rounded-full opacity-35 will-change-transform"
        style={{
          background: "radial-gradient(ellipse at center, #7dd3fc 0%, #38bdf8 35%, #0ea5e9 60%, transparent 75%)",
          filter: "blur(90px)",
          animation: "auroraBlob2 22s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 3 — center blue accent */}
      <div
        className="absolute top-[30%] left-[25%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full opacity-25 will-change-transform"
        style={{
          background: "radial-gradient(ellipse at center, #93c5fd 0%, #3b82f6 45%, transparent 70%)",
          filter: "blur(70px)",
          animation: "auroraBlob3 26s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 4 — top-right soft lavender */}
      <div
        className="absolute -top-[5%] right-[5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full opacity-20 will-change-transform"
        style={{
          background: "radial-gradient(ellipse at center, #c4b5fd 0%, #8b5cf6 50%, transparent 72%)",
          filter: "blur(60px)",
          animation: "auroraBlob4 20s ease-in-out infinite",
        }}
      />

      {/* ── PIXEL GRID ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.25) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── LIGHT RAYS ──────────────────────────────────────────────── */}

      {/* Light ray 1 */}
      <div
        className="absolute top-0 left-[15%] w-[2px] h-[60vh] opacity-0"
        style={{
          background: "linear-gradient(to bottom, rgba(147,197,253,0.6), transparent)",
          transform: "rotate(15deg)",
          transformOrigin: "top center",
          animation: "lightRay1 8s ease-in-out infinite",
        }}
      />

      {/* Light ray 2 */}
      <div
        className="absolute top-0 left-[40%] w-[1px] h-[50vh] opacity-0"
        style={{
          background: "linear-gradient(to bottom, rgba(165,180,252,0.5), transparent)",
          transform: "rotate(-8deg)",
          transformOrigin: "top center",
          animation: "lightRay2 11s ease-in-out infinite 2s",
        }}
      />

      {/* Light ray 3 */}
      <div
        className="absolute top-0 right-[20%] w-[2px] h-[55vh] opacity-0"
        style={{
          background: "linear-gradient(to bottom, rgba(125,211,252,0.5), transparent)",
          transform: "rotate(5deg)",
          transformOrigin: "top center",
          animation: "lightRay3 14s ease-in-out infinite 4s",
        }}
      />

      {/* ── BASE WHITE WASH (keeps readability) ─────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(248,250,252,0.55) 0%, rgba(248,250,252,0.40) 50%, rgba(248,250,252,0.55) 100%)",
        }}
      />

      {/* ── KEYFRAMES ───────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes auroraBlob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(60px, 40px) scale(1.07); }
          66%       { transform: translate(-30px, 70px) scale(0.95); }
        }
        @keyframes auroraBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(-50px, -35px) scale(1.05); }
          66%       { transform: translate(40px, -60px) scale(1.08); }
        }
        @keyframes auroraBlob3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(35px, -45px) scale(1.04); }
        }
        @keyframes auroraBlob4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%       { transform: translate(-25px, 30px) scale(1.06); }
          80%       { transform: translate(20px, -20px) scale(0.97); }
        }
        @keyframes lightRay1 {
          0%, 100% { opacity: 0; transform: rotate(15deg) scaleY(0.8); }
          40%, 60%  { opacity: 1; transform: rotate(15deg) scaleY(1); }
        }
        @keyframes lightRay2 {
          0%, 100% { opacity: 0; transform: rotate(-8deg) scaleY(0.7); }
          35%, 65%  { opacity: 0.8; transform: rotate(-8deg) scaleY(1); }
        }
        @keyframes lightRay3 {
          0%, 100% { opacity: 0; transform: rotate(5deg) scaleY(0.9); }
          45%, 55%  { opacity: 0.7; transform: rotate(5deg) scaleY(1); }
        }
      `}} />
    </div>
  );
};
