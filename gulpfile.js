const gulp = require('gulp');
const { series, parallel } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function cssReset() {
  return gulp
    .src('./server/dev/reset/reset.css')
    .pipe(concat('reset.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./server/static/dist/'));
}
function css() {
  return gulp
    .src(['./server/dev/css/themes/*.css', './server/dev/css/*.css'])
    .pipe(concat('index.css'))
    .pipe(cleanCSS())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('./server/static/dist/'));
}
function watch() {
  gulp.watch(['./server/dev/css/*.css', './server/dev/css/themes/*.css'], css);
}
const buildCSS = gulp.series(cssReset, css);

exports.css = buildCSS;
exports.watch = watch;
