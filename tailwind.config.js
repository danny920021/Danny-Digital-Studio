/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cold-gray-light': '#DADDE3',
        'cold-gray-medium': '#A5A8AD',
        'cold-gray-dark': '#2B2C30',
        'misty-purple-light': '#F2EFF6',
        'misty-purple': '#9A8FB6',
        'misty-purple-dark': '#775C91',
      },
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
        'serif': ['Noto Sans TC', 'serif'],
      },
      animation: {
        'float-fade': 'float-fade 3s ease-in-out infinite',
      },
      keyframes: {
        'float-fade': {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

