(function () {

    'use strict';

    angular
        .module('Common.Filters', [])
        .filter('string.format', stringFormat);

    function stringFormat() {

        return function (input) {
            if (!input || arguments.length <= 1) return (input);
            var args = arguments;
            for (var i = 1; i < arguments.length; i++) {       
                var reg = new RegExp("\\{" + (i - 1) + "\\}", "gm");             
                input = input.replace(reg, arguments[i]);
            }
            return (input);
        }
    };

})();