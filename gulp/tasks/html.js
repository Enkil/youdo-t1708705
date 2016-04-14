/**
 * Jade
 */
'use strict';

const
    gulp =          require('gulp'),
    config =        require('../config').html,
    prettify =      require('gulp-prettify'),
    jade =          require('gulp-jade'),
    jadeInherit =   require('gulp-jade-inheritance'),
    pugDoc =        require('pug-doc'),
    pugDocHTML =    require('pug-doc-html'),
    gulpif =        require('gulp-if'),
    changed =       require('gulp-changed'),
    notifier =      require('../helpers/notifier'),
    gutil =         require('gulp-util'),
    browserSync =   require("browser-sync"),
    plumber =       require('gulp-plumber'),
    reload =        browserSync.reload;

gulp.task('html', (cb) => {
    return gulp.src(config.src + '/**/!(_)*.jade')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulpif(devBuild, changed(config.dest)))
        .pipe(jadeInherit({basedir: config.src}))
        .pipe(jade(config.params))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('HTML');
        });
    // const htmlDocJson = new pugDoc({
    //     input: config.src  + '**/*.jade',
    //     output: config.dest + 'htmldoc.json'
    // })
    // const htmlDoc = new PugDocHTML({
    //     input: config.dest + 'htmldoc.json',
    //     output: 'output.html'
    // });
});