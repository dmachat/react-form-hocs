const webpack = require('webpack');
const path = require('path');

let plugins = [
  // create dlls
  new webpack.DllPlugin({
    path: path.join(__dirname, '..', '..', 'dist', '[name]-manifest.json'),
    name: '[name]_library',
  }),
  // define globals
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: false,
      mangle: {
        toplevel: false,
      },
    })
  );
}

module.exports = plugins;
