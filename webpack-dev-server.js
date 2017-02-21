const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
	contentBase: '/dist',
	quiet: false,
	noInfo: false,
	stats: {
    assets: true,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: true,
  },
}).listen(8000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8000/');
});
