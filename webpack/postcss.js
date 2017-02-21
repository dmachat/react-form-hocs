const cssnext = require('postcss-cssnext');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');

module.exports = function(webpack) {
  return [
    postcssImport({
      addDependencyTo: webpack,
    }),
    postcssUrl(),
    cssnext(),
  ];
}
