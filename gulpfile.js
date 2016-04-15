const 
    gulp =            require('gulp'), 
    taskListing =     require('gulp-task-listing'), 
    requireDir =      require('require-dir');
 
// Add a task to render the output 
gulp.task('list', taskListing);

// Set Env
process.env.NODE_ENV = 'development';

// Check ENV
global.devBuild = process.env.NODE_ENV !== 'production';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
