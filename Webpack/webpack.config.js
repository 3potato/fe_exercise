const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var ENV = process.env.NODE_ENV

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }]
                            ]
                        }
                    }
                ],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            // 处理图片
            {
                test: /\.(png|jpg|gif|ttf|eot|woff(2)?)(\?[=a-z0-9]+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        query: {
                            // 阈值 单位byte
                            limit: '8192',
                            name: 'images/[name]_[hash:7].[ext]',
                        }
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            hash: true,
            // 压缩 => production 模式使用
            minify: {
                removeAttributeQuotes: true, //删除双引号
                collapseWhitespace: true //折叠 html 为一行
            }
        }),
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'pageB.html',
        //     title: 'pageB',
        //     chunks: ['pageB'],
        //     hash: true,
        //     minify: {
        //         removeAttributeQuotes: true
        //     }
        // }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin()

    ],
    devtool: 'cheap-eval-source-map',
    devServer:{
        contentBase: './dist', // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
        hot: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 2,
                    name: 'common'
                }
            }
        },
        minimizer: [
            new UglifyWebpackPlugin({
                parallel: 4
            })
        ]
    },
    resolve: {
        /**
         * alias: 别名的配置
         *
         * extensions: 自动解析确定的扩展,
         *    比如 import 'xxx/theme.css' 可以在extensions 中添加 '.css'， 引入方式则为 import 'xxx/theme'
         *    @default ['.wasm', '.mjs', '.js', '.json']
         *
         * modules 告诉 webpack 解析模块时应该搜索的目录
         *   如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索
         *   这样配置在某种程度上可以简化模块的查找，提升构建速度 @default node_modules 优先
         */
        alias: {
            '@': path.resolve(__dirname, 'src'),
            tool$: path.resolve(__dirname, 'src/utils/tool.js') // 给定对象的键后的末尾添加 $，以表示精准匹配
        },
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
};