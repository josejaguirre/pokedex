const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'prod';


module.exports = [{
  devtool: debug ? 'inline-sourcemap' : null,
  entry: {
    core: './client/es/index',
  },
  output: {
    path: path.join(__dirname, './client/js/'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
    ],
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
}];
