/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4C219B",
        primary_100: "#2e0a6d",
        secondary: "#9B1313",
        background: "#1D2129",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accent: "#FFA896",
      },
      fontSize: {
        main: "16px",
      },
    },
  },
  plugins: [],
};
