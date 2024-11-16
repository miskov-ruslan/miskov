const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const outputDirectoryHTML = path.resolve(__dirname, 'dist');

const plugins = [
    new HTMLWebpackPlugin({
        filename: path.join(outputDirectoryHTML, 'index.html'),
        template: './index.html',
        minify: false,
        chunks: ['app', 'vanta']
    }),

    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
    new SpriteLoaderPlugin(),
]

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app: './app.js',
        vanta: './utils/vanta.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 3000,
        hot: true
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, './src/assets/img/sprites/'),
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: './src/assets/img/sprite.svg',
                            symbolId: 'icon-[name]'
                        },
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'svgo.config.js'),
                        },
                    }
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
        ]
    },
    plugins: plugins,
    stats: {
        children: true
    }
}
