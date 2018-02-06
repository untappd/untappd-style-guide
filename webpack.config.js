const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    theme: './src/scss/theme.scss',
    styleguide: './ut/styleguide/application.scss',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
  },

  devServer: {
    compress: true,
    clientLogLevel: 'none',
    overlay: true,
    stats: 'errors-only',
  },

  plugins: [new ExtractTextPlugin('[name].css')],

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
}
