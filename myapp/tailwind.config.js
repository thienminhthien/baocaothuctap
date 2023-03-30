/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        modal: "rgba(56, 53, 56, 0.8)",
      },

      cursor: {},
    },
  },
  plugins: [],
};
