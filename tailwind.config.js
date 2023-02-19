/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "52px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      mm: "1280px",
      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        dark: "#6d6875",
        primary: "#b5838d",
        primaryfaded: "#c398a1",
        light: "#e5989b",
        lighter: "#ffb4a2",
        lightest: "#ffcdb2",
        faded: "#fbf7f5",
        whiter: "#f0e6e8",
      },
      fontFamily: {
        main: ["Rubik", "sans-serif"],
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  },
};
