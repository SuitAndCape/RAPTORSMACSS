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

    inputPath = {
      'js': './source/js/**/*.js',
      'mainscss': './source/scss/raptor.scss',
      'scss': './source/scss/**/*.scss',
      'vendorjs': './assets/javascripts/vendors/**/*.js'
    },
    outputPath = {
      'stylesheets': './assets/stylesheets',
      'javascripts': './assets/javascripts'
    };

/// Prevents `watch` from breaking because of errors
/// SOURCE: http://stackoverflow.com/a/23973536
function handleError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('raptor-css', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based stylesheet at', greenChalk(timestamp));
  return gulp.src(inputPath.mainscss)
  .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'expanded'
    }))
    .on('error', handleError)
    .pipe(destination(outputPath.stylesheets))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifyCSS())
  .pipe(sourcemaps.write('./'))
  .pipe(destination(outputPath.stylesheets));
});

gulp.task('raptor-js', function() {
  log('Generating', highlightChalk('RAPTORSMACSS'), 'based JavaScript file at', greenChalk(timestamp));
  return gulp.src([
    inputPath.vendorjs,
    inputPath.js
  ])
  .pipe(sourcemaps.init())
    .pipe(concat('raptor.js'))
    .on('error', handleError)
    .pipe(destination(outputPath.javascripts))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglifyJS())
  .pipe(sourcemaps.write('./'))
  .pipe(destination(outputPath.javascripts));
});

gulp.task('watch', function() {
  log('Watching for changes in the', highlightChalk('RAPTORSMACSS'), 'SCSS and JS files...');
  gulp.watch(inputPath.scss, ['raptor-css']);
  gulp.watch(inputPath.js, ['raptor-js']);
});

gulp.task('raptor-build', ['raptor-css', 'raptor-js']);

gulp.task('default', ['raptor-build', 'watch']);
