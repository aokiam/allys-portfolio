/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        jersey: ['"Jersey 10"'],
      },
      boxShadow: {
        '3xl': '-20px 20px rgba(0, 0, 0, 0.2)',
        '2.5xl':  '-15px 15px rgba(0, 0, 0, 0.1)',
        '2.75xl': '-25px 20px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        orange: {
          50: '#F3A683',
          100: '#D97040',
        },
        yellow: {
          50: '#F7D794',
          100: '#EEB43C',
        },
        purple: {
          10: '#CFC8F2',
          50: '#786FA6',
          100: '#3E3A65',
          300: '#1D1B33',
        },
        pink: {
          50: '#F8A5C2',
          100: '#D3648B',
        },
        aqua: {
          50: '#64CDDB',
          100: '#329BA9',
        },
        scarlet: {
          50: '#E77F67',
          100: '#C55035',
        },
      },
    },
  },
  plugins: [],
}

