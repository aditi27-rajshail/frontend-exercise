/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gridbg: "#eef4fa",
        green500: "#38c97c",
        grey200: "#a7aeb4",
        grey400: "#8c959d",
        grey800: "#596269",
        info50: "#f1f5fe",
        info500: "#276ef1",
        info600: "#1e54b7",
        neutral500: "#dee1e3",
        primary100: "#d9ebf9",
        primary200: "#b3d6f3",
        primary500: "#4299e1",
        textMain: "#2e3f51",
        textMenu: "#5f799c",
        white100: "#ffffff",
        white50: "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
      },
      fontFeatures: {
        noligatures: { liga: "off" },
      },
      letterSpacing: {
        pxP12: "0.008em",
        pxN14: "-0.009em",
      },
      lineHeight: {
        px18: "18px",
        px21: "21px",
      },
    },
  },
  plugins: [],
};
