var gulp = require('gulp');
	concatCss = require('gulp-concat-css');
	watch = require('gulp-watch');

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('app/'))
});

gulp.task('html', function () {
	return gulp.src('index.html')
    .pipe(gulp.dest('templates/'))
});

gulp.task('watch', function () {
	gulp.watch('css/*.css', ['concat']);
	gulp.watch(['*.html', 'templates/*.html'], ['html']);
});

gulp.task('default', ['concat', 'html', 'watch']);