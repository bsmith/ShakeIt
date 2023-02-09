/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cerise: {
          '50':  '#fdfcfb',
          '100': '#fbf0f0',
          '200': '#f8cce1',
          '300': '#ef9ec1',
          '400': '#ee6d9d',
          '500': '#e3497f',
          '600': '#cf305e',
          '700': '#a92444',
          '800': '#7c1a2c',
          '900': '#4d1117',
        },
        beach: {
          '50':  '#edfafa',
          '100': '#d5f5f6',
          '200': '#afecef',
          '300': '#7edce2',
          '400': '#16bdca',
          '500': '#0694a2',
          '600': '#047481',
          '700': '#036672',
          '800': '#05505c',
          '900': '#014451',
        },
      }
    },
  },
    colors: {
      
    },
  plugins: [],
};
