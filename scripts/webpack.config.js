const path = require('path');
const basePath = path.resolve(__dirname, '../');

module.exports = {
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
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    reportFiles: [
                        'src/**/*.{ts,tsx}'
                    ]
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
    devServer: {
        port: 8444,
        historyApiFallback: {
            index: 'doc/index.html'
        }
    },
    devtool: 'source-map',
    mode: 'development'
};
