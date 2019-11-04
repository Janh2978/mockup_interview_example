const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/index.js',
  },
  //devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Cotización',
      filename: '../index.html',
      template: './src/html/index.html',
      mobile: true,
      lang: 'en-US'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./dist/*.html'],
      server: {
        baseDir: ['dist']
      }
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '../css/[id].css',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    })
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../css',
        }
      }, {
        loader: "css-loader",
      }, {
        loader: "postcss-loader",
        options: {
          ident: 'postcss',
          plugins: [
            require('autoprefixer')({
              'browsers': ['> 1%', 'last 2 versions']
            })
          ]
        }
      }, {
        loader: "sass-loader",
      }]
    }]
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist/js'
  },
};