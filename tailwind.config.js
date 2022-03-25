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
      'cyan': {
        300: "#22d3ee",
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography')
  ],
}
