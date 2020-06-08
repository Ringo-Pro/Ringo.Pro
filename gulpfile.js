const gulp = require('gulp'),
  { series, parallel } = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  terser = require('gulp-terser'),
  imagemin = require('gulp-imagemin');

function cssReset() {
  return gulp
    .src('./server/dev/reset/reset.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./server/static/dist/'));
}
function css() {
  return gulp
    .src(['./server/dev/css/themes/*.css', './server/dev/css/*.css'])
    .pipe(concat('index.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./server/static/dist/'));
}
function es() {
  return gulp

    .src(['./server/dev/js/*.js', '!./server/dev/js/filter-toggle.js'])
    .pipe(terser())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./server/static/dist/'));
}
function img() {
  return gulp
    .src('./server/dev/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./server/static/dist/img/'));
}
function watch() {
    gulp.watch(['./server/dev/css/*.css', './server/dev/css/themes/*.css'], css);
    gulp.watch(['./server/dev/js/*.js', '!./server/dev/js/filter-toggle.js'], es);
  }

const build = gulp.series(cssReset, css, es, img);

exports.css = css;
exports.es = es;
exports.img = img;
exports.watch = watch;
exports.build = build;
exports.default = build;
