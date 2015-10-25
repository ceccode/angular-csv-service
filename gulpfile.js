'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    source = 'angular-csv-service.js',
    sourceMin = 'angular-csv-service.min.js',
    specs = 'test/spec/*.spec.js',
    karmaConf = '/test/karma.conf',
    Server = require('karma').Server;

gulp.task('test', function () {
  new Server({
        configFile: __dirname + karmaConf + '.js',
        singleRun: true
    }).start();
});

gulp.task('min', function () {
  return gulp.src(source)
    .pipe(rename(sourceMin))
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['test', 'min']);
