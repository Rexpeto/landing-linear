import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
      },
      fontSize: {
        sm: "1.4rem",
        md: "1.6rem",
        lg: ["2.2rem", "1.3"],
        "5xl": ["6rem", "1"],
      },
      colors: {
        background: "#000212",
        white: "#fff",
        "btn-primary": "#5e6ad2",
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5.2rem",
        14: "5.6rem",
        15: "6rem",
        16: "6.4rem",
        "navigation-height": "var(--navigation-height)",
      },
    },
  },
  plugins: [],
};
export default config;
