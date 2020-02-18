const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.base')

const devWebpackConfig = merge.smart(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            hotReload: true
          }
        } 
      },
    ],
  },
  plugins: [],
})

module.exports = devWebpackConfig
