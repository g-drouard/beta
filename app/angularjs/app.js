'use strict';
var mainApp = angular.module('mainApp',
    [
        'ngRoute',
        'ngSanitize',
        'tmh.dynamicLocale',
        'pascalprecht.translate',
        'headerApp',
        'footerApp',
        'homeApp',
        'languageService'
    ]);

mainApp.config([
    '$routeProvider',
    'tmhDynamicLocaleProvider',
    function (
        $routeProvider,
        tmhDynamicLocaleProvider) {

    tmhDynamicLocaleProvider.defaultLocale('fr');
    tmhDynamicLocaleProvider.localeLocationPattern('./app/angularjs/i18n/angular-locale_{{locale}}.js');

    /**
     * Routes
     */
    
    $routeProvider.

        /**
         * Page Home
         */

        when('/', {
            templateUrl: './app/views/home.html',
            controller: 'homeController'
        }).

        /**
         * Page 404
         */

        when('/404', {
            templateUrl: './app/views/404.html'
        }).

        /**
         * Redirection vers la page 404 pour toutes les autres urls
         */

        otherwise({
            redirectTo: '/404'
        });
    }]);

    mainApp.run([ 
        'languageManager',
        function(languageManager) {

        /**
         * Initialise le langage actuel
         */

        languageManager.initCurrentLanguage();

    }]);