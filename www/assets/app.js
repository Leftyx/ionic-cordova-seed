(function () {

    'use strict';

    var app = angular.module('n7seedApp', [
        'ionic',
        'ngCordova',
        'Common.Filters',
        'n7seedApp.Services'
    ]);

    app.run(['$rootScope', '$state', '$log', '$ionicPlatform', function ($rootScope, $state, $log, $ionicPlatform) {

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $log.info("$rootScope => $stateChangeStart => " + toState.name || '');
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.error("$rootScope => $stateChangeError");
            $log.error(toState);
            $log.error(fromState);
            $log.error(error);
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $log.debug('$stateChangeSuccess to [' + toState.name + '] => fired once the state transition is complete.');
        });

        $rootScope.$on('$viewContentLoaded', function (event) {
            $log.debug('$viewContentLoaded - fired after dom rendered');
            $log.debug(event);
        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            $log.debug('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
            $log.debug(unfoundState);
            $log.debug(fromState);
            $log.debug(fromParams);
        });

    }])

})();