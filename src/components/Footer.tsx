import { Facebook, Globe, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { eventsRedirectHref } from "@/lib/navRedirects";
import { LionEmblem } from "./LionEmblem";

export function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-10 overflow-hidden border-t border-[var(--glass-border)]">
      {/* watermark lion */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
        <LionEmblem size={520} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LionEmblem size={64} />
              <div>
                <div className="font-display text-2xl text-gradient-fire font-bold">SIMMAM 2026</div>
                <div className="text-[10px] tracking-[0.3em] text-gold/70">
                  SIMATS ENGINEERING CULTURALS
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/65 max-w-md leading-relaxed">
              A National-level Engineering Cultural Fest hosted by SIMATS Engineering.
              Where every department becomes a tribe, and every stage becomes a story.
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              <a
                href="https://www.instagram.com/ssesimam/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full glass text-gold hover:text-gold/80 hover:scale-110 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/SSESaveetha/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-full glass text-gold hover:text-gold/80 hover:scale-110 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://simatsengineering.com/culturals"
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="p-2.5 rounded-full glass text-gold hover:text-gold/80 hover:scale-110 transition"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="tel:+919345877019"
                aria-label="Phone"
                className="p-2.5 rounded-full glass text-gold hover:text-gold/80 hover:scale-110 transition inline-flex items-center justify-center"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.3em] text-gold/80 mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {["Home", "Teams", "Events", "Gallery", "Live Scores"].map((l) => (
                <li key={l}>
                  <a
                    href={
                      l === "Events"
                        ? eventsRedirectHref
                        : l === "Gallery"
                        ? "/#archive"
                        : `#${l.toLowerCase().replace(" ", "")}`
                    }
                    className="hover:text-gold transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-[0.3em] text-gold/80 mb-4">REACH US</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                SIMATS Engineering Campus, Chennai, Tamil Nadu
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:simmam2026@gmail.com" className="hover:text-gold transition">
                  simmam2026@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-gold/80 text-xs tracking-wider">PRESIDENT</span>
                </div>
                <a href="tel:+919345877019" className="hover:text-gold transition pl-6">
                  +91 93458 77019 (Suriya B)
                </a>
                
                <div className="flex items-center gap-2 mt-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-gold/80 text-xs tracking-wider">SUPPORT TEAM</span>
                </div>
                <a href="tel:+916369118546" className="hover:text-gold transition pl-6">
                  +91 63691 18546 (Deepa Preya H)
                </a>
                <a href="tel:+916374802604" className="hover:text-gold transition pl-6">
                  +91 63748 02604 (Swetha C)
                </a>

              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <p>© 2026 SIMATS Engineering. All rights reserved.</p>
          <p className="tracking-[0.3em]">UNLEASH • UNITE • CELEBRATE</p>
        </div>
      </div>
    </footer>
  );
}
