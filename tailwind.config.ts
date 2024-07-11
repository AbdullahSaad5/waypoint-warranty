import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#128949",
        primaryText: "#FFFFFF",
        primaryBg: "#FFFFFF",
        secondaryBg: "#F8FAFF",
        secondaryText: "#1F60B2",
        blue: "#4D9CFF",
        lightBlue: "#EAF3FF",
        darkBlue: "#096AD8"
      },
      daisyui: {
        themes: ["light"],
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
