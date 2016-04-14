const gulp = require('gulp');
const taskListing = require('gulp-task-listing');
const requireDir = require('require-dir');
 
// Add a task to render the output 
gulp.task('list', taskListing);

// Check ENV
global.devBuild = process.env.RAILS_ENV !== 'production' || process.env.RAILS_ENV !== 'staging';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
