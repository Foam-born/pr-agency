'use strict';

const DIST = {
    CSS: './public/css',
    JS: './public/js'
};

module.exports = {
    APP_STYLES: {
        NAME: 'app-styles',

        SRC: [
            './dev/bem/**/*.styl',
            './dev/common/*.styl',
            './dev/common/styles/*.styl',
            './dev/components/**/*.styl'
        ],

        FILE_NAME: 'app-styles.min.css',

        DIST: DIST.CSS

    },

    APP_LOGIC: {
        NAME: 'app-logic',

        SRC: [
            './dev/bem/**/*.js',
            './dev/components/**/*.js',
            './dev/common/scripts/**/*.js',
            './dev/common/scripts/*.js'
            /*            './dev/common/!**!/!**!/!*.js'*/
        ],

        FILE_NAME: 'app-logic.min.js',

        DIST: DIST.JS
    },

    VENDOR_STYLES: {
        NAME: 'vendor-styles',

        SRC: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/slick-carousel/slick/slick.css'
        ],

        FILE_NAME: 'vendor-styles.min.css',

        DIST: DIST.CSS
    },

    VENDOR_LOGIC: {
        NAME: 'vendor-logic',

        SRC: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/slick-carousel/slick/slick.js',
            './node_modules/lodash/lodash.min.js'
        ],

        FILE_NAME: 'vendor-logic.min.js',

        DIST: DIST.JS
    }
};