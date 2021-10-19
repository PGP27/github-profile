module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'purple-project': '#7B61FF',
      'gray-project': '#16191A',
      'white': '#FFFFFF',
    }),
    textColor: {
      'purple-project': '#7B61FF',
      'gray-project': '#16191A',
      'white': '#FFFFFF',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
