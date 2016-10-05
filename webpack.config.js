 module.exports = {
     entry: './client_src/test.ts',
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
            ]
        }
 };