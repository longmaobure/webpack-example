const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  devServer: {
    hot: true,
    open: true
  },
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[id].[contenthash:8].js',
    clean: true
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: path.join(__dirname, './public/index.html')
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      publicPath: '/',
      icons: [
        {
          // 桌面图标, 只支持 png、jpg、bmp
          src: path.resolve('src/assets/logo.png'),
          size: '400×250'
        }
      ]
    }),
    // 自动生成 ServiceWorker 文件
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
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
      }
    ]
  }
};
