/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sora': ['Sora'],
        'Poppins': ['Poppins'],
      },
      screens: {
        'Laptop-M': { 'max': '1025px' },
        'Tabelt': { 'max': '769px' },
        'Mobile-L': { 'max': '426px' },
        'Mobile-M': { 'max': '376px' },
        'Mobile-S': { 'max': '321px' },
      },
      colors:{
        'Yellow':'#0c0c0c',
        'LightYellow':'#0f971c',
        'HoneyWell':'#F0FFF0',
      },
      backgroundImage:{
        'Kurtis':"url('src/assets/Kurtis.jpg')",
        'Saree':"url('src/assets/Saree.jpg')",
        'Tops':"url('src/assets/Tops.jpg')",
      }
    },
  },
  plugins: [],
}