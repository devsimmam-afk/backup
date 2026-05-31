import { useEffect, useState } from "react";
import { LionEmblem } from "./LionEmblem";

export function Loader() {
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setExiting(true);
    };

    const fallback = window.setTimeout(finish, 2000);
    const hardStop = window.setTimeout(() => setHidden(true), 3200);

    if (document.readyState === "complete") {
      window.requestAnimationFrame(finish);
    } else {
      window.addEventListener("load", finish, { once: true });
      window.addEventListener("DOMContentLoaded", finish, { once: true });
    }

    return () => {
      window.clearTimeout(fallback);
      window.clearTimeout(hardStop);
      window.removeEventListener("load", finish);
      window.removeEventListener("DOMContentLoaded", finish);
    };
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const remove = window.setTimeout(() => setHidden(true), 700);
    return () => window.clearTimeout(remove);
  }, [exiting]);

  if (hidden) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-[opacity,transform] duration-700 ${
        exiting
          ? "pointer-events-none opacity-0 -translate-y-8 scale-[0.99]"
          : "opacity-100 translate-y-0 scale-100"
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
