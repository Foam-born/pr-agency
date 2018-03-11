'use strict';

var EVENTS = require('./../../common/scripts/constants/EVENTS');
var BEM = require('./../../common/scripts/constants/BLOCKS');
var FORM_TYPES = require('./../../common/scripts/constants/FORM_TYPES');

var formAPI = require('./../feedback-form/feedback-form');

var block = BEM.LIGHTBOX;

var mods = {
    opened: {
        name: block + '--opened',
        status: false
    }
};

var elems = {
    content: block + '__content',
    closer: block + '__closer',
    form: block + '__feedback-form'
};

$(document).ready(function () {
    var $block = $('.' + block);

    var $form = $block.find('.' + elems.form);

    $(document).on(EVENTS.CUSTOM.FORM.OPEN, function (event, data) {
        var dataFormType = data.dataFormType;

        var header = _.find(FORM_TYPES, function (formType) {
            return formType.NAME === dataFormType;
        }).DATA.HEADER;

        if(dataFormType === FORM_TYPES.CALLBACK.NAME) {
            formAPI.hiddenEmailLabel($form);
            formAPI.hiddenCompanyLabel($form);
        }

        formAPI.setFormHeader($form, header);

        openLightbox($block);
    });

    $block.on(EVENTS.ELEMENT.CLICK, function (event) {
        var $target = $(event.target);

        var clickOnCloser = $target.hasClass(elems.closer);
        var clickInsideOfContent = $target.parents('.' + elems.content).length || $target.hasClass(elems.content);

        if(!clickInsideOfContent || clickOnCloser) {
            closeLightbox($block);
        }
    });

    $(document).on(EVENTS.CUSTOM.FORM.CLOSE, function () {
        formAPI.showHidedLabels($block);
    });

    $(document).on(EVENTS.CUSTOM.FORM.SUBMITTED, function () {
        closeLightbox($block);
    })
});

function openLightbox($block) {
    $block.addClass(mods.opened.name);

    mods.opened.status = true;
}

function closeLightbox($block) {
    $block.removeClass(mods.opened.name);

    mods.opened.status = false;

    $(document).trigger(EVENTS.CUSTOM.FORM.CLOSE);
}


