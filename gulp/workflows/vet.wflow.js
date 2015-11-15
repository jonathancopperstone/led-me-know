'use strict';

module.exports = function(gulp) {

    var dependencies = [
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

    gulp.task('vet', dependencies);
};
