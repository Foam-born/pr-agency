'use strict';

module.exports = function ($) {
    $.gulp.task($.CONFIG.VENDOR_STYLES.NAME, function () {
        return $.gulp.src($.CONFIG.VENDOR_STYLES.SRC)
            .pipe($.concat($.CONFIG.VENDOR_STYLES.FILE_NAME))
            .pipe($.uglifyCss())
            .pipe($.gulp.dest($.CONFIG.VENDOR_STYLES.DIST))
    })
};

