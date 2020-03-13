const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const devWebpackConfig = merge.smart(baseWebpackConfig, {
  mode: 'development',
  watch: true,
  devServer: {
    port: 8080,
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
      '/socket.io/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    }
  },
  module: {
    rules: [],
  },
  plugins: [],
})

module.exports = devWebpackConfig
