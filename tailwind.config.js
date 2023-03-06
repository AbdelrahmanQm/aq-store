/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "52px",
      // => @media (min-width: 640px) { ... }
      smd: "500px",
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
        medium: "#8a8592",
        primary: "#b5838d",
        primaryfaded: "#c398a1",
        light: "#e5989b",
        lighter: "#ffb4a2",
        lightest: "#ffcdb2",
        faded: "#fbf7f5",
        whiter: "#f0e6e8",
        press: "#b54c61",
        plight: "#b5838d",
        darker: "#413d46",
      },
      fontWeight: {
        semibold: "700",
        medium: "600",
      },
      fontSize: {},
      fontFamily: {
        main: ["Rubik", "sans-serif"],
      },
      display: ["group-focus"],
      animation: {
        fadefirst: "fadein 0.9s ease-in-out 1",
        fadesecond: "fadein 1.5s ease-in-out 1",
        fadeleft: "fadeleft 1.2s ease-in-out 1",
        popin: "popin 1.5s ease-in-out 1",
        blurin: "blurin 0.8s ease-in-out 1",
      },
      keyframes: {
        fadein: {
          "0%": { transform: "translate(0,-25%)", opacity: "0%" },
          "100%": { transform: "translate(0,0%)", opacity: "100%" },
        },
        fadeleft: {
          "0%": { transform: "translate(-25%,0)", opacity: "0%" },
          "30%": { transform: "translate(-25%,0)", opacity: "0%" },
          "100%": { transform: "translate(0,0%)", opacity: "100%" },
        },
        popin: {
          "0%": { transform: "scale(0%)" },
          "60%": { transform: "scale(0%)" },
          "95%": { transform: "scale(110%)" },
          "100%": { transform: "scale(100%)" },
        },
        blurin: {
          "0%": { filter: "blur(1.5rem)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "100%" },
        },
      },
    },
    plugins: [require("tailwind-scrollbar")],
  },
};
