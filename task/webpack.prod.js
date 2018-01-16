const helpers = require('./helpers');
const buildUtils = require('./build-utils');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin')
const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require('./config.json');

module.exports = function (env) {
	const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, {
		isDevServer: false,
		AOT: true,
		WATCH: false,
		ENV: env,
		HMR: false,
		envFileSuffix: true
	});
	return webpackMerge(commonConfig({
		env: env,
		metadata: METADATA
	}), {
		output: {
			path: helpers.root('dist'),
			publicPath: config[env].url + config[env].dirname + '/' + config.v + '/',
			filename: '[name].[chunkhash:8].bundle.js',
			sourceMapFilename: '[file].map',
			chunkFilename: '[name].[chunkhash:8].chunk.js'
		},
		module: {
			rules: [{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					}),
					include: [helpers.root('src', 'styles')]
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader!sass-loader'
					}),
					include: [helpers.root('src', 'styles')]
				},

			]

		},
		plugins: [
			new DefinePlugin({
				'ENV': JSON.stringify(env),
				'HMR': false,
				'process.env': {
					'ENV': JSON.stringify(config[env].ENV),
					'NODE_ENV': JSON.stringify(config[env].ENV),
					'HMR': false,
					'API': JSON.stringify(config[env].API),
					'TRACK_URL': JSON.stringify(config[env].TRACK_URL),
					'TRACK_ID': JSON.stringify(config[env].TRACK_ID)
				}
			}),
			new SourceMapDevToolPlugin({
				filename: '[file].map[query]',
				moduleFilenameTemplate: '[resource-path]',
				fallbackModuleFilenameTemplate: '[resource-path]?[hash]',
				sourceRoot: 'webpack:///'
			}),
			new ExtractTextPlugin('[name].[contenthash:8].css'),

			new PurifyPlugin(), /* buildOptimizer */

			new HashedModuleIdsPlugin(),
			new ModuleConcatenationPlugin(),
			new UglifyJsPlugin({
				sourceMap: true,
				uglifyOptions: {
					ecma: 5,
					warnings: false, // TODO verbose based on option?
					ie8: false,
					mangle: true,
					compress: {
						pure_getters: true,
						passes: 3
					},
					output: {
						ascii_only: true,
						comments: false
					}
				}
			})
		],
		node: {
			global: true,
			crypto: 'empty',
			process: false,
			module: false,
			clearImmediate: false,
			setImmediate: false
		}
	});
}