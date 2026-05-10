import { useState } from "react";
import { ChevronDown, Phone, Shield, User, UserCog } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Dashboard";
import { Tilt3D } from "./Tilt3D";
import { houses } from "@/lib/houses";

export function Teams() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="teams" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Six Houses"
          title="Houses of SIMMAM"
          subtitle="Six legendary houses. One arena. Every point earned belongs to one of these six."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6">
          {houses.map((t, i) => {
            const isOpen = open === i;
            return (
              <div key={t.short} className="break-inside-avoid">
                <Tilt3D max={6}>
                  <div
                    className="group relative glass rounded-2xl overflow-hidden hover-lift h-full"
                    style={{ borderColor: t.accent + "66" }}
                  >
                    <div
                      className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at right top, ${t.glow}, transparent 70%)`,
                      }}
                    />
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="relative w-full text-left p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="shrink-0 w-20 h-20 rounded-full flex items-center justify-center bg-black border-2 shadow-lg [transform-style:preserve-3d] overflow-hidden"
                          style={{
                            boxShadow: `0 0 32px ${t.glow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
                            transform: "translateZ(30px)",
                            borderColor: t.accent,
                          }}
                        >
                          <img src={t.logo} alt={`${t.name} crest`} className={`w-full h-full object-cover ${t.logoScale || "scale-125"}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] tracking-[0.3em] text-foreground/50">
                            HOUSE OF {t.element.toUpperCase()}
                          </div>
                          <div className="font-display text-3xl font-bold text-gradient-gold mt-0.5">
                            {t.name}
                          </div>
                          <div className="text-xs italic text-foreground/60 mt-1">
                            {t.tagline}
                          </div>
                          <div className="mt-2 text-xs text-foreground/60">
                            2025 Score:{" "}
                            <span className="text-gold font-semibold">
                              {t.name === "Agniyas" ? "45,900" : t.points2025.toLocaleString()} pts
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gold transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`relative grid transition-[grid-template-rows] duration-500 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 space-y-3 text-sm">
                          <p className="text-foreground/70 leading-relaxed">{t.about}</p>
                          <div className="flex items-start justify-between gap-3 glass rounded-xl px-4 py-3">
                            <div className="flex items-start gap-3 min-w-0">
                              <div className="p-2 rounded-lg bg-gold/10 text-gold shrink-0">
                                <UserCog className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[10px] tracking-[0.25em] text-foreground/50 mb-1">
                                  FACULTY CAPTAINS
                                </div>
                                <div className="flex flex-col gap-1">
                                  {t.faculty.map((f, i) => (
                                    <div key={i} className="truncate text-foreground/90">{f}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Row
                            icon={User}
                            label="Student Captain"
                            name={t.captain.name}
                            phone={t.captain.phone}
                          />
                          <Row
                            icon={UserCog}
                            label="Student Vice Captain"
                            name={t.vice.name}
                            phone={t.vice.phone}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/captains"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass-strong neon-border text-gold hover:bg-white/5 transition"
          >
            Meet The Elite Crew
          </Link>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  name,
  phone,
}: {
  icon: typeof User;
  label: string;
  name: string;
  phone: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 glass rounded-xl px-4 py-3">
      <div className="flex items-center gap-3 min-w-0">
        <div className="p-2 rounded-lg bg-gold/10 text-gold">
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.25em] text-foreground/50">
            {label.toUpperCase()}
          </div>
          <div className="truncate text-foreground/90">{name}</div>
        </div>
      </div>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80 shrink-0"
      >
        <Phone className="w-3.5 h-3.5" />
        {phone}
      </a>
    </div>
  );
}
