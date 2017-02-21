const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoader = [
  'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1',
  'postcss-loader',
];

// don't export css file in development mode
const styleLoader = process.env.NODE_ENV === 'production' ?
  ExtractTextPlugin.extract({
    fallbackLoader: 'style-loader',
    loader: cssLoader,
  }) :
  ['style-loader'].concat(cssLoader);

const svgoConfig = JSON.stringify({
  plugins: [
    { removeTitle: true },
    { removeAttrs: { attrs: 'fill' } },
  ],
});

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: ['eslint-loader'],
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    }],
  },
  {
    test: /\.css$/,
    use: styleLoader,
  },
  {
    test: /^index\.template\.html$/,
    use: ['html-loader'],
  },
  {
    test: /\.svg$/,
    include: /icons/,
    use: [
      'svg-sprite-loader?name=[name]_[hash]',
      'svgo-loader?${svgoConfig}'
    ],
  },
  {
    test: /.*\.(jpe?g|gif|png|svg)$/i,
    exclude: /icons/,
    use: [
      'file-loader?' + JSON.stringify({
        name: 'img/[sha512:hash:base64:7].[ext]',
      }),
      'image-webpack-loader',
    ],
  },
  {
    test: /.*\.(woff|eot)(\?v=\d+\.\d+\.\d+)?(\?.*)?$/i,
    use: ['file-loader?' + JSON.stringify({
      name: 'fonts/[sha512:hash:base64:7].[ext]',
    })],
  },
  {
    test: /\.yml$/,
    use: [
      'json-loader',
      'yaml-loader',
    ],
  },
];
