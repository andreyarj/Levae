/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'sky': '#00A6F4',
      'darksky': '#0069A8',
      'white': '#FFF',
      'slate': '#F3F4F6',
      'darkslate': '#030712',
      'gray': '#101828',
      'yellow': '#F0B100'
    },
    extend: {
      fontFamily: {
        'Stara': 'Stara',
        'Glacier': 'Glacier',
      },
    },
    screens: {
      '3': '300px',
      '320': '320px',
      '375': '375px',
      '4': '400px',
      '5': '500px',
      '6': '600px',
      '7': '700px',
      '8': '800px',
      '9': '900px',
      '10': '1000px',
    }
  },
  plugins: [],
}