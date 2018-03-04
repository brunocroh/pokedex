const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

gulp.task('default', () =>
  gulp.src('assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/assets'))
)
