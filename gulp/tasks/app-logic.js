'use strict';

module.exports = function ($) {
    $.gulp.task($.CONFIG.APP_LOGIC.NAME, function () {
        return $.gulp.src($.CONFIG.APP_LOGIC.SRC)
            .pipe($.tap(function (file) {
                file.contents = $.browserify(file.path).bundle();
            }))
            .pipe($.buffer())
            .pipe($.concat($.CONFIG.APP_LOGIC.FILE_NAME))
            .pipe($.uglifyJs())
            .pipe($.gulp.dest($.CONFIG.APP_LOGIC.DIST))
    });
};