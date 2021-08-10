const gulp = require('gulp');
const i18next = require('@urgn/gulp-i18next-conv');

gulp.task('default', function() {
  // Backend locales
  return gulp.src('languages/i18n-json/*.json')
    .pipe(i18next())
    .pipe(gulp.dest('languages/pontoon/'));
});
