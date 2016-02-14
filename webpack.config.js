const path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    bundle: './src/js/',
    tests: './src/js/tests/'
  },
  output: {
    path: __dirname + '/build/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
				test: /\.js$/, 
				loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
			}
    ]
  }
};