const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const devConfig = require('../PS/webpack/dev.js');
const express = require('express');
const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');

const DEV_MODE = process.env.NODE_ENV === 'DEV';
const port = DEV_MODE ? 9000 : 8081;

const app = express();

if (DEV_MODE) {
  app.use(historyApiFallback({
    verbose: false
  }));

  const compiler = webpack(devConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: devConfig.output.path,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}
const options = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: 'index.html',
  lastModified: true
};

app.use('/', express.static(path.join(__dirname, '/dist'), options));
app.use('*', express.static(path.join(__dirname, '/dist'), options));


app.listen(port, () => console.log(`==> 🌎 Started in ${process.env.NODE_ENV} mode. Listening on port ${port}`));
