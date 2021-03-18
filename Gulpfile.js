const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', () => {
    return del([
        'dist/main.css',
    ]);
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.scss', (done) => {
      gulp.series(['clean', 'styles'])(done);
  });
});