module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'button-blue': '#4dc6ef',
        sidebar: '#1a153e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
