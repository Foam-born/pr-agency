'use strict';

module.exports = function (target) {
    $('html, body').animate({scrollTop: $('a[name=' + target.replace('#', '') + ']').offset().top - 200}, 'slow');
};

