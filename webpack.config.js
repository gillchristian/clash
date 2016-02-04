// webpack.config.js
module.exports = {
  entry: './src/js/index.js',
  module: {
    loaders: [
      { 
				test: /\.js$/, 
				loader: 'babel',
        exclude: '/node_modules/'
			}
    ]
  }
};