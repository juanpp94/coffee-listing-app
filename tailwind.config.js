/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-cafe': "url('src/assets/bg-cafe.jpg')"
      },
      backgroundColor: theme => ({ ...theme('colors'),  'dark-black': '#111315', 'light-black': '#1B1D1F', 'gold': '#F6C768', 'light-green':'#BEE3CC'}),
      textColor: {'light-black': '#111315', 'dark-black': '#1B1D1F', 'gray': '#6F757C','light-green':'#BEE3CC', 'cream': '#FEF7EE', 'gold': '#F6C768', 'new-red': '#ED735D'}
    },
  },
  plugins: [],
}

