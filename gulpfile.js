var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var webpackConfigProduction = require("./webpack.config.prod.js");
var print = require('gulp-print');
var del = require('del');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
    return gulp.src(['src/js/**/*.js','!src/js/services/coffee-varieties.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default',['static','webpack:build-dev','webpack-dev-server'])

gulp.task('watch',['lint', 'static','webpack:build-dev'], function() {
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

gulp.task('clean', function () {
  return del('build');
});



gulp.task('webpack:build-dev-production',['static'], function(callback){
  var prodConfig = Object.create(webpackConfigProduction);

  // create a single instance of the compiler to allow caching
  var prodCompiler = webpack(prodConfig);

  prodCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build-production", err);
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
})

var myDevConfig = Object.create(webpackConfig);
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

gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    contentBase:"build/",
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task("webpack-prod-server", function(callback) {
  var myConfig = Object.create(webpackConfigProduction);
  new WebpackDevServer(webpack(myConfig), {
    contentBase:"build/",
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: false
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});
