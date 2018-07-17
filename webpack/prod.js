var base = require('./base');
var webpack = require('webpack');

module.exports = Object.assign(base, {
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
            loader: 'sass-loader'
          }
      ]
    })
  },
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : '')
    })
  ])
});
