 module.exports = {
     entry: './src/client/index.tsx',
     devtool: 'source-map',
     output: {
         path: require("path").resolve("./public/js"),
         filename: 'app.bundle.js'
     },
     resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },
        module: {
            loaders: [
                // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
                { test: /\.tsx?$/, loader: "ts-loader" }
            ],
            preLoaders: [
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { test: /\.js$/, loader: "source-map-loader" }
            ]
        },
    ts: {
        configFileName: "tsconfig_client.json",
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
 };