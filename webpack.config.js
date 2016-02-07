const path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    bundle: './src/js',
    tests: './src/js/tests/index.js'
  },
  output: {
    path: __dirname + '/build/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
				test: /\.js$/, 
				loader: 'babel',
        query: {
          presets: ['es2015']
        },
        exclude: [/node_modules/, /app/]
			}
    ]
  }
};