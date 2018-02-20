const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: { 
        main: "./src/",
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [
            path.resolve(__dirname, "dist"),
            path.resolve(__dirname),
        ],
        host: "0.0.0.0",
        historyApiFallback: true,
        // public: "1b969b95.ngrok.io",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"],
                        plugins: ["transform-object-rest-spread"]
                    },
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "MyAwesomeBookShop",
            // filename: path.resolve(__dirname, "index.html"),
            template: path.resolve(__dirname, "src/templates/index.html"),
            favicon: path.resolve(__dirname, "favicon.ico"),
            xhtml: true,
                 
        }),
        new ExtractTextPlugin("style.css")
    ]
};
