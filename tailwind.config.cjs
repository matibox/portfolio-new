/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: {
          main: '#0a1b34',
          dark: '#050e1c',
          'gradient-1': '#0b192f',
          'gradient-2': '#004462',
        },
        heading: {
          primary: '#eaf2f6',
          secondary: '#869ad7',
        },
        text: '#a5abbd',
        accent: {
          main: '#173057',
          'gradient-1': '#64ffda',
          'gradient-2': '#69bdff',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
