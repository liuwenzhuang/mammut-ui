const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const basePath = path.resolve(__dirname, '../');

const plugins = [
    new MiniCssExtractPlugin({
        filename: 'mammut-ui.css',
    }),
];

if (process.env.analyse) {
    plugins.push(
        new BundleAnalyzerPlugin({
            analyzerPort: Number(process.env.analyse) || 8889,
        })
    );
}

module.exports = {
    entry: path.join(basePath, 'src/index.ts'),
    output: {
        path: path.resolve(basePath, 'lib'),
        filename: 'mammut-ui.js',
        library: 'MammutUI',
        libraryTarget: 'umd',
    },
    externals: {
        regularjs: {
            commonjs: 'regularjs',
            commonjs2: 'regularjs',
            amd: 'regularjs',
            root: 'Regular',
        },
    },
    resolve: {
        extensions: ['.ts', '.js', '.html', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    reportFiles: ['src/**/*.{ts,tsx}'],
                },
            },
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
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
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },
        ],
    },
    plugins,
    mode: 'production',
};
