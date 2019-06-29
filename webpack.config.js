var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:[
	'./src/app.js'
	],
	output:{
		path: path.join(__dirname),
		filename:'build.js',
	},
	module:{
		rules:[
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader:"babel-loader"
		},
		{
			test:/\.css$/,
			loader:['style-loader','css-loader']
		},
		{
			test: /\.html$/,
			loader:"html-loader"
		},
		]
	},
	plugins:[
	new HtmlWebPackPlugin({
		template: "./src/index.html",
		filename: "./index.html"
	})]
}