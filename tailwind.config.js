/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          gold: '#C5A880',
          goldDark: '#A38456',
          dark: '#11141A',
          charcoal: '#1E232E',
          cream: '#FBF9F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
