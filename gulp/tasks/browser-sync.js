/**
 * BrowserSync local web server
 */
'use strict';

var gulp =          require('gulp'),
    config =        require('../config').browserSync,
    browserSync =   require("browser-sync");

gulp.task('browser-sync',['build'], () => {
    browserSync(config.serve);
});