/**
 * Watcher
 */
'use strict';

const
    gulp =          require('gulp'),
    config =        require('../config'),
    watch  =        require('gulp-watch');

gulp.task('watch',['browser-sync'], (cb) => {
    gulp.watch(config.css.src, ['css','styleguide']);
    gulp.watch(config.html.src + '/**/*.jade', ['html']);
    gulp.watch(config.js.src + '/**/*.js', ['js']);
    gulp.watch(config.images.src, ['img`']);
    gulp.watch(config.svg.src, ['svg']);
    gulp.watch(config.pngSprite.src, ['png-sprite']);
    gulp.watch(config.svgSprite.src, ['svg-sprite']);
    gulp.watch('bower.json', ['bower']);
    gulp.watch(config.txt.src, ['txt']);
    gulp.watch(config.fonts.src, ['fonts']);
});
