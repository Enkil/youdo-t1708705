/**
 * Build
 */
'use strict';

const 
    gulp =          require('gulp'),
    notifier =      require('../helpers/notifier'),
    gulpSequence =  require('gulp-sequence');

gulp.task('build', (cb) => {
    var tasks = ['clean', 'bower', 'fonts', 'css', 'js', 'img', 'svg', 'png-sprite', 'svg-sprite','html', 'txt', 'zip'];
    tasks.push(cb);
    gulpSequence.apply(this, tasks);     
    notifier('Build');
});
