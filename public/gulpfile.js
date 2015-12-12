// gulpfile.js

////= RAPTORSMACSS Gulp Tasks
//======================================================================//

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglifyJS = require('gulp-uglify'),
    gutil = require('gulp-util'),

    chalk = gutil.colors,
    destination = gulp.dest,
    greenChalk = chalk.green,
    highlightChalk = chalk.underline.cyan.bgMagenta,
    log = gutil.log,
    timestamp = (new Date()).toString(),

    assetsPath = {
      'stylesheets': './assets/stylesheets',
      'javascripts': './assets/javascripts'
    },
    sourcePath = {
      'scssmanifest': './source/scss/raptor.scss',
      'scss': './source/scss/**/*.scss',
      'jsview': './source/javascripts/views/**/*.js',
      'jspoly': './source/javascripts/polyfills/**/*.js',
      'jsplug': './source/javascripts/plugins/**/*.js',
      'jslib': './source/javascripts/libs/**/*.js',
      'jshelp': './source/javascripts/helpers/**/*.js',
      'js': './source/js/*.js'
    };

//== Functions ==========================================================/

/// Prevents `watch` from breaking because of errors
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

//== Style Task =========================================================/

gulp.task('raptor-style', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based stylesheet at', greenChalk(timestamp));
  return gulp.src(sourcePath.scssmanifest)
  .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'expanded'
    }))
    .on('error', handleError)
    .pipe(destination(assetsPath.stylesheets))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifyCSS())
  .pipe(sourcemaps.write('./'))
  .pipe(destination(assetsPath.stylesheets));
});

//== Script Task ========================================================/

gulp.task('raptor-script', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based JavaScript file at', greenChalk(timestamp));
  return gulp.src([
    sourcePath.jspoly,
    sourcePath.jslib,
    sourcePath.jsplug,
    sourcePath.jshelp,
    sourcePath.jsview,
    sourcePath.js
  ])
  .pipe(sourcemaps.init())
    .pipe(concat('raptor.js'))
    .on('error', handleError)
    .pipe(destination(assetsPath.javascripts))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglifyJS())
  .pipe(sourcemaps.write('./'))
  .pipe(destination(assetsPath.javascripts));
});

//== Watch and Build Tasks ==============================================/

gulp.task('watch', function() {
  log('Watching for changes in the', highlightChalk('RAPTORSMACSS'), 'SCSS and JS files...');
  gulp.watch(sourcePath.scss, ['raptor-style']);
  gulp.watch(sourcePath.js, ['raptor-script']);
});

gulp.task('raptor-build', ['raptor-style', 'raptor-script']);

gulp.task('default', ['raptor-build', 'watch']);
