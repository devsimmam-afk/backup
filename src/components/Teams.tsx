import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Dashboard";
import { Tilt3D } from "./Tilt3D";
import { houses } from "@/lib/houses";

export function Teams() {
  const formatName = (name: string) => name.startsWith("Dr. ") ? "Dr. " + name.substring(4).toUpperCase() : name.toUpperCase();

  return (
    <section id="teams" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Six Houses"
          title="Houses of SIMMAM"
          subtitle="Six legendary houses. One arena. Every point earned belongs to one of these six."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {houses.map((h) => (
            <Tilt3D key={h.short} max={6}>
              <div
                className="house-card relative overflow-hidden glass-strong rounded-3xl p-8 md:p-10 h-full"
                style={{ borderColor: h.accent + "66", background: "linear-gradient(145deg, #1a1a1a, #222)" }}
              >
                {/* Internal 3D Glow (contained by overflow-hidden) */}
                <div
                  className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[60px] opacity-40 pointer-events-none"
                  style={{ background: h.glow }}
                />

                {/* Social Floaters — gold-themed */}
                <div
                  style={{
                    position: "absolute",
                    top: 25,
                    right: 25,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    zIndex: 50,
                    pointerEvents: "auto",
                    transform: "translateZ(60px)",
                  }}
                >
                  {h.instagram && (
                    <a
                      href={h.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-gold/30 flex items-center justify-center transition-all duration-300 hover:border-gold hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group/social"
                      aria-label={`${h.name} Instagram`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold/80 group-hover/social:text-gold transition-colors">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  )}
                  {h.whatsapp && (
                    <a
                      href={h.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-gold/30 flex items-center justify-center transition-all duration-300 hover:border-gold hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group/social"
                      aria-label={`${h.name} WhatsApp`}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gold/80 group-hover/social:text-gold transition-colors">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="relative flex items-center gap-4 mb-6">
                  <div
                    className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-black border-2 overflow-hidden"
                    style={{
                      borderColor: h.accent,
                      boxShadow: `0 0 32px ${h.glow}`,
                    }}
                  >
                    <img src={h.logo} alt={`${h.name} crest`} className={`w-full h-full object-cover ${h.logoScale || "scale-125"}`} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] text-foreground/50">
                      HOUSE OF {h.element.toUpperCase()}
                    </div>
                    <div className="font-display text-3xl font-bold text-gradient-gold mt-0.5">
                      {h.name}
                    </div>
                    <div className="text-xs italic text-foreground/60 mt-1">{h.tagline}</div>
                    <div className="mt-2 text-xs text-foreground/60">
                      2025 Score:{" "}
                      <span className="text-gold font-semibold">
                        {h.name === "Agniyas" ? "45,900" : h.points2025.toLocaleString()} pts
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mb-6 text-sm text-foreground/70 leading-relaxed">
                  {h.about}
                </div>

                <div className="relative mb-4 glass rounded-xl px-4 py-3 flex items-center justify-between text-sm">
                  <div>
                    <div className="text-[10px] tracking-[0.25em] text-foreground/50 mb-2">
                      FACULTY CAPTAINS
                    </div>
                    <div className="text-foreground/90 flex flex-col gap-1">
                      {h.faculty.map((f, i) => (
                        <div key={i} className="font-medium">{formatName(f)}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative grid sm:grid-cols-2 gap-4">
                  <PersonCard
                    role="Students Captain"
                    name={formatName(h.captain.name)}
                    phone={h.captain.phone}
                  />
                  <PersonCard
                    role="Students Vice Captain"
                    name={formatName(h.vice.name)}
                    phone={h.vice.phone}
                  />
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>

        <div className="mt-12 text-center">
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

function PersonCard({
  role,
  name,
  phone,
}: {
  role: string;
  name: string;
  phone: string;
}) {
  return (
    <div className="relative glass rounded-2xl p-4 overflow-hidden h-full flex flex-col justify-center">
      <div className="flex items-center">
        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.15em] text-gold/80 leading-tight mb-1">{role.toUpperCase()}</div>
          <div className="font-semibold truncate text-foreground/90">{name}</div>
        </div>
      </div>
      {phone && (
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80"
        >
          <Phone className="w-3 h-3" /> {phone}
        </a>
      )}
    </div>
  );
}
