'use strict';

var EVENTS = require('./../../common/scripts/constants/EVENTS');
var BEM = require('./../../common/scripts/constants/BLOCKS');

var block = BEM.SUBMIT_NOTICE;

var mods = {
  show: block + '--show'
};

$(document).ready(function () {
    var $block = $('.' + block);

   $(document).on(EVENTS.CUSTOM.FORM.SUBMITTED, function () {
       $block.addClass(mods.show);

       setTimeout(function () {
           $block.removeClass(mods.show);
       }, 3000)
   });
});