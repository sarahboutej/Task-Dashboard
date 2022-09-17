const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'st-orange': '#ff7346',
        'st-blue': '#8cd1d6',
        'st-purple': '#7a007d',
        'color-1': '#ff7346',
        'color-2': '#8cd1d6',
        'color-3': '#7a007d',
        'st-fade': '#fcf5ef',

      }
    },
  },
  plugins: [],
  safelist: [
    {pattern: /ring-(st-blue|st-purple|st-orange)/},
    {pattern: /bg-(st-blue|st-purple|st-orange)/},
    {pattern: /bg-(color-1|color-2|color-3)/},
  ],
}
