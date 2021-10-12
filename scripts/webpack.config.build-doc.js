const path = require('path');
const basePath = path.resolve(__dirname, '../');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    stats: 'minimal',
    entry: path.join(basePath, 'doc/index.ts'),
    output: {
        path: path.resolve(basePath, 'documents'),
        filename: '[name].bundle.js',
        publicPath: '/mammut-ui/',
    },
    resolve: {
        extensions: ['.ts', '.js', '.html', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?t=.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader', // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader', // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader', // 将 Sass 编译成 CSS
                        options: {
                            includePaths: [path.join(basePath, 'src')],
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    reportFiles: ['src/**/*.{ts,tsx}'],
                },
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },
        ],
    },
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(basePath, 'doc/index.ejs'),
        }),
        new webpack.DefinePlugin({
            GHPAGES_PREFIX: JSON.stringify('/mammut-ui'),
        }),
    ],
};
