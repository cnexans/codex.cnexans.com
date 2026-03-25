import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{ts,tsx,md,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        body: "#222",
        link: "#1481b8",
        sidebar: {
          bg: "#29313d",
          border: "#3b4b5e",
          link: "#7aa0b8",
          hover: "#dee9ed",
        },
        callout: {
          axiom: {
            border: "#2e7d32",
            bg: "#f1f8f1",
          },
          definition: {
            border: "#e65100",
            bg: "#fff8f0",
          },
          theorem: {
            border: "#1565c0",
            bg: "#f0f4ff",
          },
          proof: {
            border: "#757575",
            bg: "#fafafa",
          },
        },
      },
      fontFamily: {
        serif: ["'Crimson Text'", "serif"],
        sans: ["'Source Sans 3'", "sans-serif"],
        mono: ["'Source Code Pro'", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
