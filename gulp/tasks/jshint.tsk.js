'use strict';

module.exports = function(gulp, args, config) {

    var jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish');

    var help = '';
    gulp.task('jshint', help, function() {
       return gulp
               .src(config.src + '**/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter(stylish))
               .pipe(jshint.reporter('fail'));
    });
};
