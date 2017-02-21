const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true, // React doesn't support IE8
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
    mangle: {
      screw_ie8: true,
      toplevel: true,
    },
  }),
  new ExtractTextPlugin({
    filename: 'css/app.[contenthash:7].css',
    allChunks: true,
  }),
];
