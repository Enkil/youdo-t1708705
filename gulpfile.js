const 
    gulp =            require('gulp'), 
    requireDir =      require('require-dir');

// Set Env
process.env.NODE_ENV = 'production';

// Check ENV
global.devBuild = process.env.NODE_ENV !== 'production';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
