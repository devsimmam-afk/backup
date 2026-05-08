import { Crown, Medal, Trophy } from "lucide-react";
import { SectionHeader } from "./Dashboard";
import { houses } from "@/lib/houses";

const ranked = [...houses].sort((a, b) => b.points2025 - a.points2025);
const max = Math.max(...ranked.map((t) => t.points2025));

export function Leaderboard() {
  return (
    <section id="leaderboard" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="SIMMAM 2025 Final Standings"
          title="The Champions Wall"
          subtitle="The houses that lit up SIMMAM 2025. Agniyas took the crown — 2026 raises the bar."
        />

        {/* Podium */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {ranked.slice(0, 3).map((t, i) => {
            const Icon = i === 0 ? Crown : i === 1 ? Trophy : Medal;
            return (
              <div
                key={t.short}
                className={`relative bg-black/60 border border-white/10 rounded-2xl p-6 text-center hover-lift overflow-hidden ${
                  i === 0 ? "sm:-translate-y-4" : ""
                }`}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(circle at top, ${t.glow}, transparent 60%)`,
                  }}
                />
                <div
                  className="relative mx-auto w-20 h-20 rounded-full flex items-center justify-center shadow-[var(--shadow-glow-gold)] animate-float"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent}, oklch(0.20 0.04 25))`,
                    boxShadow: `0 0 36px ${t.glow}`,
                  }}
                >
                  <Icon className="w-9 h-9 text-background" />
                </div>
                <div className="relative mt-4 text-xs tracking-[0.3em] text-foreground/60">
                  RANK 0{i + 1}
                </div>
                <div className="relative font-display text-3xl font-bold text-gradient-gold mt-1">
                  {t.name}
                </div>
                <div className="relative text-xs italic text-foreground/55 mt-1">
                  {t.tagline}
                </div>
                <div className="relative text-3xl font-display font-bold mt-2 text-foreground">
                  {t.points2025.toLocaleString()}
                  <span className="text-sm text-foreground/50 ml-1">pts</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 px-5 py-3 text-[10px] tracking-[0.3em] text-gold/70 border-b border-[var(--glass-border)]">
            <div className="col-span-1">RANK</div>
            <div className="col-span-4">HOUSE</div>
            <div className="col-span-5">PERFORMANCE</div>
            <div className="col-span-2 text-right">POINTS</div>
          </div>
          {ranked.map((t, i) => (
            <div
              key={t.short}
              className="grid grid-cols-12 items-center px-5 py-4 text-sm border-b border-white/5 last:border-0 hover:bg-white/3 transition group"
            >
              <div className="col-span-1 font-display text-xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-foreground/50">{t.tagline}</div>
              </div>
              <div className="col-span-5 pr-4">
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 group-hover:brightness-125"
                    style={{
                      width: `${(t.points2025 / max) * 100}%`,
                      background: t.accent,
                      boxShadow: `0 0 14px ${t.glow}`,
                    }}
                  />
                </div>
              </div>
              <div className="col-span-2 text-right font-display text-xl text-gradient-gold tabular-nums">
                {t.points2025.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
