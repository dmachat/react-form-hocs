const resolve = require('./resolve');
const extendedConfig = require('./dll');

const config = {
  resolve,
  cache: true,
};

module.exports = Object.assign({}, config, extendedConfig);
