(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.services')
   .factory('buildingFactory', ['$http',
      function ($http) {
         var location = window.location.href + 'assets/resources';
         return {
            getBarracks: function () {
               return $http.get( location + '/barracks.json');
            },
            getDarkBarracks: function () {
               return $http.get( location + '/darkBarracks.json');
            },
            getCamps: function () {
               return $http.get( location + '/camps.json');
            },
            getLightFactory: function () {
               return $http.get( location + '/lightSpellsFactory.json');
            },
            getDarkFactory: function () {
               return $http.get( location + '/darkSpellsFactory.json');
            },
            getSpellsStaging: function () {
               return $http.get( location + '/spellsCamp.json');
            }

         }
   }]);

})();