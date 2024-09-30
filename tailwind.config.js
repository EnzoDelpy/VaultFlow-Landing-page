/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#ECECEC',
        'white-opacity-65':'#ECECECA6',
        'white-opacity-0':'#ECECEC00',
        'black': '#0B081C',
        'bg-color': '#0B0121'
        
      }
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"]
    }
  },
  plugins: [],
}

