var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [ {
    context: __dirname,
    entry: {
        main: './src/scss/main.scss',
        print: './src/scss/print.scss'
    },
    output: {
        filename: '[name].css',
        path: './public/css/'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}];
