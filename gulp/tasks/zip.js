const
    gulp = require('gulp'),
    config =        require('../config').paths,
    zip = require('gulp-zip');

gulp.task('zip', () => {
    return gulp.src(config.build)
        .pipe(zip('app.zip'))
        .pipe(gulp.dest(config.root));
});