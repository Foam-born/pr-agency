'use strict';

module.exports = function ($) {
    $.gulp.task($.CONFIG.APP_STYLES.NAME, function () {
        return $.gulp.src($.CONFIG.APP_STYLES.SRC)
            .pipe($.stylus())
            .on('error', $.notify.onError(function (error) {
                return {
                    title: 'Stylus',
                    message: error.message
                }
            }))
            .pipe($.concat($.CONFIG.APP_STYLES.FILE_NAME))
            .pipe($.uglifyCss())
            .pipe($.gulp.dest($.CONFIG.APP_STYLES.DIST))
    });
};
