const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('default', function() { 
return gulp.src([
    './dev/css/themes/light.css',
    './dev/css/filter-toggle.css',
    './dev/css/genre-filter.css',
    './dev/css/global.css',
    './dev/css/index.css',
    './dev/css/length-filter.css',
    './dev/css/reset.css',
    './dev/css/sidebar.css',
    './dev/css/topbar.css',
    './dev/css/vibes-filter.css',
])
.pipe(concat('index.css'))
.pipe(cleanCSS())
.pipe(autoprefixer({
    cascade: false
}))
.pipe(gulp.dest('./static/dist/'))
})


