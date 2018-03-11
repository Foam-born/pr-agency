'use strict';

var EVENTS = require('./../../common/scripts/constants/EVENTS');
var COMPONENTS = require('./../../common/scripts/constants/COMPONENTS');
var UI = require('./../../common/scripts/constants/UI');

var checkScroll = require('./../../common/scripts/services/check-scroll');

var logoAPI = require('./../../bem/logo/logo');
var mainMenuAPI = require('./../../bem/main-menu/main-menu');

var component = COMPONENTS.SITE_HEADER;

var elems = {
    buttonColumn: component + '__button-column',

    logo: component + '__logo'
};

var mods = {
    white: {
        name: component + '--bg--white',
        status: false
    },

    scrolled: {
        name: component + '--scrolled',
        status: false
    },

    buttonColumn: {
        hidden: elems.buttonColumn + '--hidden',
        smallScreen: elems.buttonColumn + '--hidden--small-screen'
    }
};

$(document).ready(function () {
    var $component = $('.' + component);
    var $buttonColumn = $('.' + elems.buttonColumn);
    var $logo = $('.' + elems.logo);

    if (checkScroll.getStatus()) {
        setScrolledMode($component, $logo, $buttonColumn);
    }

    $(document).on(EVENTS.CUSTOM.SANDWICH.OPENED, function () {
        setWhiteMode($component);

        $buttonColumn.addClass(mods.buttonColumn.hidden);

        if (mods.white.status && !checkScroll.getStatus()) {
            logoAPI.setBlackLogo($logo);
        }
    });

    $(document).on(EVENTS.CUSTOM.SANDWICH.CLOSED, function () {
        unsetWhiteMode($component);

        $buttonColumn.removeClass(mods.buttonColumn.hidden);

        logoAPI.removeBlackLogo($logo);
    });

    $(window).on(EVENTS.WINDOW.SCROLL, function () {
        this.pageYOffset > UI.PAGE_OFFSET ? setScrolledMode($component, $logo, $buttonColumn) : unsetScrolledMode($component, $logo, $buttonColumn);
    });
});

function setWhiteMode($block) {
    if (!mods.white.status) {
        $block.addClass(mods.white.name);

        mods.white.status = true;
    }
}

function unsetWhiteMode($block) {
    if (mods.white.status) {
        $block.removeClass(mods.white.name);

        mods.white.status = false;
    }
}

function setScrolledMode($block, $logo, $buttonColumn) {
    if (!mods.scrolled.status) {
        $buttonColumn.addClass(mods.buttonColumn.smallScreen);

        $block.addClass(mods.scrolled.name);

        mods.scrolled.status = true;

        unsetWhiteMode($block);

        if (mods.white.status && !mods.scrolled.status) {
            logoAPI.setBlackLogo($logo);
        } else {
            logoAPI.removeBlackLogo($logo);
        }
    }
}

function unsetScrolledMode($block, $logo, $buttonColumn) {
    if (mods.scrolled.status) {
        $buttonColumn.removeClass(mods.buttonColumn.smallScreen);

        $block.removeClass(mods.scrolled.name);

        mods.scrolled.status = false;

        if (mainMenuAPI.menuIsOpen()) {
            setWhiteMode($block);
        }

        if (mods.white.status) {
            logoAPI.setBlackLogo($logo);
        } else {
            logoAPI.removeBlackLogo($logo);
        }
    }
}