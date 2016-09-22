var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var print = require('gulp-print');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src(['src/js/**/*.js','!src/js/services/coffee-varieties.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default',['lint', 'static', 'webpack:build-dev'], function() {
    gulp.watch(['src/**/*'], ['lint', 'static', 'webpack:build-dev']);
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
