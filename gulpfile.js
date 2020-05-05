const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssFiles = ('./css/*.css')
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename')


gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {

  return gulp.src(cssFiles)
  .pipe(cleanCSS({level: 2}))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./style'))

});