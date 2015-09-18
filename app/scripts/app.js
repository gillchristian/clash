(function(){

'use strict';


/**
* @ngdoc overview
* @name clashApp
* @description
* # clashApp
*
* Main module of the application.
*/
angular
    // .module('clashApp', ['ui.router', 'ui.bootstrap', 'clashApp.controllers', 'clashApp.filters', 'clashApp.services'])
    .module('clashApp', ['ui.router', 'ui.bootstrap', 'clashApp.controllers', 'clashApp.filters', 'clashApp.services', 'clashApp.classes'])

    //  config routes
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");

        $stateProvider
        /*.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
        })*/
        .state('calculator', {
            url: '/clash/',
            templateUrl: 'views/calculator.html',
            controller: 'CalculatorController',
            controllerAs: 'vm'
        })
        .state('test', {
            url: '/clash/test',
            templateUrl: 'views/test.html',
            controller: 'CalculatorController',
            controllerAs: 'vm'
        });

        // set our app up to have pretty URLS
        $locationProvider.html5Mode(true);
    })

    // config http provider
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);


})();

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};
