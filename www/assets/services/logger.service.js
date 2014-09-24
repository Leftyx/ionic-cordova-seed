(function () {

    'use strict';

    angular
        .module('n7seedApp.Services')
        .factory('loggerService', loggerService);

    loggerService.$inject = ['$q', '$log'];

    /* @ngInject */
    function loggerService($q, $log) {

        $log.debug("factory => loggerService => CREATE");

        var service = {
            error: error,
            info: info,
            success: success,
            warning: warning,
            debug: debug
        };

        return (service);

        function error(message, data, title) {
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            $log.warn('Warning: ' + message, data);
        }

        function debug(message)
        {
            $log.debug('Debug: ' + message);
        }
    };

})();