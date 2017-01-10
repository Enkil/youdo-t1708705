/**
 * Fonts
 */
'use strict';

const
    gulp =          require('gulp'),
    config =        require('../config').fonts,
    notifier =      require('../helpers/notifier'),
    gutil =         require('gulp-util'),
    plumber =       require('gulp-plumber'),
    browserSync =   require("browser-sync"),
    reload =        browserSync.reload;

gulp.task('fonts', () => {
    return gulp.src(config.src + '**/*')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulp.dest(config.build))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('Fonts');
        });
});