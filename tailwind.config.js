/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      'soft-red': 'hsl(10, 79%, 65%)',
      'cyan': 'hsl(186, 34%, 60%)',
      'dark-brown': 'hsl(25, 47%, 15%)',
      'medium-brown': 'hsl(28, 10%, 53%)',
      'cream': 'hsl(27, 66%, 92%)',
      'white': 'hsl(38, 100%, 98%)',
      'very-pale-orange': 'hsl(29, 63%, 92%)'
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif']
    },
    screens: {
      'max560': {'max': '560px'},
      'max400': {'max': '400px'}
    }
  },
  plugins: [],
}