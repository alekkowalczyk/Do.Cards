const gulp = require("gulp");
const tslint = require("gulp-tslint");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

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
    const stream = gulp.src("./src/client/test.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./public/js"));
    return stream;
});