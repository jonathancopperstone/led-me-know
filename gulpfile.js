'use strict';

var _       = require('lodash'),
    fs      = require('fs'),
    gulp    = require('gulp'),
    gulpDir = './gulp/',
    config  = gulpDir + 'configs/app.conf.js',
    tasks   = fs.readdirSync(gulpDir + 'tasks/'),
    wflows  = fs.readdirSync(gulpDir + 'workflows/');

_.each(tasks, function(task) {
    var taskBreakdown = task.split('.');
    if (taskBreakdown[1] === 'tsk') {
        var taskName = task.split('.')[0] + '.' + task.split('.')[1];
        require(gulpDir + 'tasks/' + taskName)(gulp, config);
    }
});

_.each(wflows, function(wflow) {
    var wflowBreakdown = wflow.split('.');
    if (wflowBreakdown[1] === 'wflow') {
        var wflowName = wflow.split('.')[0] + '.' + wflow.split('.')[1];
        require(gulpDir + 'workflows/' + wflowName)(gulp, config);
    }
})
