'use strict';

var UI = require('./../constants/UI');

module.exports.getStatus = function () {
    return window.pageYOffset > UI.PAGE_OFFSET;
};
