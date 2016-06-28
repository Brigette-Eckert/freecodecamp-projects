var gulp = require('gulp'),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps')
  plumber = require('gulp-plumber');

gulp.task('babel', () => {
  return gulp.src('app/main.babel.js')
  .pipe(plumber())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(plumber.stop())
  .pipe(rename('main.js'))
  .pipe(gulp.dest('app/'))
});

gulp.task('sass', () => {
  gulp.src('styles/main.scss')
      .pipe(maps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(plumber.stop())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('styles/'))
});

gulp.task('stream', ['babel', 'sass'] , () => {
  gulp.watch('app/*.babel.js', ['babel']);
  gulp.watch('styles/*.scss', ['sass']);
});