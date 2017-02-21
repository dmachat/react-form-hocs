const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const manifest = require('../dist/vendor-manifest.json');
const postcss = require('./postcss');
const eslint = require('./eslint');

const env = process.env.NODE_ENV || 'development';
const envPlugins = require(path.resolve(__dirname, env, 'plugins'));

const base = [
  new webpack.DllReferencePlugin({
    manifest,
    context: path.resolve(__dirname, '..'),
  }),
  // define globals
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(env),
    },
  }),
  // for assets that shouldn't be run through the dependency chain
  new CopyWebpackPlugin([
    {
      from: 'dist/js/vendor.dll.js',
      to: 'js',
    },
  ]),
  // inject bundle in index.html template
  new HtmlWebpackPlugin({
    filename: path.resolve(__dirname, '..', 'dist', 'index.html'),
    template: path.resolve(__dirname, '..', 'index.template.html'),
  }),
  new WebpackNotifierPlugin({ title: 'Webpack - React Forms HOCs' }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss,
      eslint,
    }
  }),
];

const plugins = base.concat(envPlugins);

module.exports = plugins;
