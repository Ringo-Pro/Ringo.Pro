const gulp = require('gulp');
const { series, parallel } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

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
exports.css = css;
exports.watch = watch;
