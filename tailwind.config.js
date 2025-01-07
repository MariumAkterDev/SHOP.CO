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
      'poltawski': ['Poltawski Nowy', 'serif'],

    },
    extend: {
      colors: {
        'brand-Color': '#18443F',
        'PrimaryColor-62': '#1E3E62',
        'secondColor-F0': '#F0F0F0',
      },
    },
    
  },
  plugins: [],
}
