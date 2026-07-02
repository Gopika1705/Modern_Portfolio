/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070d",
        "bg-soft": "#070b15",
        "bg-card": "#0b1120",
        "bg-card-2": "#0d1428",
        border: "rgba(148,163,184,0.14)",
        primary: "#eef2f8",
        secondary: "#8d97ab",
        tertiary: "#576079",
        accent: {
          cyan: "#22d3ee",
          purple: "#a855f7",
          green: "#34d399",
          pink: "#f472b6",
          teal: "#2dd4bf",
          amber: "#fbbf24",
          blue: "#60a5fa",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        sm: "10px",
      },
      keyframes: {
        gridDrift: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "46px 92px" },
        },
        ringPulse: {
          "0%, 100%": { boxShadow: "0 0 14px rgba(34,211,238,.45), inset 0 0 14px rgba(34,211,238,.12)" },
          "50%": { boxShadow: "0 0 26px rgba(34,211,238,.75), inset 0 0 20px rgba(34,211,238,.22)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        travel: {
          "0%": { top: "0%", opacity: 0 },
          "12%": { opacity: 1 },
          "88%": { opacity: 1 },
          "100%": { top: "100%", opacity: 0 },
        },
      },
      animation: {
        gridDrift: "gridDrift 50s linear infinite",
        ringPulse: "ringPulse 3.2s ease-in-out infinite",
        spin: "spin 18s linear infinite",
        spinFast: "spin 5.5s linear infinite",
        travel: "travel 2.6s linear infinite",
      },
    },
  },
  plugins: [],
};
