const colors = require('tailwindcss/colors')

module.exports = {
  purge: [

    './components/**/*.{vue,js}',

    './layouts/**/*.vue',

    './pages/**/*.vue',

    './plugins/**/*.{js,ts}',

    './nuxt.config.{js,ts}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      yellow: colors.amber,
      red: colors.rose,
      blue: colors.blue,
      green: colors.green,
      white: '#ffffff',
      black: '#000000'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}