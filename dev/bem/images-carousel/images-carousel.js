'use strict';

var BLOCKS = require('./../../common/scripts/constants/BLOCKS');

var block = BLOCKS.CAROUSEL;

var elems = {
    list: block + '__list'
};

module.exports.init = function ($parent, options) {
    $parent.find('.' + elems.list).slick(options);
};

