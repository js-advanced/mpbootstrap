const webpackCopy = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: {
    bootstrap: ['./src/main.tsx'],
    // defaultapp: ['./src/defaultApp/index.tsx'],
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
    new webpackCopy([
      { from: 'stub/index.html' },
      { from: 'stub/importmap.json' },
      { from: 'stub/photo_123.png' },
      { from: 'node_modules/systemjs/dist', to: 'extlib/systemjs' },
      { from: 'node_modules/react/umd', to: 'extlib/react' },
      { from: 'node_modules/react-dom/umd', to: 'extlib/react-dom' },
      { from: 'node_modules/redux/dist', to: 'extlib/redux' },
      { from: 'node_modules/react-redux/dist', to: 'extlib/react-redux' },
      { from: 'node_modules/styled-components/dist', to: 'extlib/styled-components' }
      ,
      { from: 'node_modules/md-transport-advertisement/dist', to: 'transport'},
      { from: 'node_modules/mediapult-elevators/dist', to: 'elevators' },
      { from: 'node_modules/transportapp/dist', to: 'team3' },
      { from: 'node_modules/mediapult-landing/dist', to: 'main-landing' }
    ])
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
