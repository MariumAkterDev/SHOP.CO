/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': ['Poppins', 'serif'],

    },
    extend: {
      colors: {
        'brand-Color': '#18443F',
        'secondColor-F0': '#F0F0F0',
      },
    },
    
  },
  plugins: [],
}
