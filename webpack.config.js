const path = require("path");
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


module.exports = {
    devtool:"inline-module-source-map",
    context: path.join(__dirname, "react"),
    entry: ['babel-polyfill', path.resolve(__dirname, "react")],

    output: {
        path: path.join(__dirname, "static", "js"),
        filename:  "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader?cacheDirectory",
            include: [
                path.resolve(__dirname, "react"),
            ],
            // exclude: "node_modules"
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },

    plugins: [
        // new NpmInstallPlugin(),

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
    ]
};
