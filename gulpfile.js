/**
 * Created by Oakley Hall on 6/16/15.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');
var _ = require('lodash');
var libs = _.keys(require('./package.json').dependencies);

gulp.task('build', ['clean', 'app', 'vendor' ], function () {
  console.log( libs );
});

gulp.task('clean', function (cb) {
  del([ 'dist/**/*/*'], cb);
});

gulp.task('app', function () {
  browserify({
    entries: 'src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .on('prebundle', function(bundle) {
    // The following requirements are loaded from the vendor bundle
    libs.forEach(function(lib) {
      bundle.external(lib);
    });
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
});

gulp.task('vendor', function () {
  browserify({ debug: false })
    .on('prebundle', function(bundle) {
      // Require vendor libraries and make them available outside the bundle.
      libs.forEach(function(lib) {
        bundle.require(lib);
      });
    })
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('dist'));
});


gulp.task('assets', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['build', 'assets']);