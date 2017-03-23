const path = require("path");
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


module.exports = {
    // devtool:"inline-module-source-map",
    context: path.join(__dirname, "react"),
    entry : ["babel-polyfill","index"],

    output: {
        path: path.join(__dirname, "static", "js"),
        filename:  "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader?cacheDirectory",
            include: [
                path.resolve(__dirname, "react"),
            ],
            exclude:"node_modules"},
            { test: /\.css$/, loader: "style-loader!css-loader" },

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
