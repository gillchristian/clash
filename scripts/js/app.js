'use strict';

/*
 * Main module of the application.
 */

angular
  .module('medalliaApp', ['medalliaApp.controllers', 'medalliaApp.services']);

/*
  angular.module('medalliaApp')
    .config(function($stateProvider, $urlRouterProvider) {

      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        /*.state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .state('calculator', {
          url: '/',
          templateUrl: 'views/calculator.html',
          controller: 'CalculatorController'
        });
      });

  angular.module('medalliaApp')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
*/
