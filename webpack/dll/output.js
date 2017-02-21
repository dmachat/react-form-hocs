const path = require('path');

module.exports = {
  path: path.resolve(__dirname, '..', '..', 'dist'),
  filename: 'js/[name].dll.js',
  library: '[name]_library',
  publicPath: '/',
};
