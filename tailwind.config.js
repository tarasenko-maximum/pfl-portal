/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pfl-orange': 'var(--pfl-orange)',
        'liga-green': 'var(--liga-green)',
      }
    },
  },
  plugins: [],
}
