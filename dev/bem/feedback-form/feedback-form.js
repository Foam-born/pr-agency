'use strict';

var EVENTS = require('./../../common/scripts/constants/EVENTS');
var BEM = require('./../../common/scripts/constants/BLOCKS');
var ATTRS = require('./../../common/scripts/constants/ATTRS');

var block = BEM.FEEDBACK_FORM;

var elems = {
    title: block + '__title',
    label: block + '__label',
    input: block + '__input',
    form: block + '__form',
    button: block + '__button'
};

$(document).ready(function () {
    var $form = $('.' + elems.form);

    var formData = {};

    $form.on(EVENTS.FORM.SUBMIT, function (event) {
        event.preventDefault();

        var that = this;

        formData.userName = this.elements.userName && this.elements.userName.value;
        formData.companyName = this.elements.companyName && this.elements.companyName.value;
        formData.userEmail = this.elements.userEmail && this.elements.userEmail.value;
        formData.userTel = this.elements.userTel && this.elements.userTel.value;
        formData.userComment = this.elements.userComment && this.elements.userComment.value;

        $.ajax({
            type: 'POST',
            url: '/send-mail.php',
            data: formData,
            success: function () {
                $(document).trigger(EVENTS.CUSTOM.FORM.SUBMITTED);

                for(var element in that.elements) {
                    if(that.elements.hasOwnProperty(element) && that.elements[element]){
                        that[element].value = '';
                    }
                }
            }
        });
    });

    $(document).on(EVENTS.CUSTOM.FORM.OPEN, function (event, data) {
        formData.serviceName = data.dataServiceName;
    });
});

function setFormHeader($block, text) {
    $block.find('.' + elems.title).text(text);
}

function hiddenEmailLabel($block) {
    var $input = $block.find('input[name = userEmail]');

    $input.parent('.' + elems.label).hide();
}

function showHidedLabels($block) {
    var $inputEmail = $block.find('input[name = userEmail]');
    var $inputCompany = $block.find('input[name = companyName]');

    $inputEmail.parent('.' + elems.label).show();
    $inputCompany.parent('.' + elems.label).show();
}

function hiddenCompanyLabel($block) {
    var $input = $block.find('input[name = companyName]');

    $input.parent('.' + elems.label).hide();
}

module.exports.setFormHeader = setFormHeader;
module.exports.hiddenEmailLabel = hiddenEmailLabel;
module.exports.hiddenCompanyLabel = hiddenCompanyLabel;
module.exports.showHidedLabels = showHidedLabels;


