// src/App.tsx
import React from "react";

export default function PaletteTest() {
  return (
    // 60% Dominant Color: Canvas Background (bg-app-bg)
    <div className="min-h-screen bg-app-bg text-app-text p-8 font-sans">
      {/* Test Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header Block */}
        <header className="border-b border-app-border pb-4">
          <h1 className="text-3xl font-extrabold text-app-text tracking-tight">
            Theme Sandbox Palette Test
          </h1>
          <p className="text-app-muted mt-1">
            Testing Tailwind v4 @theme custom design variables for a light-mode
            layout.
          </p>
        </header>

        {/* 1. PALETTE MATRIX TEST CARD */}
        <section className="bg-app-surface border border-app-border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">1. Theme Token Check</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Primary Blue */}
            <div className="p-4 rounded-xl bg-app-primary text-white font-medium flex flex-col justify-between h-24">
              <span>Primary (Blue)</span>
              <span className="text-xs opacity-80">bg-app-primary</span>
            </div>

            {/* Secondary Purple */}
            <div className="p-4 rounded-xl bg-app-secondary text-white font-medium flex flex-col justify-between h-24">
              <span>Secondary (Purple)</span>
              <span className="text-xs opacity-80">bg-app-secondary</span>
            </div>

            {/* Accent Coral */}
            <div className="p-4 rounded-xl bg-app-accent text-white font-medium flex flex-col justify-between h-24">
              <span>Accent (Coral)</span>
              <span className="text-xs opacity-80">bg-app-accent</span>
            </div>

            {/* Canvas Neutral Text */}
            <div className="p-4 rounded-xl bg-app-text text-white font-medium flex flex-col justify-between h-24">
              <span>Text (Deep Navy)</span>
              <span className="text-xs opacity-80">bg-app-text</span>
            </div>
          </div>
        </section>

        {/* 2. REAL UI COMPONENT SIMULATION */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">2. Realistic UI Application</h2>

          {/* Mock Freelancer Component Card */}
          <div className="bg-app-surface border border-app-border rounded-2xl p-6 shadow-md max-w-sm">
            {/* Profile Header Block */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                {/* Simulated Avatar Placeholder */}
                <div className="w-14 h-14 rounded-full bg-app-bg border-2 border-app-primary flex items-center justify-center font-bold text-app-primary">
                  AM
                </div>
                {/* Active Indicator Color (online) */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-app-online border-2 border-app-surface rounded-full"></span>
              </div>

              <div>
                <h3 className="font-bold text-base text-app-text">
                  Alex Morgan
                </h3>
                <p className="text-xs text-app-muted">Full Stack Developer</p>
              </div>
            </div>

            {/* Custom Tag Tokens (Using Secondary Purple) */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-50 text-app-secondary border border-purple-100">
                React-TS Expert
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-purple-50 text-app-secondary border border-purple-100">
                Tailwind Dev
              </span>
            </div>

            {/* Button Layout Actions */}
            <div className="flex space-x-3">
              {/* Primary Style Outline Action */}
              <button className="flex-1 px-4 py-2 text-xs font-semibold text-app-primary border border-app-primary rounded-xl hover:bg-blue-50 transition cursor-pointer">
                View Portfolio
              </button>

              {/* Conversion Call-to-Action (Accent Coral) */}
              <button className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-app-accent rounded-xl hover:opacity-90 shadow-sm transition cursor-pointer">
                Hire Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
