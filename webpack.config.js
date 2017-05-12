const webpack = require("webpack");
const path = require("path");
 
 module.exports = {
     entry: [
         "react-hot-loader/patch",
         "webpack-dev-server/client?http://localhost:3000",
         "webpack/hot/only-dev-server",
         path.resolve(__dirname, "src/client/index")
     ],
     devtool: 'source-map',
     output: {
         path: require("path").resolve("./public/js"),
         filename: 'js/app.bundle.js',
         publicPath: "/public/",
     },
     resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                ts: { configFileName: "tsconfig_client.json" },
                resolve: {}
                }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre",
                test: /\.js$/, 
                loader: "source-map-loader" 
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    //"awesome-typescript-loader",
                    "ts-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src/client"),
            },
            {
                test: /\.css$/, 
                loader: "file-loader"
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
 };