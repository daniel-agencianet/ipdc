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
      screens: {
        "sm-down": { max: "639px" },
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".debug": {
          outline: "1px solid red",
        },
        ".flow": {
          "@apply [&>*+*]:mt-[var(--flow-space,_1em)]": {},
        },
      });
    },
  ],
};
