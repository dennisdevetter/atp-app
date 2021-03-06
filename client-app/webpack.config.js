var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },  
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [      
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },      
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  }
};
