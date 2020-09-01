const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const typography = require('@tailwindcss/typography');

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          'h1, h2, h3, h4, h5, h6': {
            fontWeight: theme('fontWeight.bold'),
            fontFamily: theme('serif'),
          },
          body: {
            fontFamily: theme('sans'),
          },
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Showcase Slab', ...defaultTheme.fontFamily.sans],
      },
      color: {
        brand: {
          blue: '#1c75bb',
          yellow: '#f9b818',
          black: '#f9b818',
        },
      },
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [typography, tailwindUI],
};
