/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FE7743',
          light: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#ffffff',
          dark: '#e5e5e5',
        },
        accent: {
          DEFAULT: '#ffffff',
          hover: '#000000',
        },
      },
      backgroundColor: {
        primary: '#FE7743',
        secondary: '#273F4F',
        muted: '#EFEEEA',
      },
      textColor: {
        primary: '#ffffff',
        secondary: '#273F4F',
        muted: '#EFEEEA',
        default: '#FE7743',
      },
      borderColor: {
        primary: '#ffffff',
        secondary: '#000000',
        muted: '#EFEEEA',
      },
    },
  },
  plugins: [],
} 