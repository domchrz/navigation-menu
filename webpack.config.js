const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,
  entry: {
    bundle: path.resolve(__dirname, 'src/index.jsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool:
    mode === 'development' ? 'inline-source-map' : 'inline-cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    open: true,
    hot: false,
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Nav-menu',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
