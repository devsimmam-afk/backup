import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import {
  Crown,
  Medal,
  Trophy,
  Flame,
  Zap,
  Sun,
  Cloud,
  Wind,
  Swords,
  TrendingUp,
  Minus,
  ChevronUp,
  ChevronDown,
  Users,
  Hash,
  Award,
  Clock,
} from "lucide-react";
import { houses, type House } from "@/lib/houses";

/* ─── Color Palette ────────────────────────────────────────── */

const C = {
  bg: "#0a0908",       // near-black background
  bgCard: "#0f0e0c",      // slightly lighter card bg
  bgCardHover: "#141210",      // card hover bg
  borderGold: "#6b5a32",      // muted gold borders
  borderSoft: "#3d3424",      // subtle gold border (lighter)
  headingGold: "#d4a843",      // royal gold for headings
  mainText: "#f0e8da",      // warm white main text
  secondText: "#a89a7e",      // muted beige secondary
  dimText: "#6b5f4d",      // very dim text for tertiary
  accentGold: "#c9a238",      // strong gold accent
  glowGold: "#d4a84340",    // gold glow (with alpha)
} as const;

/* ─── helpers ──────────────────────────────────────────────── */

const ranked = [...houses].sort((a, b) => b.points2025 - a.points2025);
const totalPoints = ranked.reduce((s, h) => s + h.points2025, 0);

const ELEMENT_ICONS: Record<string, typeof Flame> = {
  Fire: Flame,
  Thunder: Zap,
  Sun: Sun,
  Storm: Cloud,
  Wind: Wind,
  Wisdom: Swords,
};

function getHouseIcon(element: string) {
  return ELEMENT_ICONS[element] ?? Flame;
}

function getHouseLogo(houseName: string) {
  const name = houseName.toLowerCase();
  if (name === "dhronas") return "/houses/dronas.jpg";
  return `/houses/${name}.png`;
}

function getHouseImageStyle(houseName: string) {
  const name = houseName.toLowerCase();
  switch (name) {
    case "agniyas": return "scale-[1.75] object-[center_20%]";
    case "rudras": return "scale-[1.55] object-[center_25%]";
    case "suryas": return "scale-[1.45] object-[center_40%]";
    case "dhronas":
    case "dronas": return "scale-[1.55] object-[center_30%]";
    case "marutas": return "scale-[1.55] object-[center_25%]";
    case "vajras": return "scale-[1.55] object-[center_30%]";
    default: return "scale-[1.55] object-[center_25%]";
  }
}

/* ─── Floating Ember Particles ─────────────────────────────── */

function EmberParticles({ count = 20 }: { count?: number }) {
  type Ember = {
    id: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
    drift: number;
    gold: boolean;
  };
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    setEmbers(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 1.2,
        delay: Math.random() * 14,
        duration: Math.random() * 12 + 10,
        drift: (Math.random() - 0.5) * 50,
        gold: Math.random() > 0.3,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: `-${e.size + 4}px`,
            width: e.size,
            height: e.size,
            background: e.gold ? C.accentGold : "#8b6914",
            boxShadow: e.gold
              ? `0 0 6px ${C.accentGold}90`
              : "0 0 6px #8b691480",
            opacity: 0,
            animation: `ember-rise ${e.duration}s ${e.delay}s ease-out infinite`,
            "--ember-drift": `${e.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─── Animated Counter ─────────────────────────────────────── */

function AnimatedNumber({ value, duration = 1800 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  const animate = useCallback(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) animate(); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

/* ─── LIVE Badge ───────────────────────────────────────────── */

function LiveBadge() {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
      style={{
        border: `1px solid ${C.borderSoft}`,
        background: `${C.bg}cc`,
      }}
    >
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ background: "#6abf69" }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ background: "#6abf69" }}
        />
      </span>
      <span
        className="text-[10px] font-semibold tracking-[0.25em]"
        style={{ color: "#8bd48a" }}
      >
        LIVE
      </span>
    </div>
  );
}

/* ─── Change Indicator ─────────────────────────────────────── */

function ChangeIndicator({ value }: { value?: number }) {
  if (value === undefined || value === 0) {
    return (
      <span className="inline-flex items-center gap-1 text-xs" style={{ color: C.dimText }}>
        <Minus className="w-3 h-3" />
        <span>—</span>
      </span>
    );
  }
  const positive = value > 0;
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-medium"
      style={{ color: positive ? "#6abf69" : "#c25c5c" }}
    >
      {positive ? (
        <ChevronUp className="w-3.5 h-3.5" />
      ) : (
        <ChevronDown className="w-3.5 h-3.5" />
      )}
      <span>{positive ? "+" : ""}{value.toLocaleString()}</span>
    </span>
  );
}

/* ─── Podium Card ──────────────────────────────────────────── */

function PodiumCard({
  house,
  rank,
  featured = false,
}: {
  house: House;
  rank: number;
  featured?: boolean;
}) {
  const Icon = rank === 1 ? Crown : rank === 2 ? Trophy : Medal;

  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl transition-all duration-500
        ${featured ? "sm:-translate-y-4 sm:scale-[1.02]" : ""}
      `}
      style={{
        background: C.bgCard,
        border: `1px solid ${C.borderGold}`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent 10%, ${C.headingGold}99 50%, transparent 90%)`,
        }}
      />

      {/* Subtle top glow */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-32 opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${C.headingGold}50, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col justify-between ${featured ? "p-6 sm:p-8" : "p-6"}`}>
        
        {/* Top Label (if any) */}
        {rank === 1 && (
          <div className="absolute top-5 right-5">
            <span
              className="text-[9px] tracking-[0.2em] font-semibold"
              style={{ color: C.dimText }}
            >
              DEFENDING
            </span>
          </div>
        )}

        {/* Emblem */}
        <div className="flex justify-center mb-5 mt-2">
          <div
            className={`
              relative flex items-center justify-center rounded-full overflow-hidden
              ${featured ? "w-24 h-24" : "w-20 h-20"}
              transition-transform duration-500 group-hover:scale-110
            `}
            style={{
              background: `linear-gradient(135deg, ${house.accent}40, ${house.accent}15)`,
              boxShadow: `0 0 30px ${house.accent}35`,
              border: `2px solid ${house.accent}70`,
            }}
          >
            <img 
              src={getHouseLogo(house.name)} 
              alt={house.name} 
              className={`w-full h-full object-cover ${getHouseImageStyle(house.name)}`} 
            />
          </div>
        </div>

        {/* Name + Tagline */}
        <div className="text-center">
          <h3
            className={`font-display font-bold tracking-wide ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              }`}
            style={{ color: C.headingGold }}
          >
            {house.name}
          </h3>
          <p
            className="text-[11px] italic mt-1.5 tracking-wide"
            style={{ color: C.secondText }}
          >
            {house.tagline}
          </p>
        </div>

        {/* Points */}
        <div className="mt-5 text-center">
          <div
            className={`font-display font-bold tabular-nums ${featured ? "text-4xl" : "text-3xl"
              }`}
            style={{ color: C.mainText }}
          >
            <AnimatedNumber value={house.points2025} />
          </div>
          <span
            className="text-[10px] tracking-[0.3em] mt-1 block"
            style={{ color: C.dimText }}
          >
            POINTS
          </span>
        </div>

        {/* Rank badge (Bottom Right) */}
        <div className="absolute bottom-5 right-5">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em]"
            style={{
              background: `${C.borderSoft}40`,
              color: C.headingGold,
              border: `1px solid ${C.borderGold}`,
            }}
          >
            <span>RANK</span>
            <span>#{rank.toString().padStart(2, "0")}</span>
          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${C.borderGold}80, transparent)`,
        }}
      />
    </div>
  );
}

/* ─── Ranking Table ────────────────────────────────────────── */

function RankingTable() {
  return (
    <div
      className="relative rounded-xl overflow-hidden max-w-3xl mx-auto"
      style={{
        background: C.bgCard,
        border: `1px solid ${C.borderGold}`,
      }}
    >
      {/* Table header */}
      <div
        className="grid items-center px-5 md:px-8 py-3"
        style={{
          gridTemplateColumns: "48px 1fr 100px",
          borderBottom: `1px solid ${C.borderSoft}`,
          background: `${C.borderSoft}15`,
        }}
      >
        {["RANK", "HOUSE", "POINTS"].map((h) => (
          <span
            key={h}
            className={`text-[10px] font-semibold tracking-[0.25em] ${h === "POINTS" ? "text-right" : ""
              }`}
            style={{ color: C.dimText }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Table rows */}
      {ranked.map((house, i) => {
        const isTop3 = i < 3;

        return (
          <div
            key={house.short}
            className="group grid items-center px-5 md:px-8 py-3 transition-colors duration-300 cursor-default"
            style={{
              gridTemplateColumns: "48px 1fr 100px",
              borderBottom:
                i < ranked.length - 1
                  ? `1px solid ${C.borderSoft}50`
                  : "none",
              ...(i % 2 === 0 ? {} : { background: `${C.borderSoft}08` }),
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = C.bgCardHover;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background =
                i % 2 === 0 ? "transparent" : `${C.borderSoft}08`;
            }}
          >
            {/* Rank */}
            <div className="flex items-center">
              <span
                className="font-display text-lg font-bold tabular-nums"
                style={{ color: isTop3 ? C.headingGold : C.dimText }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* House */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 overflow-hidden"
                style={{
                  background: `${house.accent}20`,
                  border: `1px solid ${house.accent}45`,
                }}
              >
                <img 
                  src={getHouseLogo(house.name)} 
                  alt={house.name} 
                  className={`w-full h-full object-cover ${getHouseImageStyle(house.name)}`} 
                />
              </div>
              <span
                className="font-semibold text-sm"
                style={{ color: C.mainText }}
              >
                {house.name}
              </span>
              {i === 0 && (
                <Crown className="w-3.5 h-3.5 ml-0.5" style={{ color: C.headingGold }} />
              )}
            </div>

            {/* Points */}
            <div className="text-right">
              <span
                className="font-display text-base font-bold tabular-nums"
                style={{ color: isTop3 ? C.headingGold : C.mainText }}
              >
                {house.points2025.toLocaleString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Footer Stats Strip ───────────────────────────────────── */

function FooterStats() {
  const stats = useMemo(
    () => [
      { icon: Users, label: "Total Houses", value: String(houses.length) },
      { icon: Hash, label: "Total Points", value: totalPoints.toLocaleString() },
      { icon: TrendingUp, label: "Lead Changes", value: "12" },
      { icon: Award, label: "Top House", value: ranked[0]?.name ?? "—" },
      { icon: Clock, label: "Last Updated", value: "Just now" },
    ],
    []
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors duration-300"
          style={{
            background: C.bgCard,
            border: `1px solid ${C.borderSoft}`,
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: `${C.headingGold}12`,
              border: `1px solid ${C.borderSoft}`,
            }}
          >
            <s.icon className="w-3.5 h-3.5" style={{ color: C.headingGold }} />
          </div>
          <div className="min-w-0">
            <div
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{ color: C.dimText }}
            >
              {s.label}
            </div>
            <div
              className="text-sm font-semibold truncate"
              style={{ color: C.mainText }}
            >
              {s.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Leaderboard ─────────────────────────────────────── */

export function Leaderboard() {
  const first = ranked[0];
  const second = ranked[1];
  const third = ranked[2];

  return (
    <section
      id="leaderboard"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: C.bg }}
    >
      {/* Background embers */}
      <EmberParticles count={18} />

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${C.headingGold}50, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        {/* ── Header ───────────────────────────────────────── */}
        <div className="text-center mb-16 md:mb-20">
          {/* SIMMAM 2026 label */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background: `linear-gradient(90deg, transparent, ${C.borderGold})`,
              }}
            />
            <span
              className="text-[10px] md:text-[11px] tracking-[0.4em] font-semibold"
              style={{ color: C.secondText }}
            >
              SIMMAM 2025
            </span>
            <span
              className="h-px w-10"
              style={{
                background: `linear-gradient(90deg, ${C.borderGold}, transparent)`,
              }}
            />
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
            <span style={{ color: C.headingGold }}>HOUSE</span>{" "}
            <span style={{ color: C.mainText }}>LEADERBOARD</span>
          </h2>
        </div>

        {/* ── Top 3 Podium ─────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
          <div className="order-2 sm:order-1 sm:mt-6">
            <PodiumCard house={second} rank={2} />
          </div>
          <div className="order-1 sm:order-2">
            <PodiumCard house={first} rank={1} featured />
          </div>
          <div className="order-3 sm:mt-6">
            <PodiumCard house={third} rank={3} />
          </div>
        </div>

        {/* ── Full Ranking Table ───────────────────────────── */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px flex-1"
              style={{
                background: `linear-gradient(90deg, ${C.borderGold}60, transparent)`,
              }}
            />
            <span
              className="text-[10px] tracking-[0.3em] font-semibold"
              style={{ color: C.dimText }}
            >
              FULL STANDINGS
            </span>
            <span
              className="h-px flex-1"
              style={{
                background: `linear-gradient(90deg, transparent, ${C.borderGold}60)`,
              }}
            />
          </div>
          <RankingTable />
        </div>

      </div>
    </section>
  );
}
