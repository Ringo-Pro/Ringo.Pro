const gulp = require('gulp'),
  { series, parallel } = require('gulp'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  terser = require('gulp-terser'),
  imagemin = require('gulp-imagemin');

const jsFiles = [
    './server/dev/js/*.js',
    '!./server/dev/js/filter-toggle.js',
    '!./server/dev/js/filter-menu.js',
    '!./server/dev/js/input-support.js',
  ],
  cssFiles = [
    './server/dev/css/*.css',
    './server/dev/css/themes/*.css',
    '!./server/dev/css/sidebar.css',
  ];

function cssReset() {
  return gulp
    .src('./server/dev/reset/reset.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./server/static/dist/'));
}
function css() {
  return gulp
    .src(cssFiles)
    .pipe(concat('index.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest('./server/static/dist/'));
}
function es() {
  return gulp
    .src(jsFiles)
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
  gulp.watch(cssFiles, css);
  gulp.watch(jsFiles, es);
}

const build = gulp.series(cssReset, css, es, img);

exports.css = css;
exports.es = es;
exports.img = img;
exports.watch = watch;
exports.build = build;
exports.default = build;
