/**
 * Git deploy
 */
'use strict';

const
    gulp =          require('gulp'),
    deploy = require('gulp-deploy-git'),
    config = require('../config').paths;

gulp.task('deploy', () => {
    return gulp.src(config.root)
        .pipe(deploy({
            repository: config.gitRepository,
            branches:   ['master']
        }))
        .pipe(deploy({
            repository: config.gitRepository,
            branches:   ['staging'],
            message: 'Deploy to staging'
        }));
});