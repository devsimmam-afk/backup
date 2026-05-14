import { useEffect, useState } from "react";
import { Crown, Activity, TrendingUp } from "lucide-react";
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


  const participationScores: Record<string, number> = {
    "Agniyas": 400,
    "Marutas": 1160,
    "Rudras": 520,
    "Dhronas": 600,
    "Suryas": 680,
    "Vajras": 340,
  };

  const [houseScores, setHouseScores] = useState<HouseScore[]>(() => 
    houses
      .map((h) => {
        const participation = participationScores[h.name] || 0;
        const totalPoints = participation + (h.breakdown?.winners || 0) + (h.breakdown?.runners || 0);
        return {
          name: h.name,
          short: h.short,
          element: h.element,
          points: totalPoints,
          color: h.accent,
          accent: h.accent,
          gradient: h.gradient,
          breakdown: { 
            winners: h.breakdown?.winners || 0, 
            runners: h.breakdown?.runners || 0, 
            participation: participation 
          },
          logo: h.logo,
          logoScale: h.logoScale,
          isOriginalShape: h.isOriginalShape,
        };
      })
      .sort((a, b) => b.points - a.points)
  );

  const max = Math.max(...houseScores.map((s) => s.points));
  const leader = houseScores[0];

  const dynamicStats: Stat[] = [
    { label: "Total Teams", value: 6, hint: "Agniyas, Dhronas, Marutas, Rudras, Suryas, Vajras", accent: "gold", href: "/#teams" },
    { label: "Total Participants", value: 1840, hint: "Across all events", accent: "red" },
    { label: "Total Events", value: 150, hint: "", accent: "gold", href: "/events" },
    { label: "Festival Days", value: 3, hint: "Three days. One legend.", accent: "red" },
    { label: "1st Place Holder", value: 1, suffix: leader ? ` — ${leader.name}` : " — ...", hint: "Leading the rankings", accent: "gold", href: "/#leaderboard" },
    { label: "Highest Score", value: leader?.points || 0, suffix: leader ? ` — ${leader.name}` : " — ...", hint: leader ? `${leader.name} — Current Best` : "...", accent: "red", href: "/#leaderboard" },
  ];

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
          {dynamicStats.map((s, i) => {
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
              {houseScores.map((house, i) => {

                return (
                  <div 
                    key={house.name} 
                    className="relative p-2 -mx-2 rounded-xl transition-colors hover:bg-white/5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl font-black text-white/20 w-8 tabular-nums italic">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        
                        <div
                          className={`w-14 h-14 flex items-center justify-center shrink-0 transition-all ${house.isOriginalShape ? "" : "bg-black/40 border-2 rounded-full overflow-hidden"}`}
                        >
                          <img src={house.logo} alt={`${house.name} crest`} className={`w-full h-full object-contain ${house.isOriginalShape ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : ""} ${house.logoScale || "scale-125"}`} />
                        </div>

                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg tracking-tight text-foreground/90 uppercase">{house.name}</span>
                            {i === 0 && <Crown className="w-4 h-4 text-gold animate-bounce" />}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="font-display text-3xl font-bold tabular-nums text-gradient-gold leading-none">
                          {house.points}
                        </span>
                        <span className="text-[10px] tracking-[0.2em] text-foreground/30 font-bold uppercase mt-1">Total Score</span>
                      </div>
                    </div>

                    {/* Total Points Progress Bar */}
                    <div className="relative group/bar">
                      <div className="h-4 rounded-full bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm relative">
                        <div
                          className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                          style={{
                            width: `${max > 0 ? (house.points / max) * 100 : 0}%`,
                            background: house.gradient,
                            boxShadow: `inset 0 1px 1px rgba(255,255,255,0.2), 0 0 25px ${house.color}66`,
                          }}
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,oklch(1_0_0/0.3),transparent)] bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
                        </div>
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>

        </div>
      </div>
    </section>
  );
}
