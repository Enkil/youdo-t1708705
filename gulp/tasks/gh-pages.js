/**
 * GH-Pages
 */
'use strict';


const
    gulp = require('gulp'),
    config = require('../config'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    ghPages = require('gulp-gh-pages');

gulp.task('gh-pages', () => {
    return gulp.src(config.paths.dist + '**/*')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(ghPages(config.ghpOptions));
});