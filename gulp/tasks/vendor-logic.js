'use strict';

module.exports = function ($) {
    $.gulp.task($.CONFIG.VENDOR_LOGIC.NAME, function () {
        return $.gulp.src($.CONFIG.VENDOR_LOGIC.SRC)
            .pipe($.concat($.CONFIG.VENDOR_LOGIC.FILE_NAME))
            .pipe($.uglifyJs())
            .pipe($.gulp.dest($.CONFIG.VENDOR_LOGIC.DIST))
    });
};
