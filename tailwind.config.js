const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#072140",
        lightblue: "#3070b3",
        lightgray: "#e8ecef",
        yellow: "#fed702",
      },
      maxWidth: {
        wrap: "101rem",
      },
      fontSize: {
        middle: "2.2rem",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
      },
      backgroundImage: {
        dark: "linear-gradient(292deg, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.85) 100%)",
      },
    },
  },
  plugins: [],
};
