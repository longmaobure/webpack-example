const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = function (env, arg) {
  return {
    devServer: {
      hot: true,
      open: true
    },
    entry: path.join(__dirname, './src/index.js'),
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[id].[contenthash:8].js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(css|scss)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            arg.mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new ESLintPlugin(),
      new HtmlWebpackPlugin({
        title: 'index.html',
        template: path.join(__dirname, './public/index.html')
      }),
      new VueLoaderPlugin()
    ]
  };
};
