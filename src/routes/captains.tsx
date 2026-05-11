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

          {/* Leadership Council Section */}
          <div className="mb-20 text-center max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "SURIYA B", role: "PRESIDENT", phone: "9345877019" },
                { name: "Karthik K", role: "VICE PRESIDENT", phone: "9597164761" },
                { name: "Siri .N", role: "SECRETARY", phone: "8919385345" },
                { name: "S. Mohamed Shemar", role: "TREASURER", phone: "7092811416" },
                { name: "K. Nikhil", role: "JOINT SECRETARY", phone: "9110552253" },
                { name: "K Harshitha", role: "JOINT TREASURER", phone: "9248431123" }
              ].map((member) => (
                <div key={member.role} className="w-full">
                  <div className="relative glass rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full border border-[#d4af37] hover:bg-white/5 transition-colors">
                    <div className="text-xs md:text-sm tracking-[0.2em] text-gold mb-2 font-medium">{member.role}</div>
                    <div className="font-bold text-lg text-white truncate w-full">{formatName(member.name)}</div>
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80"
                      >
                        <Phone className="w-3 h-3" /> {member.phone}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secretaries Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
                DEPARTMENTAL SECRETARIES
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[
                { name: "Selvakumar K", role: "CULTURAL SECRETARY", phone: "7639072595" },
                { name: "Ch.Manikanta Yadav", role: "SPORTS SECRETARY", phone: "9381808022" },
                { name: "Ruso AR", role: "TECH SECRETARY", phone: "9751150111" },
                { name: "Bharath S", role: "NON-TECH SECRETARY", phone: "6379206320" },
                { name: "Suraj Alagupandi", role: "MEDIA SECRETARY", phone: "9843974396" },
                { name: "Siva Visagar R", role: "EXTERNAL AFFAIRS SECRETARY", phone: "6380920806" },
                { name: "HARIRAM J K", role: "PUBLICITY & MARKETING SECRETARY" },
                { name: "Likitha", role: "HOSPITALITY SECRETARY", phone: "9704200759" },
                { name: "D Navya Sree", role: "STUDENT AFFAIRS SECRETARY", phone: "9704200759" },
                { name: "LINGESH KUMAR V", role: "DISCIPLINARY SECRETARY", phone: "7358614501" }
              ].map((member) => (
                <div key={member.role} className="w-full">
                  <div className="relative glass rounded-2xl p-5 flex flex-col items-center justify-center text-center h-full border border-[#d4af37] hover:bg-white/5 transition-colors">
                    <div className="text-[10px] tracking-[0.15em] text-gold mb-2 font-medium">{member.role}</div>
                    <div className="font-bold text-white truncate w-full">{formatName(member.name)}</div>
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80"
                      >
                        <Phone className="w-3 h-3" /> {member.phone}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heads Section */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span className="text-[10px] md:text-xs tracking-[0.4em] text-gold/80">
                DEPARTMENTAL HEADS
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--gold)]" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[
                { name: "A GOPI", role: "CULTURAL HEAD" },
                { name: "S.vamsidhar reddy", role: "SPORTS HEAD (BOYS)" },
                { name: "SUJITHA REDDY", role: "SPORTS HEAD (GIRLS)" },
                { name: "M.Thiruvelan", role: "INDOOR & ATHLETICS HEAD (BOYS)" },
                { name: "DIVYA TEJA", role: "INDOOR & ATHLETICS HEAD (GIRLS)" },
                { name: "Mukesh S", role: "TECH HEAD" },
                { name: "MADHAN S", role: "NON-TECH HEAD" },
                { name: "Sarah glady", role: "EXTERNAL AFFAIRS HEAD" }
              ].map((member) => (
                <div key={member.role} className="w-full">
                  <div className="relative glass rounded-2xl p-5 flex flex-col items-center justify-center text-center h-full border border-[#d4af37] hover:bg-white/5 transition-colors">
                    <div className="text-[10px] tracking-[0.15em] text-gold mb-2 font-medium">{member.role}</div>
                    <div className="font-bold text-white truncate w-full">{formatName(member.name)}</div>
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
                  className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden h-full border transition-all duration-500 hover:shadow-2xl group"
                  style={{ 
                    background: `linear-gradient(135deg, ${h.accent}15 0%, transparent 100%), oklch(0.14 0.03 20 / 0.8)`,
                    borderColor: h.accent + "44",
                    boxShadow: `0 0 40px ${h.accent}15`
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: h.gradient }}
                  />

                  {/* Social Links */}
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
                        className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-gold/30 flex items-center justify-center transition-all duration-300 hover:border-gold hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group/social"
                        aria-label={`${h.name} Instagram`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold/80 group-hover/social:text-gold transition-colors">
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
                        className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-gold/30 flex items-center justify-center transition-all duration-300 hover:border-gold hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] group/social"
                        aria-label={`${h.name} WhatsApp`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gold/80 group-hover/social:text-gold transition-colors">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <div className="relative flex items-center gap-6 mb-10">
                    <div
                      className={`shrink-0 w-28 h-28 md:w-32 md:h-32 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 ${h.isOriginalShape ? "" : "bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl"}`}
                      style={h.isOriginalShape ? {} : {
                        boxShadow: `0 0 20px ${h.accent}33`,
                      }}
                    >
                      <img src={h.logo} alt={`${h.name} crest`} className={`w-full h-full object-contain ${h.isOriginalShape ? "drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" : "p-2"} ${h.logoScale || "scale-125"}`} />
                    </div>
                    
                    <div>
                      <div className="text-[10px] tracking-[0.3em] text-foreground/50 mb-1 uppercase">
                        House of {h.element}
                      </div>
                      <div className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                        {h.name}
                      </div>
                      <div className="text-xs italic text-foreground/60 leading-tight">{h.tagline}</div>
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
    <div 
      className="relative glass rounded-2xl p-5 overflow-hidden flex flex-col justify-between border-white/5 hover:border-white/10 transition-colors group/person"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover/person:opacity-5 transition-opacity duration-500"
        style={{ background: gradient }}
      />
      <div className="relative z-10">
        <div className="text-[10px] tracking-[0.15em] text-gold/80 leading-tight mb-2 font-medium">
          {role.toUpperCase()}
        </div>
        <div className="font-bold text-white group-hover/person:text-gold transition-colors">{name}</div>
        
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="mt-3 inline-flex items-center gap-2 text-xs text-gold/80 hover:text-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> {phone}
          </a>
        )}
      </div>
    </div>
  );
}
