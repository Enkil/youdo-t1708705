/**
 * Images
 */
'use strict';

const
    gulp =              require('gulp'),
    config =            require('../config').svg,
    imagemin =          require('gulp-imagemin'),
    changed =           require('gulp-changed'),
    notifier =          require('../helpers/notifier'),
    gutil =             require('gulp-util'),
    gulpif =            require('gulp-if'),
    plumber =           require('gulp-plumber'),
    browserSync =       require("browser-sync"),
    reload =            browserSync.reload;

gulp.task('svg',(cb) => {
    return gulp.src(config.src)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulpif(devBuild, changed(config.build)))
        .pipe(gulpif(!devBuild, imagemin({
            multipass: true,
            optimizationLevel: 7
        })))
        .pipe(gulp.dest(config.build))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('SVG');
        });
});