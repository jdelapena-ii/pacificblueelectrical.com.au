const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const aspectRatio = require('tailwindcss-aspect-ratio');
const lineClamp = require('tailwindcss-line-clamp');

module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
    },
    lineClamp: {
      7: 7,
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray["100"]'),
          'h1, h2, h3, h4': {
            color: theme('colors.white'),
          },
        },
      },
    }),
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
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [tailwindUI, aspectRatio, lineClamp],
};
