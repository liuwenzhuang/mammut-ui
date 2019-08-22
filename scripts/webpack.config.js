const path = require('path');
const basePath = path.resolve(__dirname, '../');

module.exports = {
    stats: 'minimal',
    entry: path.join(basePath, 'doc/index.ts'),
    output: {
        path: path.resolve(basePath, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.html', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?t=.*)?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                }, {
                    loader: 'css-loader' // 将 CSS 转化成 CommonJS 模
                }]
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
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    reportFiles: [
                        'src/**/*.{ts,tsx}'
                    ]
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    devServer: {
        port: 8444,
        historyApiFallback: {
            index: 'doc/index.html'
        },
        open: true
    },
    devtool: 'source-map',
    mode: 'development'
};
