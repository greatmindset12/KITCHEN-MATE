import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F4D3A",
          50: "#EAF1EC",
          100: "#D3E3D8",
          400: "#3F7A5C",
          600: "#26543F",
          700: "#1F4D3A",
          900: "#12291D",
        },
        leaf: {
          DEFAULT: "#3F7A5C",
          light: "#5C9A79",
          dark: "#2C5A42",
        },
        sage: {
          DEFAULT: "#A8C9B5",
          light: "#D3E5D9",
        },
        mist: "#F4F8F5",
        cream: "#FFFFFE",
        ink: "#20261F",
        muted: "#5B6B5F",
        gold: "#C08A2E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(31, 77, 58, 0.12)",
        card: "0 2px 12px -2px rgba(31, 77, 58, 0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        "leaf-texture":
          "radial-gradient(circle at 20% 20%, rgba(63,122,92,0.06) 0, transparent 45%), radial-gradient(circle at 80% 60%, rgba(200,138,46,0.05) 0, transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
