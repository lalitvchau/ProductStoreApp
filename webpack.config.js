let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './js/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: require.resolve('style-loader')
            },
            {
                test: /\.css$/,
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: "[name]__[local]___[hash:base64:5]"
                }
            }
        ]
    }
};