import { useEffect, useState } from "react";

const TARGET = new Date("2026-03-15T09:00:00").getTime();

function diff() {
  const d = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    mins: Math.floor((d / 60000) % 60),
    secs: Math.floor((d / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return <div className="flex gap-3 md:gap-5 justify-center min-h-[80px]" />;
  }

  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Minutes", t.mins],
    ["Seconds", t.secs],
  ];

  return (
    <div className="flex gap-3 md:gap-5 justify-center">
      {items.map(([label, val]) => (
        <div key={label} className="relative">
          <div className="glass-strong neon-border rounded-2xl px-4 md:px-7 py-3 md:py-4 min-w-[78px] md:min-w-[110px] text-center">
            <div className="font-display text-3xl md:text-5xl font-bold text-gradient-gold tabular-nums">
              {String(val).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs tracking-[0.3em] text-gold/70 mt-1">
              {label.toUpperCase()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
