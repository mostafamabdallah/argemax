/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#0b7b3b",
        secondary: "#299357",
        myGray: "#f7f7f7",
        myDarkGray: "#c5c7ca",
      },
      fontFamily: {
        ITCAVANTGARDESTD: "ITCAVANTGARDESTD",
      },
    },
  },
  plugins: [],
};
