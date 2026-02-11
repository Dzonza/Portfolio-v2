import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxs: '345px',
        xs: '380px',
        ss: '420px',
        s: '480px',
        m: '560px',
        lg: '1025px',
        md: '770px',
      },
    },
  },
  plugins: [],
};
