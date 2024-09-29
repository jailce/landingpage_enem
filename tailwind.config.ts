import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'secondary': '#7e5bef',
        'base': '#333',
        'neutral': '#ff7849',
        'neutral-light': '#13ce66',
        'neutral-dark': '#ffc82c',

      },
    },
  },
  plugins: [],
};
export default config;
