import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { DashboardLiveScores } from "@/components/DashboardLiveScores";

export const Route = createFileRoute("/live-scores")({
  head: () => ({
    meta: [
      { title: "Dashboard & Live Scores — SIMMAM 2026" },
      {
        name: "description",
        content:
          "Track the SIMMAM 2026 dashboard and live house rankings in one dynamic experience.",
      },
      { property: "og:title", content: "SIMMAM Dashboard & Live Scores" },
      {
        property: "og:description",
        content: "Real-time house momentum, rankings and festival metrics.",
      },
    ],
  }),
  component: DashboardLivePage,
});

function DashboardLivePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Particles count={20} className="!fixed inset-0 -z-10" />

      <main className="relative pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold/80 hover:text-gold"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>
        </div>

        <DashboardLiveScores />
      </main>

      <Footer />
    </div>
  );
}
