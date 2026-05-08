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
      { title: "Captains & Vice Captains — SIMMAM 2026" },
      {
        name: "description",
        content:
          "Meet the captains, vice captains and faculty coordinators of all six SIMMAM 2026 houses — Rudras, Suryas, Dronas, Agniyas, Marutas and Vajraas.",
      },
      { property: "og:title", content: "Captains of SIMMAM 2026" },
      {
        property: "og:description",
        content: "The leaders of Rudras, Suryas, Dronas, Agniyas, Marutas and Vajraas.",
      },
    ],
  }),
  component: CaptainsPage,
});

function CaptainsPage() {
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
              Captains & Vice Captains
            </h1>
            <p className="mt-4 text-foreground/70">
              The faces leading every house into battle. Six captains. Six right hands. One
              SIMMAM.
            </p>
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
                      className="w-16 h-16 rounded-2xl grid place-items-center texture-overlay overflow-hidden"
                      style={{
                        background: h.gradient,
                        boxShadow: `0 0 32px ${h.glow}`,
                      }}
                    >
                      <Shield className="w-7 h-7 text-background/90" />
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

                  <div className="relative grid sm:grid-cols-2 gap-4">
                    <PersonCard
                      role="Captain"
                      name={h.captain.name}
                      year={h.captain.year}
                      phone={h.captain.phone}
                      accent={h.accent}
                      gradient={h.gradient}
                    />
                    <PersonCard
                      role="Vice Captain"
                      name={h.vice.name}
                      year={h.vice.year}
                      phone={h.vice.phone}
                      accent={h.accent}
                      gradient={h.gradient}
                    />
                  </div>

                  <div className="relative mt-4 glass rounded-xl px-4 py-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="text-[10px] tracking-[0.25em] text-foreground/50">
                        FACULTY COORDINATOR
                      </div>
                      <div className="text-foreground/90">{h.faculty.name}</div>
                    </div>
                    <a
                      href={`tel:${h.faculty.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {h.faculty.phone}
                    </a>
                  </div>
                </div>
              </Tilt3D>
            ))}
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
  year,
  phone,
  accent,
}: {
  role: string;
  name: string;
  year: string;
  phone: string;
  accent: string;
  gradient: string;
}) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="relative glass rounded-2xl p-4 overflow-hidden">
      <div className="flex items-center gap-3">
        <div
          className="w-14 h-14 rounded-full grid place-items-center font-display font-bold text-lg shrink-0 texture-overlay overflow-hidden"
          style={{
            background: gradient,
            boxShadow: `0 0 20px ${accent}80`,
          }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.3em] text-gold/80">{role.toUpperCase()}</div>
          <div className="font-semibold truncate">{name}</div>
          <div className="text-xs text-foreground/55">{year}</div>
        </div>
      </div>
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="mt-3 inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/80"
      >
        <Phone className="w-3 h-3" /> {phone}
      </a>
    </div>
  );
}
