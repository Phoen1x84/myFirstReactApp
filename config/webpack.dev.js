const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development hot module loading',
      filename: 'index.html',
      template: 'src/index.html',
      historyApiFallback: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
