import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens:{
       "xs":{"min":"360px", "max":"740px"},
       
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#000000",
        secondary:"#FFFFFF"
      },
    },
  },
  plugins: [],
};
export default config;
