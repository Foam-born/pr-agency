'use strict';

var EVENTS = require('./../../common/scripts/constants/EVENTS');
var BEM = require('./../../common/scripts/constants/BLOCKS');

var block = BEM.SANDWICH;
var mods = {
  opened: {
      name: block + '--opened',
      status: false
  }
};

$(document).ready(function () {
    var $block = $('.' + block);

    $block.on(EVENTS.ELEMENT.CLICK, function () {
        mods.opened.status ? closeMenu($(this)) : openMenu($(this));
    });

    $(document).on(EVENTS.CUSTOM.SANDWICH.CLOSED, function () {
        $block.removeClass(mods.opened.name);

        mods.opened.status = false;
    });
});

function openMenu($block) {
    $block.addClass(mods.opened.name);

    mods.opened.status = true;

    $(document).trigger(EVENTS.CUSTOM.SANDWICH.OPENED);
}

function closeMenu($block) {
    $block.removeClass(mods.opened.name);

    mods.opened.status = false;

    $(document).trigger(EVENTS.CUSTOM.SANDWICH.CLOSED);
}