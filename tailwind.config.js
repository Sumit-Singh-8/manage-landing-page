/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      //Primary colors
      brightRed: 'hsl(12, 88%, 59%)',
      darkBlue: 'hsl(228, 39%, 23%)',
      // Neutral colors
      darkGrayishBlue: 'hsl(227, 12%, 61%)',
      veryDarkBlue: 'hsl(233, 12%, 13%)',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      veryLightGrey: 'hsl(0, 0%, 98%)',
    },
    extend: {},
  },
  plugins: [],
};
