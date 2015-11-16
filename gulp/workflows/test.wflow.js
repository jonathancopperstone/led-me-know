'use strict';

module.exports = function(gulp) {

    var help,
        dependencies = [
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

    help = 'run tests\n'
           + '- (-u / --unit) run only the unit tests\n'
           + '- (-i / --integration) run only the integration tests\n'
           + '- (a / auto) run tests and add a watch on the src\n';

    gulp.task('test', help, dependencies);
};
