import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Tilt3D } from "./Tilt3D";
import { X, Search } from "lucide-react";
import { SectionHeader } from "./Dashboard";
import { allEvents, type Event } from "../lib/eventsData";

const categories = ["All", "Tech", "Non-Tech", "Sports"];

export function Events() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleRegister = (eventName: string) => {
    setSelectedEvent(null);
    navigate({ to: "/register", search: { event: eventName } });
  };

  const list = allEvents.filter((e) => {
    const matchesCategory = filter === "All" || e.mainCategory === filter;
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="events" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Events"
          title="48 Battlegrounds. One Crown."
          subtitle="From algorithmic showdowns to runway spectacles — SIMMAM 2026 has a stage for every spark."
        />

        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-foreground/40" />
          </div>
          <input
            type="text"
            placeholder="Search events, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition text-foreground placeholder:text-foreground/40"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs tracking-wider transition ${
                filter === c
                  ? "bg-gradient-to-r from-[var(--crimson)] to-[var(--gold)] text-background font-semibold shadow-[var(--shadow-glow-red)]"
                  : "glass text-foreground/70 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {list.map((e, index) => (
            <Tilt3D key={`${e.name}-${e.category}-${index}`} max={10}>
              <div
                onClick={() => setSelectedEvent(e)}
                className="group relative glass rounded-2xl p-5 hover-lift overflow-hidden h-full cursor-pointer"
              >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl bg-[var(--gold)]/30 opacity-50 group-hover:opacity-90 transition" />
              <div className="relative flex items-start justify-between">
                <div className="p-3 rounded-xl bg-gold/10 text-gold neon-border group-hover:scale-110 transition-transform">
                  <e.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-[0.25em] text-foreground/50">
                  {e.category.toUpperCase()}
                </span>
              </div>
              <div className="relative mt-5">
                <div className="font-display text-xl font-bold text-foreground">{e.name}</div>
              </div>
              <button className="relative mt-5 w-full py-2.5 rounded-lg text-xs font-semibold border border-gold/30 text-gold hover:bg-gold/10 transition">
                View Rules & Register
              </button>
              </div>
            </Tilt3D>
          ))}
        </div>

        {/* Rules Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            />
            <div className="relative w-full max-w-lg bg-[#0a0515] border border-white/10 rounded-2xl p-6 md:p-8 animate-rise-in shadow-2xl">
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 bg-[var(--gold)] pointer-events-none" />
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gold/10 text-gold neon-border">
                  <selectedEvent.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{selectedEvent.name}</h3>
                  <p className="text-xs tracking-[0.2em] text-gold/80 uppercase">{selectedEvent.category}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-semibold text-foreground/80 border-b border-white/10 pb-2">Event Rules</h4>
                <ul className="space-y-3">
                  {selectedEvent.rules && selectedEvent.rules.length > 0 ? (
                    selectedEvent.rules.map((rule, i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/70">
                        <span className="text-gold mt-1">•</span>
                        <span>{rule}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-foreground/50 italic">No specific rules listed.</li>
                  )}
                </ul>
              </div>

              <button
                onClick={() => handleRegister(selectedEvent.name)}
                className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[var(--crimson)] to-[var(--gold)] text-background hover:shadow-[var(--shadow-glow-red)] transition-all"
              >
                Register for this Event
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
