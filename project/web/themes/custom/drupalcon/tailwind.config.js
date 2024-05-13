/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{twig,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': '"Playfair Display", serif;'
      }
    },
  },
  plugins: [],
}

