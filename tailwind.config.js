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
        'Yellow':'#fcb0f3',
        'LightYellow':'#3d05dd',
        'HoneyWell':'#F0F8FF',
        'Orange':'#f7ba2c',
        'DarkOrange':'#ea5459',
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