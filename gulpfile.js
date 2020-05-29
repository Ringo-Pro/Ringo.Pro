const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('css', function() { 
return gulp.src([
    './server/dev/css/themes/light.css',
    './server/dev/css/filter-toggle.css',
    './server/dev/css/genre-filter.css',
    './server/dev/css/global.css',
    './server/dev/css/index.css',
    './server/dev/css/length-filter.css',
    './server/dev/css/reset.css',
    './server/dev/css/sidebar.css',
    './server/dev/css/topbar.css',
    './server/dev/css/vibes-filter.css',
])
.pipe(concat('index.css'))
.pipe(cleanCSS())
.pipe(autoprefixer({
    cascade: false
}))
.pipe(gulp.dest('./server/static/dist/'))
})

