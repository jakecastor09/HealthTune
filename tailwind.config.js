/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '668px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkYellow: '#ffb309',
        lightBlue: '#367ce8',
        lightGreen: '#2DAA66',
        lightCyan: '#41FFDD',
        lightOrange: '#FC9C56',
        whiteFloral: '#FFF9EB',
        whiteMagnolia: '#FAF7FC',

        darkViolet: {
          1000: '#240046',
          900: '#251C30',
          800: '#31293B',
          700: '#3D3547',
          600: '#4A4153',
          500: '#584E61',
          400: '#675C6F',
          300: '#776B7F',
          200: '#998DA1',
          100: '#C3B8CC',
        },
      },
      fontSize: {
        40: '40px',
      },
    },
    fontFamily: {
      sans: ['Manrope', 'san-serif'],
    },
  },
  plugins: [],
};
