const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './js/main.js',
    vendors: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '/js/[name].[chunkhash].js',
    chunkFilename: '/js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/images/[name].[ext]'
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets:[ 'es2017','es2015', 'react', 'stage-2' ]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve(__dirname, '../.eslintrc'),
              emitWarning: false,
              failOnWarning: false,
              failOnError: true
            }
          }
        ],
        exclude: /node_modules\/(?!react)/,
      }
    ]
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, '../js/store/actions'),
      constants: path.resolve(__dirname, '../js/constants'),
      components: path.resolve(__dirname, '../js/components'),
      services: path.resolve(__dirname, '../js/services'),
      styles: path.resolve(__dirname, '../styles')
    }
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ]
};
