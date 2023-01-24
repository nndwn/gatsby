/** @type {import('tailwindcss').Config} */
const defaulTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueTheme':'#002463',
        'tosca':'#47C4DC' 
      },
      fontFamily:{
        sans: [
          'poppins',
          ...defaulTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
