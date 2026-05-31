import { useEffect, useState } from "react";
import { LionEmblem } from "./LionEmblem";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 spotlight" />
      <div className="relative text-center">
        <div className="flex justify-center">
          <LionEmblem size={360} />
        </div>
        <div className="mt-8 font-display text-3xl md:text-4xl text-gradient-fire animate-pulse">
          SIMMAM 2026
        </div>
        <div className="mt-2 text-[10px] tracking-[0.4em] text-gold/70">LOADING THE STAGE</div>
        <div className="mt-4 h-0.5 w-64 mx-auto rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[var(--crimson)] to-[var(--gold)] animate-[draw-bar_1.6s_ease-out_forwards] w-full" />
        </div>
      </div>
    </div>
  );
}
