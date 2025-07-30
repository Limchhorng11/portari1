/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5f5dc',
      },
      fontSize: {
        '5xl': '58px',
        '4xl': '48px',
        '3xl': '38px',
        '2xl': '24px',
        'xl': '20px',
        'base': '18px',
        'md': '16px',
        'sm': '14px',
        'xs': '12px',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
} 