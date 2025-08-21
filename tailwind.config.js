/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#331211',
        accent: '#AC1F23',
        gold: '#DDB386',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        calligraphy: ['Great Vibes', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
