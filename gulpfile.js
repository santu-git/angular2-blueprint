var gulp = require('gulp');

var assetsDev   = 'dev/assets/';
var assetsProd  = 'app/assets/';

var appDev  = 'dev/';
var appProd = 'app/';

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

gulp.task('build-css', function () {
  return gulp.src(assetsDev + 'scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(postcss([precss, autoprefixer, cssnano]))
    .pipe(sourcemaps.write())
    .pipe(ext_replace('.css'))
    .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-html', function () {
  return gulp.src(appDev + '**/*.html')
    .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
  gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);

});

gulp.task('default', ['watch','build-css']);




