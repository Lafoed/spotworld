const path = require("path");
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


module.exports = {
    context: path.join(__dirname, "react"),
    entry : ["babel-polyfill","index"],
    // entry: {
    //     app: "index",
    //     vendor: ["../../index.js"],
    // },
    output: {
        path: path.join(__dirname, "static", "js"),
        filename:  "bundle.js"
    },
    //devtool:"inline-module-source-map",
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader?cacheDirectory",
            include: [
                path.resolve(__dirname, "react"),
            ],
            exclude:"node_modules"},
            {test: /\.css$/, loader: 'style!css',
                include: [
                path.resolve(__dirname, "static/css"),
            ]},

            // { test: /\.(gif|png|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader',  exclude:"node_modules"}
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ["", ".js", ".jsx"],
        root: [path.join(__dirname, "react")],
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new NpmInstallPlugin(),
        new webpack.ProvidePlugin({
            'React':  'react',
            'ReactRedux':'react-redux',
            'Redux' : 'redux',
            'ReactDom' : 'react-dom',
            "$": 'jquery'
        }),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: '"production"',
        //     },
        //     __DEVELOPMENT__: false,
        // }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //
        //     },
        //     mangle: false
        // })
    ],
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
};
