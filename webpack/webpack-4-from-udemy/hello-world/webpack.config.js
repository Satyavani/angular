const path = require('path');
//TerserPlugin is new way of 2019 used for minifying JS files. Earlier it was UglifyJsMinify.
const TerserPlugin = require('terser-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'dist'), // specifies where to place dynamically generated files
        publicPath: '' // specifies folder under which dynamic generated content like images/css etc files are available
    },
    mode: 'none',
    module: {
        rules:[
            {
                test: /\.(jpg|png)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ], //this helps in converting above ES6 code down to ES5
                        plugins: [ 'transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.[contenthash].css"
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello world app'
        })
    ]
};