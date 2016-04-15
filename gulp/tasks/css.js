/**
 * CSS
 */
'use strict';

const
    gulp =          require('gulp'),
    config =        require('../config').paths,
    configCSS =     require('../config').css,
    configHTML =    require('../config').html,
    configJS =      require('../config').js,
    sass =          require('gulp-sass'),
    minifycss =     require('gulp-clean-css'),
    csscomb =       require('gulp-csscomb'),
    concat =        require('gulp-concat'),
    combineMq =     require('gulp-combine-mq'),
    purify =        require('gulp-purifycss'),
    autoprefixer =  require('gulp-autoprefixer'),
    sourcemaps =    require('gulp-sourcemaps'),
    rename =        require('gulp-rename'),
    gulpif =        require('gulp-if'),
    changed =       require('gulp-changed'),
    notifier =      require('../helpers/notifier'),
    gutil =         require('gulp-util'),
    plumber =       require('gulp-plumber'),
    lazypipe =      require('lazypipe'),
    browserSync =   require("browser-sync"),
    reload =        browserSync.reload,

    cssProdBuild = lazypipe()
        .pipe(rename,{ suffix: '.min' })
        .pipe(minifycss)
        .pipe(gulp.dest,configCSS.dest)
        .pipe(rename,{ basename: 'app', suffix: '.purify' })
        .pipe(purify,[configHTML.dest + '**/*.html', configJS.dest + '**/*.js'])
        .pipe(gulp.dest,configCSS.dest)
        .pipe(rename,{ suffix: '.min' })
        .pipe(minifycss);

gulp.task('css', () => {
    return gulp.src(configCSS.mainSrcFile)
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))

        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(configCSS.autoprefixer))
        .pipe(csscomb())
        .pipe(combineMq({beautify: true}))
        .pipe(gulp.dest(configCSS.dest))
        .pipe(gulpif(!devBuild, cssProdBuild()))
        .pipe(sourcemaps.write(config.maps))
        .pipe(gulp.dest(configCSS.dest))
        .pipe(reload({stream: true}))
        .on('end', function() {
            notifier('CSS');
        });
});