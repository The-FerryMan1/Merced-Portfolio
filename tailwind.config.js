/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Fjalla:['Fjalla One', 'sans-serif']
      },
    },
  },
  plugins: [],
}

