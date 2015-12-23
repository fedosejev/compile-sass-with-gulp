var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './source/**/*.scss';
var output = './build/';

gulp.task('compile-sass', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(gulp.dest(output));
});

gulp.task('watch-sass', function () {
  var tasks = ['compile-sass'];

  return gulp
    .watch(input, tasks)
    .on('change', function handleChange(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running ' + tasks + ' tasks');
    });
});

gulp.task('default', ['compile-sass', 'watch-sass']);