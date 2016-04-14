/**
 * Fonts
 */
'use strict';

const
    gulp =          require('gulp'),
    config =        require('../config').fonts,
    changed =       require('gulp-changed'),
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
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('Fonts');
        });
});