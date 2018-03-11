'use strict';

var EVENTS = require('./../../common/scripts/constants/EVENTS');
var BEM = require('./../../common/scripts/constants/BLOCKS');

var checkScroll = require('./../../common/scripts/services/check-scroll');
var scrollTo =  require('./../../common/scripts/services/scroll-to');

var block = BEM.MAIN_MENU;

var elems = {
  list: block + '__list',
  link: block + '__link'
};

var mods = {
  opened: {
      name: block + '--opened',
      status: false
  },

  font: {
      white: {
          name: block + '--font--white',
          status: false
      }
  }
};

$(document).ready(function () {
    var $block = $('.' + block);

    var $list = $block.find('.' + elems.list);

    $(document).on(EVENTS.CUSTOM.SANDWICH.OPENED, function () {
        $block.addClass(mods.opened.name);

        mods.opened.status = true;

        if(checkScroll.getStatus()){
            setWhiteMode($block);
        }
    });

    $(document).on(EVENTS.CUSTOM.SANDWICH.CLOSED, function () {
        $block.removeClass(mods.opened.name);

        mods.opened.status = false;

        removeWhiteMode($block);
    });

    $(window).on(EVENTS.WINDOW.SCROLL, function () {
        if(mods.opened.status) {
            if(checkScroll.getStatus()) {
                setWhiteMode($block);
            } else {
                removeWhiteMode($block);
            }
        }
    });

    $list.on(EVENTS.ELEMENT.CLICK, function (event) {
        var $target = $(event.target);

        if($target.hasClass(elems.link)) {
            var href = $target.attr('href');

            scrollTo(href);

            $(document).trigger(EVENTS.CUSTOM.SANDWICH.CLOSED);
        }
    });
});

function setWhiteMode($block) {
    $block.addClass(mods.font.white.name);

    mods.font.white.status = true;
}

function removeWhiteMode($block) {
    $block.removeClass(mods.font.white.name);

    mods.font.white.status = false;
}

module.exports.menuIsOpen = function () {
  return mods.opened.status;
};