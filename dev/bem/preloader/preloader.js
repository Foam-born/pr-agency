'use strict';

var BEM = require('./../../common/scripts/constants/BLOCKS');

var block = BEM.PRELOADER;

$(document).ready(function () {
   $('.' + block).fadeOut('slow');
});
