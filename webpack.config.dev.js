const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const devWebpackConfig = merge.smart(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  },
  module: {
    rules: [],
  },
  plugins: [],
})

module.exports = devWebpackConfig
