const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bandle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',       
        port: 4200

    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                 exclude: /node_modules/, 
                 loader: 'babel-loader' 
            }
        ]
    }
}