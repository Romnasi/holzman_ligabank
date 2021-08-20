const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');

// Styles

const styles = () => gulp.src('src/sass/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('public/css'))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('public/css'));
exports.styles = styles;


const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
};

exports.default = gulp.series(
  styles, watcher,
);


