var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
node: {
    fs: "empty"
},
  entry: './app/index.js',
  output: { path: __dirname + '/public', filename: 'bundle.js' },
  plugins: [
       new CopyWebpackPlugin([
         { from: 'node_modules/milligram/dist/milligram.min.css', to: 'milligram.min.css' },
     ]),
     new webpack.DefinePlugin({
     'process.env': {
       'API': '"https://symbaroum.herokuapp.com/api/webpack-dev-server"'
        }
    })
   ],
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
        test: /.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
};
