/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#91ad41',
        secondaryColor: '#ff8a6c ',
        borderColor: '#ebebeb',
        textColor: '#707070',
      },
      screens: {
        lg: '1025px',
      },
    },
    container: {
      center: true,
      padding: '0.75rem',
    },
  },
  plugins: [],
};
