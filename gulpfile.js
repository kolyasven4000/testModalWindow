var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    livereload = require('gulp-livereload');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('scss', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer('last 20 versions', 'ie 8'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('app/index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    	gulp.watch('scss/**/*.scss', ['scss'])
    	gulp.watch('app/index.html', ['html'])
})

gulp.task('default', ['connect', 'scss', 'html', 'watch']);