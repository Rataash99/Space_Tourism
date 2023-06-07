/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bellefair' : ['Bellefair'],
        'Barlow_Condensed' : ['Barlow Condensed']
      },
      animation: {
        'spin-slow': 'spin 150s linear infinite',
      }
    },
  },
  plugins: [],
}

