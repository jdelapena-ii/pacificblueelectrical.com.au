const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');
const tailwindcssAspectRatio = require('tailwindcss-aspect-ratio');

module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    future: {
      removeDeprecatedGapUtilities: true,
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
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
    },
  },
  variants: { margin: ['responsive', 'first'] },
  plugins: [tailwindUI, tailwindcssAspectRatio],
};
