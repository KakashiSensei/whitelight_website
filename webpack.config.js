const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", 'AppClient.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "cheap-module-source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.jpg', '.png']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    devServer: {
        publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(html)$/,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader?name=src/asset/[name].[ext]"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=src/asset/font/[name].[ext]"
            },
            {
                test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=src/asset/font/[name].[ext]"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                'BROWSER': JSON.stringify(true),
                'NODE_ENV': JSON.stringify('development'),
                'REST_API': JSON.stringify('http://localhost:3000'),
                'APP_ID': JSON.stringify("1866917183572616")
            }
        }),
        new ExtractTextPlugin("styles.css"),
    ]
}