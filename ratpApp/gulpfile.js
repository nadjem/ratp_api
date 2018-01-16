var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  cssnano = require('gulp-cssnano');

  gulp.task('styles', function() {
  return sass('./scss/style.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./src/assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./src/assets/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('default', function() {
  gulp.start('styles');
});
