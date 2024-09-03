/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          "0%": {
            opacity: 0,
            transform: "scale(0.25)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      fontFamily: {
        uzusi: ["Uzusi", "sans-serif"], // Usa minúsculas para las claves y especifica la fuente en la lista
      },
      backgroundImage: {
        "gray-to-transparent":
          "linear-gradient(to bottom,rgb(102 102 102) 0%, rgba(169, 169, 169, 0) 100%)",
        "transparent-to-gray":
          "linear-gradient(to top ,rgb(102 102 102) 0%, rgba(169, 169, 169, 0) 100%)",
      },
      colors: {
        "primary-white": "#efebdf",
        "secondary-orange": "#f3630e",
        "tertiary-black": "#282927",
        "cuarto-gray": "#5A5955",
      },
    },
  },
  plugins: [],
};
