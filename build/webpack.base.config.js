/**
 * Created by lichun on 2017/1/18.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const srcPath = path.resolve(__dirname, '../src')
module.exports = {
    context: srcPath,
    entry: {
        app: [path.join(srcPath, 'main.js')]
        // vendor: ['vue', 'vue-router', 'vuex', 'v-tap', 'es6-promise', 'axios']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {'presets': ['vue-app'], 'babelrc': false, 'cacheDirectory': true}
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue'],
        alias: {
            '~common': path.join(srcPath, 'common'),
            '~components': path.join(srcPath, 'components'),
            '~directives': path.join(srcPath, 'directives'),
            '~store': path.join(srcPath, 'store'),
            '~pages': path.join(srcPath, 'pages'),
            '~assets': path.join(srcPath, 'assets'),
            'assets': path.join(srcPath, 'assets'),
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(srcPath, 'index.ejs')
            // chunks: ['manifest', 'vendor', 'main']
        })

        /* new CopyWebpackPlugin([
         {from: 'login', to: 'login'},
         ]) */
    ]
}
