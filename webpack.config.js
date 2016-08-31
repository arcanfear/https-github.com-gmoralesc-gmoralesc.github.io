var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [ {
    context: __dirname,
    entry: {
        styles: [
            './src/scss/main.scss'
        ]
    },
    output: {
        filename: 'main.css',
        path: './public/css/'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ]
}];
