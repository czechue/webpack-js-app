const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
    app: './src/scripts/index.js'
  },
  devtool: 'inline-source-map', // any "source-map"-like devtool is possible
  devServer: {
    contentBase: './dist',
    hot: true
  },
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader' ]
      }
		]
	},
	plugins: [
    // In general it's good practice to clean the /dist folder before each build, 
    // so that only used files will be generated
    new CleanWebpackPlugin(['dist']),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css'
    }),
      // it will replace our index.html file with a newly generated one
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/templates/index.html'
    }),
    // Enabling Hot Module Replacement
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production"
};
