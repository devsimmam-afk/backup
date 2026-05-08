export type House = {
  name: string;
  tagline: string;
  short: string;
  element: string;
  points2025: number;
  pointsChange?: number;
  captain: { name: string; phone: string; year: string };
  vice: { name: string; phone: string; year: string };
  faculty: { name: string; phone: string };
  about: string;
  accent: string;
  glow: string;
  gradient: string;
  breakdown: { winners: number; runners: number; participation: number };
};

export const houses: House[] = [
  {
    name: "Agniyas",
    tagline: "The Flame Keepers",
    short: "AGN",
    element: "Fire",
    points2025: 45900,
    pointsChange: 1200,
    captain: { name: "Shaik abdul Hussain", phone: "+91 98765 43219", year: "Final Year" },
    vice: { name: "Charan Teja", phone: "+91 98765 43220", year: "Third Year" },
    faculty: { name: "Dr. P. Lakshmi", phone: "+91 98765 43221" },
    about: "Reigning champions of SIMMAM 2025. Born of fire. Agniyas ignite every stage with passion that refuses to fade.",
    accent: "#FF6B00",
    glow: "#FF6B00",
    gradient: "linear-gradient(135deg, #FF6B00, #FF3D00)",
    breakdown: { winners: 0, runners: 0, participation: 0 },
  },
  {
    name: "Dhronas",
    tagline: "The Master Strategists",
    short: "DHR",
    element: "Wisdom",
    points2025: 0,
    captain: { name: "G.sai charitha", phone: "", year: "Final Year" },
    vice: { name: "Libika", phone: "", year: "Third Year" },
    points2025: 23660,
    pointsChange: -300,
    captain: { name: "G.sai charitha", phone: "+91 98765 43216", year: "Final Year" },
    vice: { name: "Libhika", phone: "+91 98765 43217", year: "Third Year" },
    faculty: { name: "Dr. K. Vasanthi", phone: "+91 98765 43218" },
    about: "Strategy in every step. Dhronas plan, execute, and conquer with calculated precision.",
    accent: "#B90000",
    glow: "#B90000",
    gradient: "linear-gradient(135deg, #B90000, #7A0000)",
    breakdown: { winners: 0, runners: 0, participation: 0 },
  },
  {
    name: "Marutas",
    tagline: "The Wind Riders",
    short: "MAR",
    element: "Wind",
    points2025: 28420,
    pointsChange: 450,
    captain: { name: "Harshitha G", phone: "+91 98765 43222", year: "Final Year" },
    vice: { name: "Aravind khanna", phone: "+91 98765 43223", year: "Third Year" },
    faculty: { name: "Dr. A. Mohan", phone: "+91 98765 43224" },
    about: "Swift as the storm wind. Marutas move where others freeze, dance where others stand.",
    accent: "#FFD700",
    glow: "#FFD700",
    gradient: "linear-gradient(135deg, #FFD700, #FFB300)",
    breakdown: { winners: 0, runners: 0, participation: 0 },
  },
  {
    name: "Rudras",
    tagline: "The Storm Bringers",
    short: "RUD",
    element: "Storm",
    points2025: 45140,
    pointsChange: 800,
    captain: { name: "Nithish Kumar P", phone: "+91 98765 43210", year: "Final Year" },
    vice: { name: "Sivadharshan M", phone: "+91 98765 43211", year: "Third Year" },
    faculty: { name: "Dr. R. Sundaram", phone: "+91 98765 43212" },
    about: "Rudras strike with thunder — masters of stage, sport, and spirit.",
    accent: "#E0E0E0",
    glow: "#E0E0E0",
    gradient: "linear-gradient(135deg, #FFFFFF, #B0BEC5)",
    breakdown: { winners: 0, runners: 0, participation: 0 },
  },
  {
    name: "Suryas",
    tagline: "The Solar Vanguard",
    short: "SUR",
    element: "Sun",
    points2025: 31460,
    pointsChange: -150,
    captain: { name: "Thanveer Aashif N", phone: "+91 98765 43213", year: "Final Year" },
    vice: { name: "Manoj", phone: "+91 98765 43214", year: "Third Year" },
    faculty: { name: "Dr. S. Manikandan", phone: "+91 98765 43215" },
    about: "Radiant, relentless, regal. Suryas blaze through every event with golden brilliance.",
    accent: "#8A2BE2",
    glow: "#8A2BE2",
    gradient: "linear-gradient(135deg, #8A2BE2, #4B0082)",
    breakdown: { winners: 0, runners: 0, participation: 0 },
  },
  {
    name: "Vajras",
    tagline: "The Thunderbolts",
    short: "VAJ",
    element: "Thunder",
    points2025: 22960,
    pointsChange: 600,
    captain: { name: "Rahul perumal M", phone: "+91 98765 43225", year: "Final Year" },
    vice: { name: "Theja Sri", phone: "+91 98765 43226", year: "Third Year" },
    faculty: { name: "Dr. T. Bhaskar", phone: "+91 98765 43227" },
    about: "Unbreakable. Unstoppable. Vajras hit hard and rise harder — diamonds forged in lightning.",
    accent: "#50C878",
    glow: "#50C878",
    gradient: "linear-gradient(135deg, #50C878, #008000)",
    breakdown: { winners: 0, runners: 0, participation: 0 },
  },
];
