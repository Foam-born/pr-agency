'use strict';

const $ = {
    CONFIG: require('./gulp/config'),
    gulp: require('gulp'),
    stylus: require('gulp-stylus'),
    concat: require('gulp-concat'),
    uglifyCss: require('gulp-uglifycss'),
    uglifyJs: require('gulp-uglify'),
    tap: require('gulp-tap'),
    buffer: require('gulp-buffer'),
    browserify: require('browserify'),
    notify: require('gulp-notify')
};

[
    './gulp/tasks/vendor-styles',
    './gulp/tasks/app-logic',
    './gulp/tasks/app-styles',
    './gulp/tasks/vendor-logic'
].forEach(function (taskPath) {
    require(taskPath)($);
});

$.gulp.task('build', $.gulp.series(
    $.CONFIG.APP_STYLES.NAME,
    $.CONFIG.APP_LOGIC.NAME,
    $.CONFIG.VENDOR_STYLES.NAME,
    $.CONFIG.VENDOR_LOGIC.NAME));

$.gulp.task('watch', function () {
    $.gulp.watch($.CONFIG.APP_STYLES.SRC, {usePolling: true}, $.gulp.series($.CONFIG.APP_STYLES.NAME));
    $.gulp.watch($.CONFIG.APP_LOGIC.SRC, {usePolling: true}, $.gulp.series($.CONFIG.APP_LOGIC.NAME));
});