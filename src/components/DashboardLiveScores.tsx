import { useEffect, useState } from "react";
import { Award, Building2, Crown, Flame, Trophy, Users, Activity, TrendingUp, Sparkles, CloudLightning, Sun, BookOpen, Wind, Zap, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Counter } from "./Counter";
import { Tilt3D } from "./Tilt3D";
import { SectionHeader } from "./Dashboard";
import { houses } from "../lib/houses";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  hint: string;
  accent: "gold" | "red";
  href?: string;
};

import { allEvents } from "@/lib/eventsData";

const stats: Stat[] = [
  { label: "Total Teams", value: 6, hint: "Agniyas, Dhronas, Marutas, Rudras, Suryas, Vajras", accent: "gold", href: "/#teams" },
  { label: "Total Participants", value: 0, hint: "Across all events", accent: "red" },
  { label: "Total Events", value: 150, hint: "", accent: "gold", href: "/events" },
  { label: "Festival Days", value: 3, hint: "Three days. One legend.", accent: "red" },
  { label: "2025 Champion", value: 1, suffix: " — Agniyas", hint: "Last year's overall winners", accent: "gold", href: "/#leaderboard" },
  { label: "Highest Score", value: 45900, hint: "Agniyas — SIMMAM 2025", accent: "red", href: "/#leaderboard" },
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
  logo: string;
  logoScale?: string;
  isOriginalShape?: boolean;
};

export function DashboardLiveScores() {
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null);

  const [houseScores, setHouseScores] = useState<HouseScore[]>(() => 
    houses
      .map((h) => ({
        name: h.name,
        short: h.short,
        element: h.element,
        points: 0,
        color: h.accent,
        accent: h.accent,
        gradient: h.gradient,
        breakdown: { winners: 0, runners: 0, participation: 0 },
        logo: h.logo,
        logoScale: h.logoScale,
        isOriginalShape: h.isOriginalShape,
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
          {stats.map((s, i) => {
            const Wrapper = s.href ? "a" : "div";
            return (
              <Tilt3D key={s.label} max={9}>
                <Wrapper
                  {...(s.href ? { href: s.href } : {})}
                  className="block group relative p-[1px] rounded-2xl overflow-hidden hover-lift animate-rise-in h-full cursor-pointer"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Glowing spinning border */}
                  <div
                    className="absolute -inset-[150%] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 75%, ${
                        s.accent === "gold" ? "var(--gold)" : "var(--crimson)"
                      } 100%)`,
                    }}
                  />

                  {/* Inner card content with gradient */}
                  <div className="relative h-full bg-gradient-to-br from-zinc-900/95 to-black/95 rounded-[15px] p-6 z-10 flex flex-col justify-center">
                    {/* corner glow */}
                    <div
                      className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none"
                      style={{
                        background:
                          s.accent === "gold"
                            ? "oklch(0.78 0.16 80 / 0.7)"
                            : "oklch(0.55 0.22 27 / 0.7)",
                      }}
                    />

                    <div className="relative mt-2">
                      <div className="font-display text-5xl font-bold text-gradient-gold">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="mt-4 text-base text-foreground/90 font-medium">
                        {s.label}
                      </div>
                      <div className="text-xs text-foreground/55 mt-1">{s.hint}</div>
                    </div>
                  </div>
                </Wrapper>
              </Tilt3D>
            );
          })}
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
                        className={`w-12 h-12 flex items-center justify-center shrink-0 transition-all ${house.isOriginalShape ? "" : "bg-black/40 border-2 rounded-full overflow-hidden"}`}
                        style={house.isOriginalShape ? {} : {
                          borderColor: house.accent,
                        }}
                      >
                        <img src={house.logo} alt={`${house.name} crest`} className={`w-full h-full object-contain ${house.isOriginalShape ? "drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]" : ""} ${house.logoScale || "scale-125"}`} />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground">{house.name}</span>
                        <span className="text-xs text-foreground/50">{house.element}</span>
                      </div>
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
