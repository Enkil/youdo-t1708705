/**
 * Images
 */
'use strict';

const
    gulp =              require('gulp'),
    config =            require('../config').images,
    imagemin =          require('gulp-imagemin'),
    pngquant =          require('imagemin-pngquant'),
    jpegoptim =         require('imagemin-jpegoptim'),
    imageminGifsicle =  require('imagemin-gifsicle'),
    changed =           require('gulp-changed'),
    gulpif =            require('gulp-if'),
    notifier =          require('../helpers/notifier'),
    gutil =             require('gulp-util'),
    plumber =           require('gulp-plumber'),
    browserSync =       require("browser-sync"),
    reload =            browserSync.reload;

gulp.task('img',(cb) => {
    return gulp.src(config.src)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulpif(devBuild, changed(config.build)))
        .pipe(gulpif(!devBuild, imagemin({
            progressive: true,
            optimizationLevel: 7,
            use: [pngquant(),jpegoptim({max: 95}),imageminGifsicle({interlaced: false})],
            interlaced: true
        })))
        .pipe(gulp.dest(config.build))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('Images');
        });
});