const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  entry: './src/client/app.js',
  output: { 
    path: path.join(__dirname, './src/client'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ]
  },
  watch: true,
  devServer: {
    inline: true,
    port: 3000,
  },
};