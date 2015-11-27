'use strict';
var Promise = require('es6-promise').Promise; // polyfill
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: false,
    entry: {
        demo: path.join(srcPath, 'module.js'),
        vendor: ['react']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '',
        filename: 'vo-[name]-[hash].js',
        pathInfo: true
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css?importLoaders=1!postcss'},
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}},
            {test: /\.scss$/,loaders: ["style", "css", "sass"]}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    debug: false
};