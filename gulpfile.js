const gulp = require("gulp");
const tslint = require("gulp-tslint");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const merge = require('merge2');

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