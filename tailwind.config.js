module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Rochester: ["Rochester", "cursive"],
        Oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      animation: {
        'shine': 'shine 2s linear infinite',
      },
    },
  },
  plugins: [],
}
