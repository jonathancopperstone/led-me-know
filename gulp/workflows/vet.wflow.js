'use strict';

module.exports = function(gulp, args) {

    var help,
        dependencies = [];

    if (args.jshint) {
        dependencies = ['jshint'];
    }

    help = 'vet the code for quality standards\n'
           + '- (--jshint) lint the src js\n'

    gulp.task('vet', help, dependencies);
};
