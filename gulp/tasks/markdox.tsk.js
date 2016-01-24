'use strict';

module.exports = function(gulp, args, config) {

    var help,
        concat = require('gulp-concat'),
        markdox = require('gulp-markdox');

    help = '';
    gulp.task('markdox', help, function() {
        return gulp
                .src(config.src + 'led-me-know.js')
                .pipe(markdox())
                .pipe(concat('README.md'))
                .pipe(gulp.dest('./docs'));
    });
};
