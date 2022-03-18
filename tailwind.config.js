module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'night': {
        100: "#18191A",
        200: "#242526",
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography')
  ],
}
