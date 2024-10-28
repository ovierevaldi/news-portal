/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        primary: {
          one: '#121221',
          two: '#444444',
          three: '#6C6C6C',
          four: '#949494',
        },
        secondary: {
          one: '#FDFDFD',
          two: '#F8F8F8',
        },
      }
    },
  },
  plugins: [],
}

