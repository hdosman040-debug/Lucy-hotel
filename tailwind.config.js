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
          goldLight: '#E5D5C0',
          goldDark: '#9C8059',
          obsidian: '#0B0D11',
          charcoal: '#14171F',
          grayLight: '#E2E8F0',
          cream: '#FAF8F5',
        }
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Didot', 'Georgia', 'serif'],
      },

      letterSpacing: {
        luxury: '0.15em',
        editorial: '0.25em',
      },

      boxShadow: {
        luxury: '0 20px 50px rgba(0,0,0,0.15)',
        gold: '0 10px 40px rgba(197,168,128,0.25)',
      },

      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },

  plugins: [],
}
