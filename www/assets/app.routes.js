(function () {

    'use strict';

    angular.module('n7seedApp')

        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $stateProvider

            // setup an abstract state for the tabs directive
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'assets/main/main.html'
            })

            // Each tab has its own nav history stack:

            .state('main.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'assets/home/home.html',
                        controller: 'home as vm'
                        //controllerAs: 'vm'
                    }
                }
            });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/main/home');

    }]);

}());