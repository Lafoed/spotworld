const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
var isProd = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './react');
const staticsPath = path.join(__dirname, './static/js');

// const extractCSS = new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true });

// isProd=true;

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new webpack.ProvidePlugin({
        'React':  'react',
        'ReactRedux':'react-redux',
        'Redux' : 'redux',
        'ReactDom' : 'react-dom'
    }),
    // new HtmlWebpackPlugin({
    //     template: sourcePath + '/index.ejs',
    //     production: isProd,
    //     inject: true,
    // }),
];

const jsEntry = [
    'index',
    // 'webpack-hot-middleware/client'
    // 'pages/Home',
];
console.log(isProd);
if (isProd) {
    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false
            }
        })
        // extractCSS
    );

    // jsEntry.unshift(
    //     'webpack-dev-server/react?http://localhost:8080',
    //     'webpack/hot/only-dev-server'
    // );
} else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin()
        // prints more readable module names in the browser console on HMR updates
        // new webpack.optimize.OccurenceOrderPlugin()

        // new webpack.NoErrorsPlugin()

    );
}
module.exports = {
    // devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    context: sourcePath,
    entry: {
        js: jsEntry,
        vendor: [
            'react',
            'react-dom',
            'moment'
            // 'react-router-dom/es'
        ]
    },
    output: {
        path: staticsPath,
        filename: 'bundle.js',
        publicPath: '/js',
    },
    module: {
        // loaders:[{
        //     test:/\.js$/,
        //     loaders:['react-hot','babel'],
        //     include: path.join(__dirname,'react')
        // }],
        rules: [
            // {
            //     test: /\.html$/,
            //     use: {
            //         loader: 'file-loader',
            //         query: {
            //             name: '[name].[ext]'
            //         }
            //     }
            // },
            // {
            //     test: /\.scss$/,
            //     use: isProd ?
            //         extractCSS.extract({
            //             fallbackLoader: 'style-loader',
            //             loader: ['css-loader', 'sass-loader'],
            //         }) :
            //         ['style-loader', 'css-loader', 'sass-loader']
            // },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: false
                        }
                    }
                ]
            },
            // {
            //     test: /\.(gif|png|jpg|jpeg\ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            //     use: 'file-loader'
            // }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ]
    },
    plugins: plugins,
    devServer: {
        contentBase: './static',
        historyApiFallback: true,
        port: 8080,
        hot: true,
        compress: isProd,
        stats: { colors: true },
        proxy: {
            "/api": "http://localhost:3333"
        }
    }
};
