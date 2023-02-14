/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FEF9FC",
        "primary-200": "#FFEAF5",
        primary: "#ED017F",
      },
      fontFamily: {
        sans: ["Metropolis", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".debug": {
          outline: "1px solid red",
        },
      });
    },
  ],
};
