'use strict';

var BEM = require('./../../common/scripts/constants/BLOCKS');
var EVENTS = require('./../../common/scripts/constants/EVENTS');

var block = BEM.LOGO;

var mods = {
    bg: {
        black: {
            name: block + '--black',
            status: false
        }
    }
};

function setBlackLogo($block) {
    if (!mods.bg.black.status) {
        $block.addClass(mods.bg.black.name);

        mods.bg.black.status = true;
    }
}

function removeBlackLogo($block) {
    if (mods.bg.black.status) {
        $block.removeClass(mods.bg.black.name);

        mods.bg.black.status = false;
    }
}

module.exports.setBlackLogo = setBlackLogo;

module.exports.removeBlackLogo = removeBlackLogo;