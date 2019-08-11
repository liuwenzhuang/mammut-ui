const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = path.resolve(__dirname, '../');

module.exports = {
    entry: path.join(basePath, 'src/index.js'),
    output: {
        path: path.resolve(basePath, 'lib'),
        filename: 'mammut-ui.js',
        library: 'MammutUI',
        libraryTarget: 'umd'
    },
    externals: {
        lodash: '_',
        regularjs: 'Regular'
    },
    resolve: {
        extensions: ['.js', '.html', '.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                }, {
                    loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[local]--[hash:base64:5]'
                        }
                    }
                }, {
                    loader: 'sass-loader', // 将 Sass 编译成 CSS
                    options: {
                        includePaths: [path.join(basePath, 'src')]
                    }
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'mammut-ui.css'
        })
    ],
    mode: 'production'
};
