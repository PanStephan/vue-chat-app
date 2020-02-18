module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
    cssnano: {},
  },
}
