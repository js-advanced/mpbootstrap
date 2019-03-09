const webpackCopy = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: {
    bootstrap: './src/main.tsx',
    radioapp: ['./src/exampleApp/index.tsx']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, outputDirectory),
    libraryTarget: 'umd',
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new webpack.DefinePlugin({
      'typeof window': JSON.stringify('object')
  }),
  ],
  //devtool: '#source-map',
  devtool: 'none',
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css']
  },

  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|eot|wav|mp3)$/,
        loader: 'file-loader'
      }
    ]

  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'redux': 'redux',
    'react-redux': 'react-redux',
    'styled-components': 'styled-components'
  }
};
