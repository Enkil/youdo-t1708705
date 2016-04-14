/**
 * Bower
 */
'use strict';

const 
    gulp =                  require('gulp'),
    config =                require('../config').bower,
    configCSS =             require('../config').css,
    configJS =              require('../config').js,
    notifier =              require('../helpers/notifier'),
    gulpFilter =            require('gulp-filter'),
    gutil =                 require('gulp-util'),
    mainBowerFiles =        require('main-bower-files'),
    browserSync =           require("browser-sync"),
    reload =                browserSync.reload,
    plumber =               require('gulp-plumber');

gulp.task('bower', () => {
    var jsFilter = gulpFilter(['**/*.js'], {restore: true}),
        cssFilter = gulpFilter(['**/*.{css,scss,sass}'], {restore: true});

    return gulp.src(mainBowerFiles({
            includeDev: true,
            base: config.src
        }))
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        // Get vendor JavaScript
        .pipe(jsFilter)
        .pipe(gulp.dest(configJS.destVendor))
        .pipe(jsFilter.restore)
        // Get vendor CSS
        .pipe(cssFilter)
        .pipe(gulp.dest(configCSS.destVendor))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('Bower');
        });
});