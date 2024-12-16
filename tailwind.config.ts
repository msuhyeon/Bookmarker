import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1200px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "#292524",
        card: "#ec664a",
        genre: "#126dda",
      },
      container: {
        screens: {
          lg: "1200px",
        },
      },
      fontSize: {
        h1: "3.5rem",
        h2: "2.5rem",
        h3: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
