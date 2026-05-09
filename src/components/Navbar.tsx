import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import simats from "@/assets/simats-logo.png";
import { LionEmblem } from "./LionEmblem";

/* ─────────────────────────────────────────────
   Link definitions
───────────────────────────────────────────── */
const leftLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#dashboard", label: "Dashboard" },
  { href: "/#teams", label: "Teams" },
  { href: "/#leaderboard", label: "SIMMAM'25" },
];

const rightLinks = [
  { href: "/events", label: "Events" },
  { href: "/captains", label: "Crew" },
  { href: "/#archive", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const allLinks = [...leftLinks, ...rightLinks];

/* ─────────────────────────────────────────────
   Shared link style helpers
───────────────────────────────────────────── */
const desktopLink =
  "relative px-3 py-2 text-foreground/80 hover:text-gold transition-colors duration-200 group whitespace-nowrap text-sm";

const desktopUnderline =
  "absolute left-3 right-3 bottom-0.5 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300";

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Body-scroll lock while drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close drawer on Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* ══════════════════════════════════════
          STICKY HEADER BAR
      ══════════════════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          overflow: "hidden",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.78 0.16 80 / 0.15)" : "1px solid transparent",
          background: scrolled
            ? "oklch(0.10 0.02 25 / 0.85)"
            : "transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 1.5rem",
            position: "relative",
          }}
        >


          {/* ══ DESKTOP ROW — true 3-col CSS Grid ══
               1fr forces both nav columns to identical widths
               so the logo lands at the exact geometric centre. */}
          <div
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              height: scrolled ? "60px" : "72px",
              transition: "height 0.4s ease",
            }}
          >

            {/* ── Grid col 1 — SIMATS Logo & Left nav ── */}
            <div style={{ display: "flex", alignItems: "center", width: "100%", paddingRight: "1rem" }}>
              <a href="#home" className="shrink-0 group hidden xl:block mr-8">
                <img
                  src={simats}
                  alt="SIMATS Engineering"
                  className="h-9 xl:h-11 w-auto object-contain transition group-hover:scale-105"
                />
              </a>
              <nav
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                aria-label="Primary left navigation"
              >
                {leftLinks.map((l) => (
                  <a key={l.href} href={l.href} className={desktopLink}>
                    <span>{l.label}</span>
                    <span className={desktopUnderline} />
                  </a>
                ))}
              </nav>
            </div>

            {/* ── Grid col 2 — Logo (exact center) ── */}
            <a
              href="/#home"
              className="flex flex-col items-center group shrink-0"
              style={{ padding: "0 1.5rem", justifySelf: "center" }}
              aria-label="SIMMAM 2026 — go to home"
            >
              <LionEmblem size={scrolled ? 52 : 68} />
              <span
                className="font-display text-gradient-gold"
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.4em",
                  marginTop: "2px",
                  opacity: scrolled ? 0 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                SIMMAM • 2026
              </span>
            </a>

            {/* ── Grid col 3 — Right nav & Invisible Spacer ── */}
            <div style={{ display: "flex", alignItems: "center", width: "100%", paddingLeft: "1rem" }}>
              <nav
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                aria-label="Primary right navigation"
              >
                {rightLinks.map((l) => (
                  <a key={l.href} href={l.href} className={desktopLink}>
                    <span>{l.label}</span>
                    <span className={desktopUnderline} />
                  </a>
                ))}
              </nav>
              {/* Invisible spacer mirrors SIMATS logo width to guarantee perfect symmetry */}
              <div className="shrink-0 hidden xl:block ml-8" style={{ width: "160px" }} aria-hidden="true" />
            </div>
          </div>{/* end desktop grid */}

          {/* ══ MOBILE ROW — flex, SIMATS left, SIMMAM center, hamburger right ══ */}
          <div
            className="flex lg:hidden items-center justify-between"
            style={{
              /* fixed height — no shrink on mobile to keep touch targets large */
              height: "64px",
            }}
          >
            {/* Left: SIMATS Logo */}
            <a href="#home" className="flex items-center shrink-0">
              <img src={simats} alt="SIMATS" className="h-8 w-auto object-contain" />
            </a>

            {/* Center: SIMMAM Crest */}
            <a
              href="#home"
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group"
              aria-label="SIMMAM 2026 — go to home"
              onClick={closeMenu}
            >
              <LionEmblem size={scrolled ? 38 : 44} />
              <span
                className="font-display text-gradient-gold hidden sm:block"
                style={{ fontSize: "0.55rem", letterSpacing: "0.35em" }}
              >
                SIMMAM
              </span>
            </a>

            <div style={{ flex: 1 }} />

            <button
              onClick={() => setOpen((v) => !v)}
              className="glass"
              style={{
                padding: "0.6rem",
                borderRadius: "0.6rem",
                lineHeight: 0,
                cursor: "pointer",
              }}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              {open
                ? <X size={22} strokeWidth={2} />
                : <Menu size={22} strokeWidth={2} />
              }
            </button>
          </div>{/* end mobile row */}
        </div>
      </header>

      {/* ══════════════════════════════════════
          FULL-SCREEN MOBILE DRAWER OVERLAY
      ══════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 51,
          background: "oklch(0.05 0.01 25 / 0.70)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Drawer panel — slides in from the right */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 52,
          width: "min(340px, 88vw)",
          background: "oklch(0.09 0.02 25 / 0.97)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          borderLeft: "1px solid oklch(0.78 0.16 80 / 0.20)",
          /* translateX(100%) = exactly its own width — sits flush at viewport
             edge with no ghost scroll area on mobile WebKit */
          transform: open ? "translateX(0)" : "translateX(100%)",
          visibility: open ? "visible" : "hidden",
          transition: "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear " + (open ? "0s" : "0.38s"),
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid oklch(0.78 0.16 80 / 0.12)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              className="font-display text-gradient-gold"
              style={{ fontSize: "1.15rem", letterSpacing: "0.12em" }}
            >
              SIMMAM
            </span>
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "oklch(0.65 0.06 80)",
                marginTop: "2px",
              }}
            >
              2026 FESTIVAL
            </span>
          </div>

          <button
            onClick={closeMenu}
            className="glass"
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              lineHeight: 0,
              cursor: "pointer",
            }}
            aria-label="Close navigation menu"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Divider label */}
        <div
          style={{
            padding: "1.25rem 1.5rem 0.5rem",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            color: "oklch(0.55 0.06 80)",
            textTransform: "uppercase",
          }}
        >
          Navigation
        </div>

        {/* Link list */}
        <nav aria-label="Mobile navigation" style={{ padding: "0 0.75rem 1rem" }}>
          {allLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                padding: "0.9375rem 0.875rem", /* ≥15px top/bottom touch target */
                borderRadius: "0.75rem",
                color: "oklch(0.88 0.04 90)",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
                /* Staggered entrance handled via CSS animation-delay */
                animationDelay: open ? `${i * 40}ms` : "0ms",
              }}
              className="mobile-drawer-link"
            >
              {/* Index number */}
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.65rem",
                  color: "oklch(0.60 0.12 80)",
                  minWidth: "1.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div style={{ flex: 1 }} />
        <div
          style={{
            padding: "1.25rem 1.5rem",
            borderTop: "1px solid oklch(0.78 0.16 80 / 0.10)",
            fontSize: "0.7rem",
            color: "oklch(0.45 0.04 80)",
            letterSpacing: "0.08em",
            textAlign: "center",
          }}
        >
          SIMATS ENGINEERING • SIMMAM 2026
        </div>
      </div>

      {/* Drawer link hover + entrance styles injected once */}
      <style>{`
        .mobile-drawer-link:hover {
          background: oklch(0.78 0.16 80 / 0.08);
          color: oklch(0.88 0.17 82);
          transform: translateX(4px);
        }
        @keyframes drawer-link-in {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
