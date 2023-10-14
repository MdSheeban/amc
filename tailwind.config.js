/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'ff611a': '#FF611A',
        'theme-color': '#141428',
        'ffa500' : 'FFA500',
        'ffefe8' : '#FFEFE8',
        '141428' : '#141428',
        
      },
    },
    maxHeight: {
      '128': '32rem',
    }
  },
  plugins: [],
}

