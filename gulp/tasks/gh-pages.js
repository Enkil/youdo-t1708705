/**
 * GH-Pages
 */
'use strict';


const
    gulp = require('gulp'),
    config = require('../config').paths,
    ghPages = require('gulp-gh-pages');

gulp.task('gh-pages', () => {
    return gulp.src(config.dist + '**/*')
        .pipe(ghPages(config.gitRepository));
});