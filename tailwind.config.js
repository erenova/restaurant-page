/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./dist/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        ottoRegular: ["ottoRegular", "sans-serif"],
        parisRegular: ["parisRegular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
