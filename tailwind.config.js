/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: '#111111',
        card: '#171717',
        primary: '#FFC400',
        primaryHover: '#FFB800',
        textPrimary: '#FFFFFF',
        textSecondary: '#A3A3A3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
