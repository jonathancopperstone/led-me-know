'use strict';

module.exports = function(gulp) {

    var help,
        dependencies = [
            'jshint'
        ];

    if (args.jshint) {
        dependencies = ['jshint'];
    } else if (args.s || args.src) {
        dependencies = ['jshint:src'];
    } else if (args.d || args.dist) {
        dependencies = ['jshint:dist'];
    }

    if (args.a || args.auto) {
        dependencies.push('watch:jshint');
    }

    help = 'vet the code for quality standards\n'
           + '- (-s / --src) vet only the src code\n'
           + '- (-d / --dist) vet only the dist code\n'
           + '- (a / auto) vet and add a watch on the src\n';

    gulp.task('vet', dependencies);
};
