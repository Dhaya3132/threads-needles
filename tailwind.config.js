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
        'Yellow':'#392d69',
        'LightYellow':'#b57bee',
      }
    },
  },
  plugins: [],
}