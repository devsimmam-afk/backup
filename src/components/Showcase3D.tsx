import { Crown, Medal, Sparkles, Trophy } from "lucide-react";
import { SectionHeader } from "./Dashboard";
import { Tilt3D } from "./Tilt3D";

const orbs = [
  {
    image: "/awards/overall_winner.png",
    label: "Overall Winner",
    color: "#a855f7",
    glow: "#a855f7",
  },
  {
    image: "/awards/overall_runner.png",
    label: "Overall Runner",
    color: "#1e3a8a",
    glow: "#1e3a8a",
  },
  {
    image: "/awards/best_tech.png",
    label: "Best Tech Team",
    color: "oklch(0.65 0.2 250)",
    glow: "oklch(0.7 0.22 255)",
  },
  {
    image: "/awards/best_nontech.png",
    label: "Best Non-Tech Team",
    color: "#e11d48",
    glow: "#e11d48",
  },
  {
    image: "/awards/cultural.png",
    label: "Best Cultural Team",
    color: "#dc2626",
    glow: "#f97316",
  },
  {
    image: "/awards/enthusiastic_team.png",
    label: "Best Enthusiastic Team",
    color: "#a855f7",
    glow: "#a855f7",
  },
  {
    image: "/awards/best_sports.png",
    label: "Best Sports Team",
    color: "#2563eb",
    glow: "#2563eb",
  },
  {
    image: "/awards/best_student.png",
    label: "Best Student Activity Team",
    color: "#7c3aed",
    glow: "#7c3aed",
  },
  {
    image: "/awards/max_participation.png",
    label: "Maximum Participation Team",
    color: "#c084fc",
    glow: "#c084fc",
  },
  {
    image: "/awards/active_dept.png",
    label: "Most Active Department Team",
    color: "#bef264",
    glow: "#bef264",
  },
];

export function Showcase3D() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Layered depth backdrops */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[80vh] rounded-full opacity-40"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.55 0.22 27 / 0.3), oklch(0.78 0.16 80 / 0.3), oklch(0.55 0.22 27 / 0.3))",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Trophies"
          title="Forged in Gold. Earned on Stage."
          subtitle="Hover to feel the weight. Each award represents a season of brilliance."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {orbs.map((o, i) => (
            <Tilt3D key={o.label} max={18}>
              <div 
                className="relative glass-strong rounded-3xl p-6 pb-7 text-center overflow-hidden h-full border transition-all duration-500"
                style={{ borderColor: `${o.glow}44`, boxShadow: `0 0 30px ${o.glow}15` }}
              >
                {/* Floating 3D orb */}
                <div
                  className="relative mx-auto mb-5 animate-float"
                  style={{
                    transform: "translateZ(60px)",
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Orb shadow */}
                    <div
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full blur-xl opacity-70"
                      style={{ background: o.glow }}
                    />
                    {/* Orb sphere */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.85), ${o.color} 35%, oklch(0.12 0.02 25) 90%)`,
                        boxShadow: `0 0 60px ${o.glow}, inset -10px -20px 40px oklch(0 0 0 / 0.6), inset 10px 15px 30px oklch(1 0 0 / 0.15)`,
                      }}
                    />
                    {/* Orbit ring */}
                    <div className="absolute inset-[-8px] rounded-full border border-dashed animate-spin-slow"
                      style={{ borderColor: `${o.glow}88` }}
                    />
                    {/* Highlight */}
                    <div
                      className="absolute top-3 left-5 w-10 h-6 rounded-full opacity-80 blur-md"
                      style={{ background: "oklch(1 0 0 / 0.7)" }}
                    />
                    {/* Image */}
                    <div
                      className="absolute inset-0 grid place-items-center p-3"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      <img src={o.image} alt={o.label} className="w-full h-full object-cover rounded-full mix-blend-screen opacity-90 drop-shadow-2xl" />
                    </div>
                  </div>
                </div>

                <div
                  className="font-display text-xl font-bold text-gradient-gold"
                  style={{ transform: "translateZ(40px)" }}
                >
                  {o.label}
                </div>

                {/* corner sparkle */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-50"
                  style={{ background: o.glow }}
                />
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
