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
  .module('clashApp', ['ui.router', 'ui.bootstrap', 'clashApp.controllers', 'clashApp.filters', 'clashApp.services', /*'clashApp.directives'*/]);

  angular.module('clashApp')
    .config(function($stateProvider, $urlRouterProvider) {

      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        /*.state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })*/
        .state('calculator', {
          url: '/',
          templateUrl: 'views/calculator.html',
          controller: 'CalculatorController'
        });
      });


  angular.module('clashApp')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);