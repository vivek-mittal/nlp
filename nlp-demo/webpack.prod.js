const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebPackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsWebPackPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxWebPackPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    optimization: {
        minimizer: [new TerserWebPackPlugin({}), new OptimizeCSSAssetsWebPackPlugin({})]
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new WorkboxWebPackPlugin.GenerateSW({
            swDest: 'sw.js',
            skipWaiting: true,
            clientsClaim: true
        }),
        new MiniCssExtractPlugin({filename: '[name].css'})
    ]
}