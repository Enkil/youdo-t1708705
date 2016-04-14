/**
 * SVG-sprite
 */
'use strict';

const gulp =              require('gulp'),
    config =            require('../config').svgSprite,
    svgstore =          require('gulp-svgstore'),
    svgmin =            require('gulp-svgmin'),
    changed =           require('gulp-changed'),
    gutil =             require('gulp-util'),
    gulpif =            require('gulp-if'),
    browserSync =       require("browser-sync"),
    reload =            browserSync.reload,
    path =              require('path'),
    notifier =          require('../helpers/notifier'),
    cheerio =           require('gulp-cheerio'),
    plumber =           require('gulp-plumber');

gulp.task('svg-sprite', () => {
    return gulp.src(config.src)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulpif(devBuild, changed(config.dest)))
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(cheerio({
            run: function ($, file) {
                $('svg').addClass('_hide');
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('SVG sprite');
        });
});