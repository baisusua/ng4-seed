const helpers = require('./helpers');
const buildUtils = require('./build-utils');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const EvalSourceMapDevToolPlugin = require('webpack/lib/EvalSourceMapDevToolPlugin');

const config = require('./config.json');

module.exports = function (options) {
	const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';
	const HOST = process.env.HOST || 'localhost';
	const PORT = process.env.PORT || 4000;

	const METADATA = Object.assign({}, buildUtils.DEFAULT_METADATA, {
		host: HOST,
		port: PORT,
		ENV: ENV,
		HMR: true,
		PUBLIC: process.env.PUBLIC_DEV || HOST + ':' + PORT
	});

	return webpackMerge(commonConfig({
		env: ENV,
		metadata: METADATA
	}), {
		output: {
			path: helpers.root('dist'),
			filename: '[name].bundle.js',
			sourceMapFilename: '[file].map',
			chunkFilename: '[id].chunk.js',
			library: 'ac_[name]',
			libraryTarget: 'var',
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
					include: [helpers.root('src', 'styles')]
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
					include: [helpers.root('src', 'styles')]
				},

			]

		},

		plugins: [
			new DefinePlugin({
				'ENV': JSON.stringify(METADATA.ENV),
				'HMR': true,
				'process.env': {
					'ENV': JSON.stringify('local'),
					'NODE_ENV': JSON.stringify('local'),
					'HMR': true,
					'API': JSON.stringify(config[METADATA.ENV].API),
					'TRACK_URL': JSON.stringify(config[METADATA.ENV].TRACK_URL),
					'TRACK_ID': JSON.stringify(config[METADATA.ENV].TRACK_URL)
				}
			}),
			new EvalSourceMapDevToolPlugin({
				moduleFilenameTemplate: '[resource-path]',
				sourceRoot: 'webpack:///'
			}),
			new NamedModulesPlugin(),
			new LoaderOptionsPlugin({
				debug: true,
				options: {}
			})
		],
		devServer: {
			port: METADATA.port,
			host: METADATA.host,
			hot: METADATA.HMR,
			public: METADATA.PUBLIC,
			historyApiFallback: true,
			watchOptions: {
				ignored: /node_modules/
			},
			setup: function (app) {
				/*  */
			}
		},
		node: {
			global: true,
			crypto: 'empty',
			process: true,
			module: false,
			clearImmediate: false,
			setImmediate: false
		}

	});
}