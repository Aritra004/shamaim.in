/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primaryLight: "#ffffff",
      primaryDark: "#000000",
      secondaryDark: "#a40038",
      secondaryLight: "#8830ea",
      secondaryLight1: "#0165a6",
      secondaryLight2: "#FA7C92",
      secondaryDark2: "#068DA9",
      royalBlue: "#4169e1",
      goldShade1: "#e6be8a",
      gradientColor1: "#adf7f2",
      gradientColor2: "#15aaff",
      darkBlue1: "#1402c8",
      seruleanBlue: "#2641c2",
      souptickBlue: "#34f0e4",
    },

    extend: {
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar-hide")],
};
