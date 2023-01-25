/** @type {import('tailwindcss').Config} */
const defaulTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "gatsby-ssr.js",
  ],
  theme: {
    container:{
      'padding':'5vw'
    },
    extend: {
      body:{
        'text-rendering': 'optimizelegibility',
      },
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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
