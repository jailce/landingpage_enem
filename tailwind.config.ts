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
        background1: 'var(--background1)',
        background2: 'var(--background2)',
        link: 'var(--link)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        textBase: 'var(--textBase)',

      },
    },
  },
  plugins: [],
};
export default config;
