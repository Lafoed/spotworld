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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    // new webpack.optimize.OccurenceOrderPlugin()

    // new webpack.NoErrorsPlugin()
    new webpack.ProvidePlugin({
        'React':  'react',
        'ReactRedux':'react-redux',
        'Redux' : 'redux',
        'ReactDom' : 'react-dom',
        '_':'lodash',
        'geo':'geolib',
        'Parse':'parse'
    }),
    // new HtmlWebpackPlugin({
    //     template: sourcePath + '/index.ejs',
    //     production: isProd,
    //     inject: true,
    // }),
];

const jsEntry = [
    'index',
];

module.exports = {
    //long compilation check ol-debug, large library, change on leaf?
    devtool:  'cheap-module-source-map',
    context: sourcePath,
    entry: {
        js: jsEntry,
        vendor: [
            'react',
            'react-dom',
            'moment',
            'parse'
        ]
    },
    output: {
        path: staticsPath,
        filename: 'bundle.js',
        publicPath: '/js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
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
            }
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
        historyApiFallback: false,
        port: 8080,
        hot: true,
        compress: false,
        stats: { colors: true },
        proxy: {
            "/graphiql": "http://localhost:3333/graphiql",
            "/auth": "http://localhost:3333"
        }
    }
};
