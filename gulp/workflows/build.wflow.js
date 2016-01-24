'use strict';

module.exports = function(gulp, args) {

    var help,
        dependencies = [];

    if (args.docs) {
        dependencies = ['markdox'];
    }

    help = 'build operations on src\n'
           + '- (--docs) build documentation markdown';

    gulp.task('build', help, dependencies);
};
