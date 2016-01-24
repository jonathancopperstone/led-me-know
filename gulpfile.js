'use strict';

var gulp = require('gulp-help')(require('gulp')),
    args = require('yargs').argv;

// The main config file for your
// application.

var config  = require('./gulp/configs/app.conf');

// Setup the pattern helper to go
// through your directory and add the
// gulp tasks and workflows.

var pattern = require('gulp-pattern').setup(gulp, args, config);
