import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Leaderboard } from "@/components/Leaderboard";
import { Teams } from "@/components/Teams";
import { Showcase3D } from "@/components/Showcase3D";

import { PastYears } from "@/components/PastYears";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIMMAM 2026 — SIMATS Engineering Culturals" },
      {
        name: "description",
        content:
          "SIMMAM 2026 — the national-level cultural festival of SIMATS Engineering. Teams, events, live scores, and a celebration of student excellence.",
      },
      { property: "og:title", content: "SIMMAM 2026 — SIMATS Engineering Culturals" },
      {
        property: "og:description",
        content:
          "Unleash talent. Unite departments. Celebrate excellence at SIMMAM 2026.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Suppress 404 errors from tracking/external scripts
  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('Failed to load') || 
          (event.filename && event.filename.includes('hybridaction'))) {
        event.preventDefault();
      }
    };
    window.addEventListener('error', handleError, true);
    return () => window.removeEventListener('error', handleError, true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <Particles count={20} className="!fixed inset-0 -z-10" />
        <Hero />
        <Teams />
        <Showcase3D />
        <Leaderboard />
        <PastYears />

      </main>
      <Footer />
    </div>
  );
}
