/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#618CD6',
          300: '#3D5CAF',
          400: '#061D82',
          500: '#072273',
          600: '#021869',
          700: '#0058e1',
          900: '#1a1d29',
        },
        word: {
          100: '#f9f9f9',
          400: '#5f6166',
          600: '#252526',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
  },
};
