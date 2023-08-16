const path =require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts"],
    },
    mode: "development",
    entry: {
        app: ["./index.ts"],
    },
    output: {
        filename: "[name].[chunkhash].js",
        clean: true,
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            type: "asset/resource",
        },
        ],
    },
    devServer: {
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    ],
};