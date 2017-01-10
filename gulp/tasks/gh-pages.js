/**
 * GH-Pages
 */
'use strict';


const
    gulp = require('gulp'),
    config = require('../config').paths,
    ghPages = require('gulp-gh-pages');

gulp.task('gh-pages', () => {
    return gulp.src(config.build + '**/*')
        .pipe(ghPages(config.gitRepository));
});