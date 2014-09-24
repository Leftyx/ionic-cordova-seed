(function () {

    'use strict';

    angular
        .module('n7seedApp.Services')
        .factory('dataService', dataService);

    dataService.$inject = ['$q', 'loggerService', 'SERVER_API'];

    /* @ngInject */
    function dataService($q, loggerService, SERVER_API) {

        loggerService.debug("factory => dataservice => CREATE");
        loggerService.debug("SERVER_API => " + SERVER_API.url + '' + SERVER_API.port);

        var service = {
            getData: fetchData,
        };

        return (service);

        function fetchData()
        {
            loggerService.debug("factory => dataservice => getData()");

            var deferred = $q.defer();

            var contacts = [
                { name: 'Alberto', nickname: 'LeftyX' },
                { name: 'Paolo', nickname: 'Bradipex' },
            ];

            deferred.resolve(contacts);

            return (deferred.promise);
        }
    };

})();