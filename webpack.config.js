'use strict';

var webpack = require('webpack');
var path = require('path');

var buildPath = path.resolve(__dirname, 'dist');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: 'public'
	},
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		'./src/main'
	],
	output: {
		path: __dirname + '/public/',
		filename: 'dist/main.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
		}),
	],
	resolve: {
		extensions: ['', '.js', '.scss']
	},
	module: {
		loaders: [
			{
        test: /\.json$/,
        loader: 'json'
      },
			{
				test: /\.js$/,
				loaders:	['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.css/, loader: "style!css"
			}
		]
	}
};
