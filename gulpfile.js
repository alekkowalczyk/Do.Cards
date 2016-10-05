const gulp = require("gulp");
const tslint = require("gulp-tslint");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

gulp.task("lint", function() {
    return gulp.src([
        "server/**/**.ts",
        "client_src/**/**.ts",
        "test/**/**.test.ts"
    ])
    .pipe(tslint({ formatter: "verbose" }))
    .pipe(tslint.report());
});

var tsProject = tsc.createProject("tsconfig.json");
gulp.task("build-server", function() {
    return gulp.src([
            "server_src/**/**.ts",
            "typings/index.d.ts/"
        ])
        .pipe(sourcemaps.init())
        .pipe(tsc())
        .js
        .pipe(sourcemaps.write("./maps", {sourceRoot: '../server_src'}))
        .pipe(gulp.dest("server_build"));
});

gulp.task("build-client", function() {
    const stream = gulp.src("./client_build/test.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./public/js"));
    return stream;
});