const path = require('path');
const base = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = Object.assign(base, {
  devtool: 'source-map',
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:9000/__webpack_hmr&reload=true`,
    './js/main.js',
  ],
  output: {
    path: '/',
    filename: '/js/[name].[hash].js',
    chunkFilename: '/js/[name].[hash].js'
  },
  module: {
    rules: base.module.rules.concat({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMaps: true
          }
        }
      ]
    })
  },
  devServer: {
    port: 9000,
    compress: true,
    historyApiFallback: {
      disableDotRule: true
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
      // 'process.env.API_URL': JSON.stringify('apiUrl')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});
