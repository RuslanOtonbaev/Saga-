const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outPath = path.join(__dirname, './dist');
const sourcePath = path.join(__dirname, './src');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./src/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: outPath,
        filename: "bundle.js"
    },
    stats: 'errors-only',
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx'],
        mainFields: ['module', 'browser', 'main']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    fallback: require.resolve('style-loader'),
                    use:      [
                        {
                            loader:  'css-loader',
                            options: {
                                modules:        true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use:  ExtractTextPlugin.extract({
                    fallback: require.resolve('style-loader'),
                    use:      [
                        {
                            loader:  'css-loader',
                            options: {
                                modules:        true,
                                sourceMap:      true,
                                importLoaders:  2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ]
    },
    plugins: [htmlWebpackPlugin],
    devServer: {
        port: 8000,
        contentBase: sourcePath,
        stats: 'errors-only',
        hot: true,
        historyApiFallback: true,
    }
};