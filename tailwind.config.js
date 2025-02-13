/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-red': 'hsl(343, 88%, 49%)',
      },
    },
  },
  plugins: [],
};
