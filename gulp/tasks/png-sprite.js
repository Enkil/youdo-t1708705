/**
 * PNG-sprite
 */
'use strict';

var gulp =                  require('gulp'),
    gulpif =                require('gulp-if'),
    config =                require('../config').pngSprite,
    imagemin =              require('gulp-imagemin'),
    pngquant =              require('imagemin-pngquant'),
    jpegoptim =             require('imagemin-jpegoptim'),
    imageminGifsicle =      require('imagemin-gifsicle'),
    spritesmith =           require('gulp.spritesmith'),
    notifier =              require('../helpers/notifier'),
    gutil =                 require('gulp-util'),
    browserSync =           require("browser-sync"),
    reload =                browserSync.reload,
    plumber =               require('gulp-plumber');

gulp.task('png-sprite', () => {

    // Generate spritesheet
    var spriteData = gulp.src(config.src)
        .pipe(spritesmith({
            imgName: 'png-sprite.png',
            imgPath: config.imgPath + 'png-sprite.png',
            padding: 1,
            cssFormat: 'scss_maps',
            algorithm: 'binary-tree',
            cssName: '_png-sprite.scss',
            cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name
            }
        }));

    // Pipe image stream through image optimizer and onto disk
    spriteData.img
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulp.dest(config.build))
        .pipe(reload({stream: true}));

    // Pipe CSS stream onto disk
    spriteData.css
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(gulp.dest(config.destCSS))
        .pipe(reload({stream: true}));
    
    notifier('PNG Sprite');
});