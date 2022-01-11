const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function onError(err) {
  console.log(err);
}

gulp.task('styles', async function() {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch',function() {
  gulp.watch('css/styles.css', ['styles']);
});
