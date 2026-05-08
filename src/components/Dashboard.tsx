import { Award, Building2, Crown, Flame, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Counter } from "./Counter";
import { Tilt3D } from "./Tilt3D";

type Stat = {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  hint: string;
  accent: "gold" | "red";
};

import { allEvents } from "@/lib/eventsData";

const stats: Stat[] = [
  { icon: Users, label: "Total Teams", value: 6, hint: "Agniyas, Dhronas, Marutas, Rudras, Suryas, Vajras", accent: "gold" },
  { icon: Flame, label: "Total Participants", value: 0, hint: "Across all events", accent: "red" },
  { icon: Trophy, label: "Total Events", value: allEvents.length, hint: "Original baseline: 150 events", accent: "gold" },
  { icon: Building2, label: "Festival Days", value: 3, hint: "Three days. One legend.", accent: "red" },
  { icon: Crown, label: "2025 Champion", value: 1, suffix: " — Agniyas", hint: "Last year's overall winners", accent: "gold" },
  { icon: Award, label: "Highest Score", value: 1845, hint: "Agniyas — SIMMAM 2025", accent: "red" },
];

export function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Festival Dashboard"
          title="Live by the Numbers"
          subtitle="A real-time pulse of SIMMAM 2026 — teams, talents, and total intensity."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <Tilt3D key={s.label} max={9}>
              <div
                className="group relative glass rounded-2xl p-6 hover-lift overflow-hidden animate-rise-in h-full"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* corner glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition"
                style={{
                  background:
                    s.accent === "gold"
                      ? "oklch(0.78 0.16 80 / 0.7)"
                      : "oklch(0.55 0.22 27 / 0.7)",
                }}
              />
              <div className="relative flex items-start justify-between">
                <div
                  className={`p-3 rounded-xl ${
                    s.accent === "gold"
                      ? "bg-gold/10 text-gold neon-border"
                      : "bg-[var(--crimson)]/15 text-crimson neon-border-red"
                  }`}
                >
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-foreground/50">
                  LIVE
                </span>
              </div>

              <div className="relative mt-6">
                <div className="font-display text-5xl font-bold text-gradient-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-base text-foreground/90 font-medium">
                  {s.label}
                </div>
                <div className="text-xs text-foreground/55 mt-1">{s.hint}</div>
              </div>

              {/* progress sparkline */}
              <div className="relative mt-5 h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "78%",
                    background:
                      s.accent === "gold"
                        ? "linear-gradient(90deg, var(--gold), var(--crimson))"
                        : "linear-gradient(90deg, var(--crimson-glow), var(--gold))",
                    boxShadow: "0 0 12px var(--gold)",
                  }}
                />
              </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
        <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
          {eyebrow.toUpperCase()}
        </span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient-fire">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-foreground/70 text-base md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
