import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2A52",
        ink: "#081E3D",
        teal: "#1C93C7",
        cyan: "#35C2D6",
        mist: "#F5F7FA",
        "mist-2": "#EBF0F5",
        amber: "#E2A63B",
        line: "rgba(11,42,82,0.12)",
        "text-soft": "rgba(8,30,61,0.62)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(8, 30, 61, 0.18)",
        card: "0 4px 20px -4px rgba(8, 30, 61, 0.1)",
      },
      backgroundImage: {
        "teal-cyan": "linear-gradient(135deg, #1C93C7 0%, #35C2D6 100%)",
        "navy-glass":
          "linear-gradient(180deg, rgba(11,42,82,0.92) 0%, rgba(11,42,82,0.82) 100%)",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        dash: "dash 3s ease-in-out forwards",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
