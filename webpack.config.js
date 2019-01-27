var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Common: path.resolve(__dirname, 'src/common/'),
      Redux: path.resolve(__dirname, 'src/redux/')
    }
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
    watchContentBase: true,
    contentBase: path.join(__dirname, ''),
    publicPath: '/inmemory/'
  },
  mode: process.env.BUILD_MODE || 'production'
};

module.exports = config;

