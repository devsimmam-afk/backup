import { Calendar, Crown, Music2, Trophy, Users } from "lucide-react";
import { SectionHeader } from "./Dashboard";
import { Tilt3D } from "./Tilt3D";

type Edition = {
  year: string;
  title: string;
  champion: string;
  headliner: string;
  days: number;
  participants: number;
  highlights: string[];
  scores?: { house: string; pts: number; isChampion?: boolean }[];
  images: string[];
  accent: string;
};

const editions: Edition[] = [
  {
    year: "2025",
    title: "SIMMAM 2025 — Legends of Music",
    champion: "Agniyas",
    headliner: 'Vijay Antony  •  "Rock Star DSP"',
    days: 3,
    participants: 4200,
    highlights: [
      "Day 1 — Inauguration & Faculty Matches",
      'Day 2 — LIVE Concert with "Rock Star DSP"',
      "Day 3 — LIVE Concert with Vijay Antony",
      "DJ Akram Night",
      "Final Team Result — Champions Crowned",
    ],
    images: [
      "/gallery/2025-1.png",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1758650536012-OUK3BX19A6XIKHYMXQIN/WhatsApp+Image+2025-09-11+at+7.47.38+PM+%281%29.jpeg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1758650722014-ZREEGBY3YYY9VC36BU7W/WhatsApp+Image+2025-09-11+at+7.47.49+PM+%282%29.jpeg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1758650902469-UU45JJI7X199RDQ3KMNK/WhatsApp+Image+2025-09-11+at+7.47.52+PM+%285%29.jpeg?format=500w",
      "/gallery/2025-6.png",
    ],
    accent: "oklch(0.78 0.16 80)",
  },
  {
    year: "2024",
    title: "SIMMAM 2024 — Where Passion Met Expression",
    champion: "Suryas",
    headliner: "Nikki Galrani  •  Karthick",
    days: 3,
    participants: 3600,
    highlights: [
      "Day 1 — Grand Opening & Cultural Inauguration",
      "Day 2 — Music, Dance & Drama Showcases",
      "Day 3 — Awards Night & Closing Ceremony",
      "Art, Photography & Design Exhibits",
      "Inter-house Sports Tournament",
    ],
    images: [
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1742958550073-4TL4PLPKROZ1P6G2KSL5/WhatsApp+Image+2025-03-26+at+8.33.15+AM.jpeg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1742959954054-K5I6CUGBMOQ7JLMS1QE2/IMG_0686-M.jpg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1742960140095-H4HNUVWP5T7KYK2A0H9B/1Y2A9377-M.jpg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1742960067073-BEPGO2L3PPN6L0HEH0RX/DJI_0044-M.jpg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1742960368154-AQB0RTXM900XMULYEFX1/IMG_0978-M.jpg?format=500w",
      "https://images.squarespace-cdn.com/content/v1/590ecdedc534a56c75a1aab7/1742960627313-QT6ASIT18TUJSB615N3L/1Y2A0477-M.jpg?format=500w",
    ],
    accent: "oklch(0.62 0.27 25)",
  },
];

export function PastYears() {
  return (
    <section id="archive" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="Editions of SIMMAM"
          subtitle="A walk through the years that built the legacy. Every champion. Every encore. Every memory."
        />

        <div className="space-y-16">
          {editions.map((e, idx) => (
            <div key={e.year} className="relative">
              {/* Year ribbon */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="font-display text-7xl md:text-9xl font-black leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${e.accent}, oklch(0.95 0.06 85))`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    textShadow: "none",
                    filter: `drop-shadow(0 0 24px ${e.accent.replace(")", " / 0.5)")})`,
                  }}
                >
                  {e.year}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.4em] text-gold/70">EDITION</div>
                  <div className="font-display text-2xl md:text-3xl text-foreground mt-1">
                    {e.title}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-5">
                {/* Stats column */}
                <div className="space-y-4">
                  <Tilt3D max={8}>
                    <StatCard icon={Trophy} label="Champion House" value={e.champion} accent={e.accent} />
                  </Tilt3D>
                  <Tilt3D max={8}>
                    <StatCard icon={Music2} label="Headliner" value={e.headliner} accent={e.accent} small />
                  </Tilt3D>
                  <div className="grid grid-cols-2 gap-4">
                    <Tilt3D max={8}>
                      <StatCard icon={Calendar} label="Days" value={`${e.days}`} accent={e.accent} />
                    </Tilt3D>
                    <Tilt3D max={8}>
                      <StatCard
                        icon={Users}
                        label="Participants"
                        value={e.participants.toLocaleString()}
                        accent={e.accent}
                      />
                    </Tilt3D>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <div className="text-[10px] tracking-[0.3em] text-gold/70 mb-3">
                      HIGHLIGHTS
                    </div>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: e.accent }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {e.scores && (
                    <div className="glass rounded-2xl p-5 border border-gold/30">
                      <div className="text-[10px] tracking-[0.3em] text-gold/70 mb-3 flex items-center justify-between">
                        <span>2025 STANDINGS</span>
                        <Trophy className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <div className="space-y-3">
                        {e.scores.sort((a, b) => b.pts - a.pts).map((score) => (
                          <div key={score.house} className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2">
                              <span className={score.isChampion ? "text-gold font-bold" : "text-foreground/80"}>
                                {score.house}
                              </span>
                              {score.isChampion && <Crown className="w-3 h-3 text-gold" />}
                            </div>
                            <span className={score.isChampion ? "text-gold font-bold tabular-nums" : "text-foreground/60 tabular-nums"}>
                              {score.pts.toLocaleString()} pts
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Image mosaic */}
                <div className="lg:col-span-2 grid grid-cols-4 grid-rows-2 gap-3 auto-rows-[140px] md:auto-rows-[170px]">
                  {e.images.slice(0, 5).map((src, i) => (
                    <div
                      key={i}
                      className={`relative rounded-2xl overflow-hidden glass hover-lift group ${i === 0 ? "col-span-2 row-span-2" : ""
                        }`}
                    >
                      <img
                        src={src}
                        alt={`SIMMAM ${e.year} memory ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-2 left-3 text-[10px] tracking-[0.3em] text-gold/80">
                        SIMMAM • {e.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {idx < editions.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
  small,
}: {
  icon: typeof Trophy;
  label: string;
  value: string;
  accent: string;
  small?: boolean;
}) {
  return (
    <div className="relative glass rounded-2xl p-5 overflow-hidden h-full">
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-50"
        style={{ background: accent }}
      />
      <div className="relative flex items-start gap-3">
        <div
          className="p-2.5 rounded-xl"
          style={{
            background: `${accent.replace(")", " / 0.15)")}`,
            color: accent,
            boxShadow: `0 0 18px ${accent.replace(")", " / 0.4)")}`,
          }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.3em] text-foreground/55">
            {label.toUpperCase()}
          </div>
          <div
            className={`font-display ${small ? "text-base" : "text-xl"
              } text-gradient-gold mt-1 truncate`}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
