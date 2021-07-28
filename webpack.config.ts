import webpack = require('webpack');
import {join} from 'path';
import CopyPlugin from 'copy-webpack-plugin';

const srcDir = './src/';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    background: join(__dirname, srcDir, 'background.ts'),
    content: join(__dirname, srcDir, 'content.ts'),
  },
  output: {
    path: join(__dirname, './extension/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './manifest.json',
          to: '../manifest.json'
        },
        {from: '.', to: './../assets', context: 'assets'}
      ]
    })
  ]
};

export default config;
