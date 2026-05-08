import { useState, useEffect } from "react";

export function Particles({ count = 30, className = "" }: { count?: number; className?: string }) {
  type ParticleItem = {
    id: number;
    left: number;
    top: number;
    size: number;
    delay: number;
    duration: number;
    gold: boolean;
  };

  const [items, setItems] = useState<ParticleItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generatedItems = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 6,
      duration: Math.random() * 6 + 6,
      gold: Math.random() > 0.5,
    }));
    setItems(generatedItems);
    setMounted(true);
  }, [count]);

  if (!mounted || items.length === 0) {
    return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} />;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-float-slow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.gold ? "oklch(0.88 0.18 88)" : "oklch(0.62 0.27 25)",
            boxShadow: p.gold
              ? "0 0 12px oklch(0.88 0.18 88 / 0.8)"
              : "0 0 12px oklch(0.62 0.27 25 / 0.8)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
