/**
 * JavaScript
 */
'use strict';

const
    browserify =    require('browserify'),
    uglify =        require('gulp-uglify'),
    gulp       =    require('gulp'),
    gulpBrowser =   require("gulp-browser"),
    gulpif =        require('gulp-if'),
    merge =         require('merge-stream'),
    watchify =      require('watchify'),
    gutil      =    require('gulp-util'),
    plumber =       require('gulp-plumber'),
    sourcemaps =    require('gulp-sourcemaps'),
    config =        require('../config').paths,
    browserSync =   require("browser-sync"),
    notifier =      require('../helpers/notifier'),
    reload =        browserSync.reload,
    configJS =      require('../config').js;


gulp.task('js', () => {
    const stream = gulp.src(configJS.browserifySrc)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulpif(devBuild, sourcemaps.init()))
        .pipe(gulpBrowser.browserify())
        .pipe(gulpif(!devBuild, uglify()))
        .pipe(gulpif(devBuild, sourcemaps.write(config.maps)))
        .pipe(gulp.dest(configJS.build))
        .pipe(reload({stream: true}));

    return stream;
});