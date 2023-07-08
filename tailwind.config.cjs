/* Used before installing radix.ui, now the file 'tailwind.config.js' is been referred insted. Not deleting this file for now */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-hyphens')],
};
