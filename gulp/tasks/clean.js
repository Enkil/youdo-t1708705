/**
 * Gulp task
 * clean /client/dist directory
 */
'use strict';

var gulp =          require('gulp'),
    config =        require('../config').paths,
    notifier =      require('../helpers/notifier'),
    del =           require('del');


gulp.task('clean', () => {
    del(config.build);
    notifier('Clean');
});