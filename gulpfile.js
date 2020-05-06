const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cssFiles = ('./css/*.css');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


  function bs(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
    watch("./css/*.css", styles);
  };

  function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
  };

  function styles() {

    return src(cssFiles)
    .pipe(cleanCSS({level: 2}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('./style'))
  
  };
exports.serve = bs;
