const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                cache: false,
            }),
        ],
    },
    entry: {
        app: './src/sandbox.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Titulo",
            template: "./src/index.html",
            filename: "index.html",
            favicon: "./assets/icons/favicon.png"
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|ttf|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 50000,
                    },
                },
            }
        ]
    }
};