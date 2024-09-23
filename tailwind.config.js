const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      firstColor: ["#2B1712"],
      secondaryColor: ["DDB66F"],
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
