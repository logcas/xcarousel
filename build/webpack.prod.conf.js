const merge = require('webpack-merge');
const basicConfig = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(basicConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src', 'carousel.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'xcarousel.js',
    library: 'Xcarousel',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});