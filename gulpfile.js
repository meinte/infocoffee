var babel = require('gulp-babel');
var gulp = require('gulp');
var print = require('gulp-print');
var flatten = require('gulp-flatten');

gulp.task('libs', function(){
    return gulp.src([
        'node_modules/systemjs/dist/system.js',
        'node_modules/babel-polyfill/dist/polyfill.js'])
        .pipe(print())
        .pipe(gulp.dest('build/libs'));
});

gulp.task('default',['libs'], function() {
  return gulp.src('app/**/*.js')
    .pipe(print())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build'));
});
