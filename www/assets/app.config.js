(function () {

    'use strict';

    var app = angular.module('n7seedApp');

    var config = {
        name: 'n7seedApp',
        description: 'n7 seed App',
        version: '0.0.1',
        DEBUG: true
    };

    app.value('config', config);

    app.config(configure);

    /* @ngInject */
    function configure ($compileProvider, $logProvider, $httpProvider) {

        // Needed for routing to work
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        //Enable cross domain calls
        $httpProvider.defaults.useXDomain = true;
        //Remove the header containing XMLHttpRequest used to identify ajax call that would prevent CORS from working
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    };

}());