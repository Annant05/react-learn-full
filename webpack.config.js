// entry -> output
const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // the loader to use
            loader: 'babel-loader',
            // the files to work on. in our case all the .js file
            test: /\.js$/,
            // we want to exclude node_modules
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // setup source-map to help us debug the errors from browser console.
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        disableHostCheck: true,
        host: '0.0.0.0',
    }
};