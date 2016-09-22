var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var babel = require('gulp-babel');
var gulp = require('gulp');
var print = require('gulp-print');
var flatten = require('gulp-flatten');

gulp.task('default',['static','webpack:build-dev'], function() {
    gulp.watch(['src/**/*'], ['static','webpack:build-dev']);
});

gulp.task('copyImages', function() {
   gulp.src('src/img/**/*.{png,jpg,gif}')
   .pipe(gulp.dest('build/img'));
});

gulp.task('static',['copyImages'], function(){
    return gulp.src(['src/**/*.html','src/**/*.css'])
    .pipe(print())
    .pipe(gulp.dest('build'));
})

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-dev", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});
