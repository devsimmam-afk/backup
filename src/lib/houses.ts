export type House = {
  name: string;
  tagline: string;
  short: string;
  element: string;
  points2025: number;
  pointsChange?: number;
  captain: { name: string; phone: string; instagram?: string };
  vice: { name: string; phone: string; instagram?: string };
  faculty: string[];
  about: string;
  accent: string;
  glow: string;
  gradient: string;
  breakdown: { winners: number; runners: number; participation: number };
  logo: string;
  logoScale?: string;
  isOriginalShape?: boolean;
  instagram?: string;
  whatsapp?: string;
};

export const houses: House[] = [
  {
    name: "Agniyas",
    tagline: "",
    short: "AGN",
    element: "Fire",
    points2025: 45900,
    pointsChange: 1200,
    captain: { name: "Shaik Abdul Hussain", phone: "+91 99941 07450" },
    vice: { name: "Charan Teja", phone: "+91 90309 18090" },
    faculty: [
      "Dr. S. LEONI SHARMILA",
      "Dr. M. PRABHAHARAN",
      "Dr. D. KAVITHA"
    ],
    about: "Reigning champions of SIMMAM 2025. Born of fire. Agniyas ignite every stage with passion that refuses to fade.",
    accent: "#FF6B00",
    glow: "#FF6B00",
    gradient: "linear-gradient(135deg, #FF6B00, #FF3D00)",
    breakdown: { winners: 0, runners: 0, participation: 1260 },
    logo: "/teams 26/agniya-26.PNG",
    logoScale: "scale-110",
    isOriginalShape: true,
    instagram: "https://www.instagram.com/agniyas_2k26/",
    whatsapp: "https://chat.whatsapp.com/EctoGVgsMaCIT8iaKUvyAj",
  },
  {
    name: "Dhronas",
    tagline: "",
    short: "DHR",
    element: "Wisdom",
    points2025: 23660,
    pointsChange: -300,
    captain: { name: "Libika", phone: "+91 90923 02052" },
    vice: { name: "G. Sai Charitha", phone: "+91 63054 03861" },
    faculty: [
      "Dr. A. GAYATHRI",
      "Dr. R. BALAMANIGANDAN",
      "Dr. J. SAMUEL SIMRON RAJKUMAR"
    ],
    about: "Strategy in every step. Dhronas plan, execute, and conquer with calculated precision.",
    accent: "#B90000",
    glow: "#B90000",
    gradient: "linear-gradient(135deg, #B90000, #7A0000)",
    breakdown: { winners: 0, runners: 0, participation: 1440 },
    logo: "/teams 26/dronas 26.png",
    logoScale: "scale-110",
    isOriginalShape: true,
    instagram: "https://www.instagram.com/dronas_simmam_2k26/",
    whatsapp: "https://chat.whatsapp.com/JsziSy6aBgPA55K2efUA30",
  },
  {
    name: "Marutas",
    tagline: "",
    short: "MAR",
    element: "Wind",
    points2025: 28420,
    pointsChange: 450,
    captain: { name: "Harshitha G", phone: "+91 90140 43741" },
    vice: { name: "Aravind Khanna", phone: "+91 84386 98334" },
    faculty: [
      "Dr. V. SHEEJA KUMARI",
      "Dr. S. VADIVEL",
      "Mr. S. GOWRI SHANKAR"
    ],
    about: "Swift as the storm wind. Marutas move where others freeze, dance where others stand.",
    accent: "#FFD700",
    glow: "#FFD700",
    gradient: "linear-gradient(135deg, #FFD700, #FFB300)",
    breakdown: { winners: 0, runners: 0, participation: 1460 },
    logo: "/teams 26/marutas26.png",
    logoScale: "scale-110",
    isOriginalShape: true,
    instagram: "https://www.instagram.com/marutas_2026/",
    whatsapp: "https://chat.whatsapp.com/BBjJjQjtefmHYjZOpxl52x",
  },
  {
    name: "Rudras",
    tagline: "",
    short: "RUD",
    element: "Storm",
    points2025: 45140,
    pointsChange: 800,
    captain: { name: "Nithish Kumar P", phone: "+91 82207 37003" },
    vice: { name: "Sivadharshan M", phone: "+91 91599 51478" },
    faculty: [
      "Dr. T. P. ANITHAASHRI",
      "Dr. M. ARUN",
      "Dr. S. AROCKIA JAYADHAS"
    ],
    about: "Rudras strike with thunder — masters of stage, sport, and spirit.",
    accent: "#E0E0E0",
    glow: "#E0E0E0",
    gradient: "linear-gradient(135deg, #FFFFFF, #B0BEC5)",
    breakdown: { winners: 0, runners: 0, participation: 860 },
    logo: "/teams 26/rudras26.png",
    logoScale: "scale-110",
    isOriginalShape: true,
    instagram: "https://www.instagram.com/rudras_2026/",
    whatsapp: "https://chat.whatsapp.com/EU0IKrCZLA5ChJAmSAwVsb",
  },
  {
    name: "Suryas",
    tagline: "",
    short: "SUR",
    element: "Sun",
    points2025: 31460,
    pointsChange: -150,
    captain: { name: "Thanveer Aashif N", phone: "+91 93457 11740" },
    vice: { name: "Manoj", phone: "+91 93908 94487" },
    faculty: [
      "Dr. R. JEENA",
      "Dr. V.R.VIMAL",
      "Dr. M. PRAKASH"
    ],
    about: "Radiant, relentless, regal. Suryas blaze through every event with golden brilliance.",
    accent: "#8A2BE2",
    glow: "#8A2BE2",
    gradient: "linear-gradient(135deg, #8A2BE2, #4B0082)",
    breakdown: { winners: 0, runners: 0, participation: 1980 },
    logo: "/teams 26/suryas 26.PNG",
    logoScale: "scale-110",
    isOriginalShape: true,
    instagram: "https://www.instagram.com/suryas_2026/",
    whatsapp: "https://chat.whatsapp.com/JibjI54UQOK3mr1loPgy9N",
  },
  {
    name: "Vajras",
    tagline: "",
    short: "VAJ",
    element: "Thunder",
    points2025: 22960,
    pointsChange: 600,
    captain: { name: "Rahul Perumal M", phone: "+91 98412 01989" },
    vice: { name: "Theja Sri", phone: "+91 94900 31377" },
    faculty: [
      "Dr. S. MAHABOOB BASHA",
      "Dr. M. NAGARAJ",
      "Dr. K. THINAKARAN"
    ],
    about: "Unbreakable. Unstoppable. Vajras hit hard and rise harder — diamonds forged in lightning.",
    accent: "#50C878",
    glow: "#50C878",
    gradient: "linear-gradient(135deg, #50C878, #008000)",
    breakdown: { winners: 0, runners: 0, participation: 790 },
    logo: "/teams 26/vajras-26.png",
    logoScale: "scale-110",
    isOriginalShape: true,
    instagram: "https://www.instagram.com/vajras_2026/",
    whatsapp: "https://chat.whatsapp.com/HtQczeqqEqdANGwnyu95oG",
  },
];
