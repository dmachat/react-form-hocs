const path = require('path');
const appRoot = path.resolve(__dirname, '../');

module.exports = {
  extensions: ['.js', '.jsx'],
  modules: [
    appRoot,
    'node_modules',
  ]
};
