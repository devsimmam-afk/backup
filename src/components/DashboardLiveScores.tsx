import { useEffect, useState } from "react";
import { Award, Building2, Crown, Flame, Trophy, Users, Activity, TrendingUp, Sparkles, CloudLightning, Sun, BookOpen, Wind, Zap, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Counter } from "./Counter";
import { Tilt3D } from "./Tilt3D";
import { SectionHeader } from "./Dashboard";
import { houses } from "../lib/houses";

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

// House element icons
const houseElementIcons: { [key: string]: React.ElementType } = {
  "Storm": CloudLightning,
  "Sun": Sun,
  "Wisdom": BookOpen,
  "Fire": Flame,
  "Wind": Wind,
  "Thunder": Zap,
};

type HouseScore = {
  name: string;
  short: string;
  element: string;
  points: number;
  color: string;
  accent: string;
  gradient: string;
  breakdown: { winners: number; runners: number; participation: number };
};

export function DashboardLiveScores() {
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);

  const [houseScores, setHouseScores] = useState<HouseScore[]>(() => 
    houses
      .map((h) => ({
        name: h.name,
        short: h.short,
        element: h.element,
        points: h.points2025,
        color: h.accent,
        accent: h.accent,
        gradient: h.gradient,
        breakdown: { ...h.breakdown },
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  );

  const max = Math.max(...houseScores.map((s) => s.points));
  const selectedHouseData = houseScores.find((h) => h.name === selectedHouse);

  return (
    <section id="dashboard" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Festival Dashboard & Live Scores"
          title="Live by the Numbers"
          subtitle="A real-time pulse of SIMMAM 2026 — teams, talents, total intensity, and house rankings."
        />

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16">
          {stats.map((s, i) => (
            <Tilt3D key={s.label} max={9}>
              <div
                className="group relative bg-black/60 border border-white/10 rounded-2xl p-6 hover-lift overflow-hidden animate-rise-in h-full"
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

        {/* Live Scores Section with House Logos */}
        <div className="bg-black/60 border border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--crimson)]/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--gold)]/30 blur-3xl" />

            <div className="relative flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-red-500 animate-ping" />
                  <span className="relative w-2.5 h-2.5 rounded-full bg-red-500" />
                </span>
                <span className="text-xs tracking-[0.3em] text-gold/80">LIVE • HOUSE RANKINGS</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-foreground/60">
                <span className="inline-flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-gold" /> Auto-sync
                </span>
                <span className="inline-flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-gold" /> Rising
                </span>
              </div>
            </div>

            <div className="relative space-y-4">
              {houseScores.map((house, i) => (
                <div 
                  key={house.name} 
                  className={`relative p-2 -mx-2 rounded-xl transition-colors cursor-pointer ${selectedHouse === house.name ? 'bg-white/10' : 'hover:bg-white/5'}`}
                  onClick={() => setSelectedHouse(house.name)}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg text-gold w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border-2"
                        style={{
                          backgroundColor: `${house.accent}20`,
                          borderColor: house.accent,
                          color: house.accent,
                        }}
                      >
                        {houseElementIcons[house.element] ? (
                          (() => {
                            const Icon = houseElementIcons[house.element];
                            return <Icon className="w-5 h-5" />;
                          })()
                        ) : (
                          <Home className="w-5 h-5" />
                        )}
                      </div>

                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground">{house.name}</span>
                        <span className="text-xs text-foreground/50">{house.element}</span>
                      </div>
                      
                      {i === 0 && (
                        <div className="flex items-center gap-1 ml-2">
                          <Sparkles className="w-4 h-4 text-[var(--crimson-glow)] animate-pulse" />
                          <span className="text-xs text-gold font-bold">LEADING</span>
                        </div>
                      )}
                    </div>
                    <span className="font-display text-xl tabular-nums text-gradient-gold">
                      {house.points}
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 relative texture-overlay"
                      style={{
                        width: `${max > 0 ? (house.points / max) * 100 : 0}%`,
                        background: house.gradient,
                        boxShadow: `0 0 14px ${house.color}`,
                      }}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,oklch(1_0_0/0.25),transparent)] bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
                    </div>
                  </div>

                  {/* Inline Breakdown */}
                  {selectedHouse === house.name && (
                    <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-white/5 animate-rise-in">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex justify-between text-xs mb-1.5">
                             <span className="text-foreground/70 uppercase tracking-wider">Winners</span>
                             <span className="font-bold text-gold">{house.breakdown.winners}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                             <div className="h-full rounded-full transition-all duration-700 texture-overlay" style={{ width: `${house.points > 0 ? (house.breakdown.winners / house.points) * 100 : 0}%`, background: house.gradient }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1.5">
                             <span className="text-foreground/70 uppercase tracking-wider">Runners</span>
                             <span className="font-bold text-gold">{house.breakdown.runners}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                             <div className="h-full rounded-full transition-all duration-700 opacity-70 texture-overlay" style={{ width: `${house.points > 0 ? (house.breakdown.runners / house.points) * 100 : 0}%`, background: house.gradient }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1.5">
                             <span className="text-foreground/70 uppercase tracking-wider">Participation</span>
                             <span className="font-bold text-gold">{house.breakdown.participation}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                             <div className="h-full rounded-full transition-all duration-700 opacity-40 texture-overlay" style={{ width: `${house.points > 0 ? (house.breakdown.participation / house.points) * 100 : 0}%`, background: house.gradient }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
}
