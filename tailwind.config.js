/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#a89af1',
        'button' : '#440d60',
        'hover' : '#561477',
        'result' : '#4b4b4b'
      }
    },
  },
  plugins: [],
}

