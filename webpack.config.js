var path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './build/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
}
