import { Mail, Phone } from "lucide-react";
import { SectionHeader } from "./Dashboard";

const faculty = [
  { name: "Dr. R. Sundaram", role: "Chief Coordinator", dept: "CSE", phone: "+91 98765 11111", email: "sundaram@simats.edu" },
  { name: "Dr. S. Manikandan", role: "Cultural Lead", dept: "MECH", phone: "+91 98765 22222", email: "mani@simats.edu" },
  { name: "Dr. K. Vasanthi", role: "Events Director", dept: "ECE", phone: "+91 98765 33333", email: "vasanthi@simats.edu" },
  { name: "Dr. P. Lakshmi", role: "Tech Coordinator", dept: "IT", phone: "+91 98765 44444", email: "lakshmi@simats.edu" },
  { name: "Dr. A. Mohan", role: "Stage Manager", dept: "EEE", phone: "+91 98765 55555", email: "mohan@simats.edu" },
  { name: "Dr. T. Bhaskar", role: "Logistics Lead", dept: "CIVIL", phone: "+91 98765 66666", email: "bhaskar@simats.edu" },
];



export function Faculty() {
  return (
    <section id="faculty" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Faculty Captains"
          title="The Conductors of SIMMAM"
          subtitle="Mentors guiding every spotlight, every score, every standing ovation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {faculty.map((f) => (
            <div
              key={f.name}
              className="group relative glass rounded-2xl p-6 hover-lift overflow-hidden text-center"
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.78 0.16 80 / 0.3), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="font-display text-xl font-bold text-gradient-gold">{f.name}</div>
                <div className="text-xs tracking-[0.25em] text-foreground/55 mt-1">
                  {f.role.toUpperCase()} • {f.dept}
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 text-xs">
                  <a
                    href={`tel:${f.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-gold hover:text-gold/80"
                  >
                    <Phone className="w-3 h-3" /> Call
                  </a>
                  <a
                    href={`mailto:${f.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-gold hover:text-gold/80"
                  >
                    <Mail className="w-3 h-3" /> Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
