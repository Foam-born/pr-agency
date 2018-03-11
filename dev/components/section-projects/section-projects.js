'use strict';

var COMPONENTS = require('./../../common/scripts/constants/COMPONENTS');

var carousel = require('./../../bem/images-carousel/images-carousel');

var component = COMPONENTS.SECTION_PROJECTS;

$(document).ready(function () {
    carousel.init($('.' + component), {
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});