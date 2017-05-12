const gulp = require("gulp");
const gutil = require("gulp-util");
const tslint = require("gulp-tslint");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const WebpackDevServer = require("webpack-dev-server");

gulp.task("lint", () => gulp.src([
        "src/server/**/**.ts",
        "src/client/**/**.ts",
        "test/**/**.test.ts"
    ])
    .pipe(tslint({ formatter: "verbose" }))
    .pipe(tslint.report())
    );

const tsProject = tsc.createProject("tsconfig_srv.json");
gulp.task("build-server", () => 
    gulp.src([
            "src/server/**/**.ts",
            "typings/index.d.ts/"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write("./maps", {sourceRoot: '../../src/server'}))
        .pipe(gulp.dest("server"))
);

gulp.task("copy-client-assets", () => {
    return gulp.src([
        "./node_modules/react/dist/react.js",
        "./node_modules/react-dom/dist/react-dom.js"
        ])
    .pipe(gulp.dest("./public/js"));
});

gulp.task("build-client", ["copy-client-assets"], () => {
    const stream = gulp.src("./src/client/index.tsx")
        .pipe(gulpWebpack(require("./webpack.config.js"), webpack))
        .pipe(gulp.dest("./public/js"));
    return stream;
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(require("./webpack.config.js"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

//TODO: this doesn't work, standard node just_client_server.js works
gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(require("./webpack.config.js"));

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});