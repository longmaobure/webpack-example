const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (env, arg) {
  console.log(env, arg);

  return {
    entry: path.join(__dirname, './src/index.js'),
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].js',
      chunkFilename: '[id].[contenthash:8].js',
      clean: true
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new ESLintPlugin(),
      new HtmlWebpackPlugin()
    ],
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
        }
      ]
    }
  };
};
