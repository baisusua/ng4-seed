const ts = require('typescript');
const path = require('path');
const fs = require('fs');
const helpers = require('./helpers');

const DEFAULT_METADATA = {
    title: 'angular5-spa-seed',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer(),
    HMR: helpers.hasProcessFlag('hot'),
    AOT: process.env.BUILD_AOT || helpers.hasNpmFlag('aot'),
    WATCH: helpers.hasProcessFlag('watch'),
    tsConfigPath: 'tsconfig.webpack.json',
    envFileSuffix: false
};

function readTsConfig(tsConfigPath) {
    const configResult = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
    return ts.parseJsonConfigFileContent(configResult.config, ts.sys,
        path.dirname(tsConfigPath), undefined, tsConfigPath);
}

function getEnvFile(status) {
    let fileName = helpers.root(`src/environments/environment.ts`);
    if (status) {
        fileName = helpers.root(`src/environments/environment.prod.ts`);
    }
    if (fs.existsSync(fileName)) {
        return fileName;
      } else if (fs.existsSync(fileName = helpers.root('src/environments/environment.ts'))) {
        console.warn(`Could not find environment file , loading default environment file`);
        return fileName;
      } else {
        throw new Error('Environment file not found.')
      }
}

function ngcWebpackSetup(prod, metadata) {
    if (!metadata) {
        metadata = DEFAULT_METADATA;
    }

    const buildOptimizer = prod;
    const sourceMap = true; // TODO: apply based on tsconfig value?
    const ngcWebpackPluginOptions = {
        skipCodeGeneration: !metadata.AOT,
        sourceMap
    };

    const environment = getEnvFile(metadata.envFileSuffix);
    if (environment) {
        ngcWebpackPluginOptions.hostReplacementPaths = {
            [helpers.root('src/environments/environment.ts')]: environment
        }
    }

    if (!prod && metadata.WATCH) {
        // Force commonjs module format for TS on dev watch builds.
        ngcWebpackPluginOptions.compilerOptions = {
            module: 'commonjs'
        };
    }

    const buildOptimizerLoader = {
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
            sourceMap
        }
    };

    const loaders = [{
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            use: metadata.AOT && buildOptimizer ? [buildOptimizerLoader, '@ngtools/webpack'] : ['@ngtools/webpack']
        },
        ...buildOptimizer ? [{
            test: /\.js$/,
            use: [buildOptimizerLoader]
        }] : []
    ];

    return {
        loaders,
        plugin: ngcWebpackPluginOptions
    };
}


exports.DEFAULT_METADATA = DEFAULT_METADATA;
exports.readTsConfig = readTsConfig;
exports.getEnvFile = getEnvFile;
exports.ngcWebpackSetup = ngcWebpackSetup;