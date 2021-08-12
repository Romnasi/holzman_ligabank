const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();

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
  .pipe(sync.stream());

exports.styles = styles;


const watcher = () => {
  gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('public/*.html').on('change', sync.reload);
};

exports.default = gulp.series(
  styles, watcher,
);


