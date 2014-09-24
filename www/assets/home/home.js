(function () {

    'use strict';

    angular
        .module('n7seedApp')
        .controller('home', HomeController);

    HomeController.$inject = ['$state', 'dataService', 'loggerService'];

    /* @ngInject */
    function HomeController($state, dataService, loggerService) {

        /* jshint validthis: true */
        var vm = this;

        loggerService.debug("CONTROLLER: HomeController");

        vm.contacts = [];

        vm.getData = fetchData;

        function fetchData() {

            dataService.getData()
                .then(function (data) {
                    vm.contacts = data;

                    loggerService.info('Data fetched', data, 'fetchData');

                    return vm.contacts;
                })
                .catch(function (reason)
                {
                    loggerService.error('dataService.getData() => error', reason, 'fetchData');
                });
        };

    };

})();