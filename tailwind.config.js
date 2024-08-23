/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      colors: {
        primary: "#f2f2f2",
        fbsgreen: "#008542",
        fbsblue: "#1573e5",
        fbsyellow: "#daa625",
        hoverblue: "#3b5897",
      },
    },
  },
  plugins: [],
};
