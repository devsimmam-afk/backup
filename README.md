# 🦁 SIMMAM 2026 — The Legacy Continues

Welcome to the official repository of **SIMMAM 2026**, a premium web experience for the grand inter-house cultural and sports festival.

[SIMMAM](https://github.com/ssesimmam/Simmam-Web/blob/264882c11dad4e96ad54458de1ac860e5f7c1b62/src/assets/simmam-lion.png)

---

## 🚀 Tech Stack

This project is built with a modern, high-performance stack designed for speed, aesthetics, and developer experience.

### **Core Frameworks**
- ![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
- ![TanStack Start](https://img.shields.io/badge/TanStack_Start-Beta-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### **Styling & UI**
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
- ![Radix UI](https://img.shields.io/badge/Radix_UI-Primitive-6E3AEE?style=for-the-badge&logo=radix-ui&logoColor=white)
- ![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-F1C40F?style=for-the-badge&logo=lucide&logoColor=black)
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### **State & Routing**
- ![TanStack Router](https://img.shields.io/badge/TanStack_Router-1.168-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)
- ![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.83-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)

---

## 🛠 Project Structure

```mermaid
graph TD
    Root[Simmam-Web] --> Src[src]
    Root --> Public[public]
    Root --> PDF[pdf]
    
    Src --> Components[components]
    Src --> Routes[routes]
    Src --> Lib[lib]
    Src --> Hooks[hooks]
    
    Components --> UI[Common UI Components]
    Components --> Specific[Page Specific Sections]
    
    Routes --> Home[index.tsx]
    Routes --> Captains[captains.tsx]
    Routes --> Scoring[live.tsx]
    
    Public --> Gallery[gallery]
    Public --> Logos[house-logos]
    
    style Root fill:#d4af37,stroke:#333,stroke-width:2px,color:#000
    style Src fill:#1a1a1a,stroke:#d4af37,stroke-width:1px,color:#fff
```

### Key Directories:
- `src/components`: Reusable UI components (Navbar, Footer, Glassmorphic cards).
- `src/routes`: Application pages managed by TanStack Router.
- `src/lib`: Shared utilities, types, and house data constants.
- `public/`: Static assets including high-resolution house crests and gallery images.

---

## 💎 The Elite Crew — Web Development Team

The digital manifestation of SIMMAM 2026 is brought to life by this dedicated team of developers and architects.

| Name | Role | Contact |
| :--- | :--- | :--- |
| **Sasvanthu G** | 👑 Team Lead | [+91 86108 73714](tel:+918610873714) |
| **Moniga V** | 🏗 Technical Architect | [+91 63791 92435](tel:+916379192435) |
| **Roshini R** | 📊 Product Analyst | [+91 86105 99005](tel:+918610599005) |
| **Suvedhan G** | 💻 Full-Stack Developer | [+91 90422 98646](tel:+919042298646) |
| **Sudharsan R K** | 🛠 Software Developer | [+91 63799 96328](tel:+916379996328) |

### Support Team
- **Deepa preya H**
- **Swetha C**

---

## ✨ Features

- **3D Interactive Elements**: Powered by custom Tilt3D components for a premium feel.
- **Glassmorphic UI**: Modern aesthetic using backdrop blurs and subtle gradients.
- **Real-time Scoring Dashboard**: Visualized house standings with dynamic progress bars.
- **Responsive Gallery**: Optimized image mosaic showing the legacy of past years.
- **Performance Optimized**: Leveraging Vite and TanStack Start for lightning-fast loads.

---

## 🛠 Getting Started

1. **Install Dependencies**:
   ```bash
   bun install
   # or
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📜 License

**© 2026 SIMMAM. All Rights Reserved.**
This project is proprietary and built exclusively for the SIMMAM 2026 event. Unauthorized distribution or reproduction is prohibited.

---

<p align="center">
  Built with ❤️ by the SIMMAM Web Team
</p>
