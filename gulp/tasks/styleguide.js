/**
 * Styleguide
 */
'use strict';

const
    gulp =          require('gulp'),
    styleguide =    require('sc5-styleguide'),
    sass =          require('gulp-sass'),
    config =        require('../config').docs,
    configCSS =     require('../config').css,
    outputPath =    config.dest + 'styleguide';

gulp.task('styleguide:generate', function() {
    return gulp.src(config.srcCSS)
        .pipe(styleguide.generate({
            title: 'OpenSea Styleguide',
            server: false,
            rootPath: outputPath,
            // overviewPath: 'README.md',
            disableHtml5Mode: true,
            appRoot: outputPath
        }))
        .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
    return gulp.src(configCSS.mainSrcFile)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);