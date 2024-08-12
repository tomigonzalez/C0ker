/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gray-to-transparent":
          "linear-gradient(to bottom,rgb(102 102 102) 0%, rgba(169, 169, 169, 0) 100%)",
      },
      colors: {
        "primary-white": "#efebdf",
        "secondary-orange": "#f3630e",
        "tertiary-black": "#282927",
      },
    },
  },
  plugins: [],
};
