const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...defaultTheme.colors,
      white: '#fff',
      sidebar: 'rgb(240, 247, 252)',
      'typo-primary': 'rgb(56, 160, 250)',
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
