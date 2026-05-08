import { Calendar, Trophy, Zap } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Countdown } from "./Countdown";
import { LionEmblem } from "./LionEmblem";
import { Particles } from "./Particles";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Spotlight beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[120vh] origin-top animate-spotlight-sweep"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.78 0.16 80 / 0.35), transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[120vh] origin-top animate-spotlight-sweep"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.55 0.22 27 / 0.35), transparent 70%)",
            filter: "blur(40px)",
            animationDelay: "2s",
          }}
        />
      </div>

      <Particles count={40} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge & Social Floaters */}
        <div className="flex flex-row items-center justify-center gap-6 mb-8 animate-rise-in mx-auto w-fit max-w-full">
          <svg width="0" height="0" className="absolute">
            <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#f09433" offset="0%" />
              <stop stopColor="#e6683c" offset="25%" />
              <stop stopColor="#dc2743" offset="50%" />
              <stop stopColor="#cc2366" offset="75%" />
              <stop stopColor="#bc1888" offset="100%" />
            </linearGradient>
          </svg>

          <a
            href="https://www.instagram.com/ssesimam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300 drop-shadow-md hover:drop-shadow-lg"
          >
            <FaInstagram style={{ fill: "url(#instagram-gradient)" }} className="w-8 h-8" />
          </a>

          <div className="inline-flex items-center justify-center glass rounded-full px-5 py-2">
            <span className="text-xs md:text-sm tracking-[0.3em] text-white text-center">
              SIMATS ENGINEERING CULTURALS
            </span>
          </div>

          <a
            href="[Insert Link]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:scale-110 transition-transform duration-300 drop-shadow-md hover:drop-shadow-lg"
          >
            <FaWhatsapp className="w-8 h-8" />
          </a>
        </div>

        {/* Lion - large hero crest */}
        <div className="flex justify-center mb-2 animate-rise-in" style={{ animationDelay: ".1s" }}>
          <LionEmblem size={420} className="max-w-[80vw]" />
        </div>

        {/* Title */}
        <h1
          className="font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.95] font-black text-gradient-fire animate-rise-in -mt-6 md:-mt-10 relative z-10"
          style={{ animationDelay: ".2s" }}
        >
          SIMMAM
          <span className="block text-gradient-gold">2026</span>
        </h1>

        <p
          className="mt-6 text-base md:text-xl text-foreground/80 max-w-2xl mx-auto animate-rise-in"
          style={{ animationDelay: ".3s" }}
        >
          A national-level engineering culturals festival. Where talent ignites,
          departments unite, and excellence is celebrated.
        </p>

        <p
          className="mt-3 text-sm md:text-base shimmer-text font-display tracking-[0.2em] animate-rise-in"
          style={{ animationDelay: ".35s" }}
        >
          UNLEASH TALENT • UNITE DEPARTMENTS • CELEBRATE EXCELLENCE
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4 animate-rise-in"
          style={{ animationDelay: ".45s" }}
        >
          <a
            href="/events"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[var(--crimson)] to-[var(--crimson-glow)] text-white shadow-[var(--shadow-glow-red)] hover:scale-105 transition-transform"
          >
            <Zap className="w-4 h-4" />
            Register Now
            <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition" />
          </a>
          <a
            href="/#teams"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm glass-strong neon-border text-gold hover:bg-white/5 transition"
          >
            <Trophy className="w-4 h-4" />
            Explore Teams
          </a>
          <a
            href="/live-scores"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border border-gold/40 text-gold hover:bg-gold/10 transition"
          >
            <Calendar className="w-4 h-4" />
            Live Scores
          </a>
        </div>

        {/* Countdown */}
        <div className="mt-14 animate-rise-in" style={{ animationDelay: ".55s" }}>
          <p className="text-[10px] tracking-[0.4em] text-gold/70 mb-3">
            COUNTDOWN TO THE GRAND OPENING
          </p>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
