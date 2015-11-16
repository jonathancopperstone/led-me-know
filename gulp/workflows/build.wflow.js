'use strict';

module.exports = function(gulp, args) {

    var help,
        dependencies = [
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

    help = 'build src for development\n'
           + '- (--css) build only the styles\n'
           + '- (--js) build only the scripts\n'
           + '- (-a / --auto) build and add a watch on the src';

    gulp.task('build', help, dependencies);
};
