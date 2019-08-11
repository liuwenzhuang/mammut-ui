const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = path.resolve(__dirname, '../');

module.exports = {
    entry: path.join(basePath, 'src/index.ts'),
    output: {
        path: path.resolve(basePath, 'lib'),
        filename: 'mammut-ui.js',
        library: 'MammutUI',
        libraryTarget: 'umd'
    },
    externals: {
        lodash : {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_' // 指向全局变量
        },
        regularjs: {
            commonjs: 'regularjs',
            commonjs2: 'regularjs',
            amd: 'regularjs',
            root: 'Regular'
        }
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
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
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
        new MiniCssExtractPlugin({
            filename: 'mammut-ui.css'
        })
    ],
    mode: 'production',
    devtool: 'sourcemap'
};
