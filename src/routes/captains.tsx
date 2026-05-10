import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Particles } from "@/components/Particles";
import { Tilt3D } from "@/components/Tilt3D";
import { houses } from "@/lib/houses";

export const Route = createFileRoute("/captains")({
  head: () => ({
    meta: [
      { title: "The Elite Crew — SIMMAM 2026" },
      {
        name: "description",
        content:
          "Meet the crew and faculty captains of all six SIMMAM 2026 houses — Rudras, Suryas, Dronas, Agniyas, Marutas and Vajraas.",
      },
      { property: "og:title", content: "The Elite Crew of SIMMAM 2026" },
      {
        property: "og:description",
        content: "The leaders of Rudras, Suryas, Dronas, Agniyas, Marutas and Vajraas.",
      },
    ],
  }),
  component: CaptainsPage,
});

function CaptainsPage() {
  const formatName = (name: string) => name.startsWith("Dr. ") ? "Dr. " + name.substring(4).toUpperCase() : name.toUpperCase();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Particles count={20} className="!fixed inset-0 -z-10" />

      <main className="relative pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-gold/80 hover:text-gold mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
                LEADERSHIP COUNCIL
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient-fire">
              The Elite Crew
            </h1>
          </div>

          {/* Core Team Section */}
          <div className="mb-24 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
                CORE TEAM
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "A GOPI", role: "CULTURAL HEAD" },
                { name: "S.VAMSIDHAR REDDY", role: "SPORTS HEAD (BOYS)" },
                { name: "SUJITHA REDDY", role: "SPORTS HEAD (GIRLS)" },
                { name: "M.THIRUVELAN", role: "INDOOR & ATHLETICS HEAD (BOYS)" },
                { name: "DIVYA TEJA", role: "INDOOR & ATHLETICS HEAD (GIRLS)" },
                { name: "MUKESH S", role: "TECH HEAD" },
                { name: "MADHAN S", role: "NON-TECH HEAD" },
                { name: "SARAH GLADY", role: "EXTERNAL AFFAIRS HEAD" }
              ].map((member) => (
                <div key={member.role} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] min-w-[200px]">
                  <div className="relative glass rounded-2xl p-5 flex flex-col items-center justify-center text-center h-full border border-white/5 hover:border-gold/30 transition-colors">
                    <div className="text-[10px] tracking-[0.15em] text-gold/80 mb-2">{member.role.toUpperCase()}</div>
                    <div className="font-semibold truncate w-full text-foreground/90">{formatName(member.name)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-8 mt-12">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
                CAPTAINS AND VICE CAPTAINS
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {houses.map((h) => (
              <Tilt3D key={h.short} max={6}>
                <div
                  className="relative glass-strong rounded-3xl p-6 md:p-8 overflow-hidden h-full"
                  style={{ borderColor: h.accent + "66" }}
                >
                  <div
                    className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-50"
                    style={{ background: h.glow }}
                  />

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
                      <div className="font-display text-3xl font-bold text-gradient-gold">
                        {h.name}
                      </div>
                      <div className="text-xs italic text-foreground/60">{h.tagline}</div>
                    </div>
                  </div>

                  <div className="relative mb-4 glass rounded-xl px-4 py-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="text-[10px] tracking-[0.25em] text-foreground/50 mb-2">
                        FACULTY CAPTAINS
                      </div>
                      <div className="text-foreground/90 flex flex-col gap-1">
                        {h.faculty.map((f, i) => (
                          <div key={i}>{formatName(f)}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative grid sm:grid-cols-2 gap-4">
                    <PersonCard
                      role="Students Captain"
                      name={formatName(h.captain.name)}
                      phone={h.captain.phone}
                      accent={h.accent}
                      gradient={h.gradient}
                    />
                    <PersonCard
                      role="Students Vice Captain"
                      name={formatName(h.vice.name)}
                      phone={h.vice.phone}
                      accent={h.accent}
                      gradient={h.gradient}
                    />
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>

          {/* Web Development Team Section */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
                WEB DEVELOPMENT TEAM
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Sasvanthu G", role: "Team Lead" },
                { name: "Moniga V", role: "Technical Architect" },
                { name: "Roshini R", role: "Product Analyst" },
                { name: "Suvedhan G", role: "Full-Stack Developer" },
                { name: "Sudharsan R K", role: "Software Developer" }
              ].map((member) => (
                <div key={member.name} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-auto lg:flex-1 min-w-[200px] max-w-[280px]">
                  <div className="relative glass rounded-2xl p-5 flex flex-col items-center justify-center text-center h-full border border-white/5 hover:border-gold/30 transition-colors">
                    <div className="text-[10px] tracking-[0.15em] text-gold/80 mb-2">{member.role.toUpperCase()}</div>
                    <div className="font-semibold truncate w-full text-foreground/90">{formatName(member.name)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PersonCard({
  role,
  name,
  phone,
  accent,
  gradient,
}: {
  role: string;
  name: string;
  phone: string;
  accent: string;
  gradient: string;
}) {
  return (
    <div className="relative glass rounded-2xl p-4 overflow-hidden">
      <div className="flex items-center">
        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.15em] text-gold/80 leading-tight mb-1">{role.toUpperCase()}</div>
          <div className="font-semibold truncate">{name}</div>
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
