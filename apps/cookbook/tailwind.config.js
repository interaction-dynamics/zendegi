const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f499af',
          300: '#E71E4D',
          400: '#E21A5F',
          500: '#D70466',
          600: '#5e012c',
          800: '#5e012c',
        },
      },
      screens: {
        '3xl': '1700px',
        '4xl': '1900px',
        '5xl': '2200px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        curve: ['var(--font-great-vibes)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['0.7rem', { lineHeight: '0.9rem' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
