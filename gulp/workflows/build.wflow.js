'use strict';

module.exports = function(gulp, args) {

    var dependencies = [
        ''
    ];

    if (args.css) {
        dependencies = [''];
    } else if (args.js) {
        dependencies = [''];
    }

    if (args.a || args.auto) {
        dependencies.push('watch:src');
    }

    gulp.task('build', dependencies);
};
