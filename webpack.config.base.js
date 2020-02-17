const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    filename: `main.[hash].js`,
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `fonts/[name].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js',
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: ['babel-loader', 'eslint-loader'],
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles.css`,
    }),
    new HtmlWebpackPlugin({
      template: 'views/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: './assets/images', to: `images/[name].[ext]`, ignore: ['.DS_Store'] },
    ]),
  ],
}
