/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-minify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('minify-js', function () {
  gulp.src(['bower_components/angular/angular.js','bower_components/bootstrap/dist/js/bootstrap.min.js','bower_components/jquery/dist/js/jquery.min.js'])
  .pipe(concat('vendor.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/javascripts'));
});

gulp.task('minify-css1', function () {
 return gulp.src([
     'bower_components/bootstrap/dist/css/bootstrap.css',
     ])
  .pipe(sourcemaps.init())
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(rename({suffix:'.min', basename: "vendor"}))
  .pipe(gulp.dest('public/stylesheets'));
});