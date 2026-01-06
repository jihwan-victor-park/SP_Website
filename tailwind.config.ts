import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0a1628',
        'navy': '#1a2332',
        'dark-blue': '#1e3a5f',
        'medium-blue': '#2d4a6d',
        'accent-blue': '#4a90e2',
        'gold': '#d4af37',
        'silver': '#c0c0c0',
      },
    },
  },
  plugins: [],
};
export default config;
