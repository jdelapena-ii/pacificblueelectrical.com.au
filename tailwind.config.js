const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const typography = require('@tailwindcss/typography');
const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    future: {
      removeDeprecatedGapUtilities: true,
    },
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
    aspectRatio: {
      square: [1, 1],
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        serif: ['Showcase Slab', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          blue: '#1c75bb',
          yellow: '#f9b818',
          black: '#060000',
        },
      },
      lineHeight: {
        '11': '3rem',
      },
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [typography, tailwindUI, tailwindcssAspectRatio],
};
