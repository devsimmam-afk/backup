import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { ArrowLeft, Bell, Calendar, Lock, Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/register")({
  validateSearch: (search: Record<string, unknown>) => ({
    event: typeof search.event === "string" ? search.event : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Register — SIMMAM 2026" },
      {
        name: "description",
        content: "Event registration for SIMMAM 2026 opens soon. Stay tuned!",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { event } = useSearch({ from: "/register" });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Particles count={30} className="!fixed inset-0 -z-10" />

      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
          style={{ background: "oklch(0.55 0.22 27)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
          style={{ background: "oklch(0.78 0.16 80)" }}
        />
      </div>

      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16">
        {/* Back link */}
        <div className="w-full max-w-xl mb-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold/70 hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO EVENTS
          </Link>
        </div>

        {/* Card */}
        <div className="relative w-full max-w-xl bg-black/60 border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          {/* Corner glow */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "oklch(0.78 0.16 80)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "oklch(0.55 0.22 27)" }}
          />

          {/* Icon */}
          <div className="relative flex justify-center mb-6">
            <div className="relative w-24 h-24 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Lock className="w-10 h-10 text-gold" />
              {/* Orbiting sparkle */}
              <Sparkles
                className="absolute -top-1 -right-1 w-5 h-5 text-gold animate-pulse"
              />
            </div>
          </div>

          {/* Title */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[10px] tracking-[0.4em] text-gold/70">SIMMAM 2026</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-black text-gradient-fire leading-tight mb-3">
            Registration
            <span className="block text-gradient-gold">Opening Soon</span>
          </h1>

          {event && (
            <div className="inline-flex items-center gap-2 mt-2 mb-5 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
              <Zap className="w-3.5 h-3.5 text-gold" />
              <span className="text-sm font-semibold text-gold">{event}</span>
            </div>
          )}

          <p className="text-foreground/60 text-sm md:text-base max-w-sm mx-auto mt-4 leading-relaxed">
            We're finalizing the registration portal. Seats will fill fast — be
            the first to know when registration goes live!
          </p>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Info chips */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-xs text-foreground/50 tracking-widest uppercase">Event Date</span>
              <span className="text-sm font-semibold text-foreground">TBA — 2026</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Bell className="w-5 h-5 text-gold" />
              <span className="text-xs text-foreground/50 tracking-widest uppercase">Status</span>
              <span className="text-sm font-semibold text-foreground">Coming Soon</span>
            </div>
          </div>

          {/* Pulse status bar */}
          <div className="flex items-center justify-center gap-3 mb-8 text-xs text-foreground/50 tracking-widest">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-75" />
              <span className="relative w-2 h-2 rounded-full bg-[var(--gold)]" />
            </span>
            REGISTRATION PORTAL LAUNCHING SOON
          </div>

          {/* Back CTA */}
          <Link
            to="/events"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold glass border border-gold/30 text-gold hover:bg-gold/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore More Events
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
