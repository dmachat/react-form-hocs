const path = require('path');

module.exports = {
  bundle: [
    // These scripts need to be prepended to development for hot module reloading
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    path.resolve('examples', 'index'),
  ],
}
