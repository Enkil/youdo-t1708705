"use strict";

var gutil =         require('gulp-util'),
    gulpif =        require('gulp-if'),
    notifier =      require('node-notifier');

module.exports = function(file, isFail, msg) {

    var say   = msg || 'Bundled!',
        color = isFail ? 'red' : 'green';
        // icon  = isFail ? path.join(__dirname, 'coulson.jpg') : false;
    
    if (devBuild) notifier.notify({
        title   : file,
        message : say,
        // icon    : icon,
        sound   : true,
        wait: true
    });
    

    gutil.log(say, gutil.colors[color](file));

};