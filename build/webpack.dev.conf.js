const merge = require('webpack-merge');
const basicConfig = require('./webpack.base.conf');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(basicConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, '../src', 'index.js'),
  output: {
    path: path.resolve(__dirname, '../example'),
    filename: 'index.js',
  },
  devServer: {
    port: 8081,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, '../example'),
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src', 'index.html'),
      filename: 'index.html',
    }),
  ]
});