/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          cyan: "#00f0ff",
          purple: "#7b2fff",
          pink: "#ff2d78",
          green: "#00ff88",
          gold: "#ffd700",
          // Dark palette
          bg: "#020408",
          surface: "#060d16",
          text: "#e8f4f8",
          muted: "#648a9f",
          border: "rgba(0, 240, 255, 0.15)",
          // Light palette
          bgLight: "#f4f7f6",
          surfaceLight: "rgba(255, 255, 255, 0.7)",
          textLight: "#0b132b",
          mutedLight: "#5c6b73",
          borderLight: "rgba(123, 47, 255, 0.12)",
        }
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.1)",
        glowPurple: "0 0 20px rgba(123, 47, 255, 0.4), 0 0 60px rgba(123, 47, 255, 0.1)",
        glowPink: "0 0 20px rgba(255, 45, 120, 0.4), 0 0 60px rgba(255, 45, 120, 0.1)",
        glowGreen: "0 0 20px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
}
