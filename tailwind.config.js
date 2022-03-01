const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      green: colors.green,
      gray: colors.trueGray,
<<<<<<< HEAD
      pink: colors.pink,
      indigo: colors.indigo
=======
      pink: colors.pink
>>>>>>> 8d05d657c72bf6ad6205fd3582af8d92c3498a64
    },
    extend: {
      height: {
        xx: '12%',
        xs: '10%',
        xss: '6.66%'
      },
      width: {
        xx: '14%',
        xs: '10%',
        xss: '6.66%'
      }
    }
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: []
}
