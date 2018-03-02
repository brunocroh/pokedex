const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '/public'),
    filename: './app.js'
  },
  devServer: {
    port: 3000,
    contentBase: './public'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Constants: path.resolve(__dirname, 'src/constants'),
      Template: path.resolve(__dirname, 'src/template'),
      Modules: path.resolve(__dirname, 'node_modules')
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /.\.woff|.woff2|.ttf|.eot|svg*.*$/,
        use: 'file-loader'
      }
    ]
  }
}
