/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B7F5E',
        secondary: '#96A88A',
        accent: '#C7D1BE',
        background: '#F2F5EF',
        text: '#353F2F',
      }
    },
  },
  plugins: [],
}

