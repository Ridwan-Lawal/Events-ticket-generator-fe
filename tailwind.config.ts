import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      jeju: ["JejuMyeongjo"],
    },
    extend: {
      colors: {
        "color-green-950": "#0A0C11",
        "color-green-900": "#02191D",
        "color-green-850": "#052228",
        "color-green-800": "#05252C",
        "color-green-750": "#07373F",
        "color-green-700": "#08252B",
        "color-green-650": "#041E23",
        "color-green-600": "#0E464F",
        "color-green-550": "#12464E",
        "color-green-500": "#197686",
        "color-green-400": "#24A0B5",
        "color-text-1": "#fafafa",
      },
    },
  },
  plugins: [],
} satisfies Config;
