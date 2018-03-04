const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const path = require('path')

module.exports = {
  entry: ['./src/index.jsx', './src/main/App.scss'],
  output: {
    path: path.join(__dirname, '/public'),
    filename: './App.js'
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
      Main: path.resolve(__dirname, 'src/main'),
      Template: path.resolve(__dirname, 'src/template'),
      Modules: path.resolve(__dirname, 'node_modules')
    }
  },
  plugins: [
    new CleanWebpackPlugin(
      './public',
      {
        exclude: ['index.html']
      }
    ),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'images'
      },
      {
        from: 'src/index.html',
        to: './'
      }
    ]),
    new WriteFilePlugin(),
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000
            }
          }
        ]
      },
      {
        test: /.\.woff|.woff2|.ttf|.eot|svg*.*$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
