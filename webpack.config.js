var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var version = '1.0.0';
module.exports = {
    entry: {'index': './src/index.js'},
    output: {
        path: __dirname + "/dist/" + version + "/",
        publicPath: __dirname + "/dist/" + version + "/",
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel-loader"], exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!less?sourceMap", {publicPath: './'})
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css?sourceMap", {publicPath: './'})
            },
            {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff2?)$/,
                loader: "url-loader?limit=8192&name=[path][name].[ext]"
            }
        ]
    },
    plugins: [
        //分离出CSS
        new ExtractTextPlugin("[name].min.css", {
            allChunks: true
        }),
        //启用压缩
        // new webpack.optimize.UglifyJsPlugin()
    ],
    externals: {"jquery": "jQuery"}
};