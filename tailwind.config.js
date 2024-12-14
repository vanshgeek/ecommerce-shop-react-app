module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage: {
        hero: "url('https://www.snitch.co.in/cdn/shop/files/4_WebBanner_1920x1080_412f06d7-4abb-4b4b-920e-c2776fb6ad28_1400x.jpg?v=1734070478')",
      },
    },
  },
  plugins: [],
};
