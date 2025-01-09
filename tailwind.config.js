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
        // 'PrimaryColor-62': '#1E3E62',
        'PrimaryColor-62': '#A21232',
        'secondColor-F0': '#F0F0F0',
        'lightColor-2C': '#252525ca',
        // 'lightColor-2C': '#0B192C',
        'lightgray-60%': '#0000008d',
      },
    },
    
  },
  plugins: [],
}
