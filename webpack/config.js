const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ silent: true });

const plugins = require('./plugins');
const postcss = require('./postcss');
const eslint = require('./eslint');
const output = require('./output');
const resolve = require('./resolve');
const rules = require('./rules');

const env = process.env.NODE_ENV || 'development';
const extendedConfig = require(path.resolve(__dirname, env));

const config = {
  output,
  plugins,
  context: path.resolve(__dirname, '..'),
  resolve,
  module: {
    rules,
  },
};

module.exports = Object.assign({}, config, extendedConfig);
