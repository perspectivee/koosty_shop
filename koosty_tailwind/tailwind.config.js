/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'customSerif': ['Jomolhari', 'serif'],
        'customSans': ['Julius Sans One', 'sans-serif']
      }
    },
  },
  plugins: [],
}