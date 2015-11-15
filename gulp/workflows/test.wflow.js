'use strict';

module.exports = function(gulp) {

    var dependencies = [
        ''
    ];

    if (args.u || args.unit) {
        dependencies.push('');
    } else if (args.i || args.integration) {
        dependencies.push('');
    }

    if (args.a || args.auto) {
        dependencies.push('watch:');
    }

    gulp.task('test', dependencies);
};
