'use strict';

module.exports = function(gulp, config) {

    gulp.task('workflows', function() {
        console.log('List of all available workflows for ' + config.name + ':');
    });
};
