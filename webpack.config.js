const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 'production',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    port: 3000,
    static: './dist',
    open: true,
    hot: true,

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader'],
      }
    ]
  }
}