(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.services')
   .factory('buildingFactory', ['$http',
      function ($http) {
         var location = window.location.href;
         return {
            getBarracks: function () {
               return $http.get( location + 'resources/barracks.json');
            },
            getDarkBarracks: function () {
               return $http.get( location + 'resources/darkBarracks.json');
            },
            getCamps: function () {
               return $http.get( location + 'resources/camps.json');
            },
            getLightFactory: function () {
               return $http.get( location + 'resources/lightSpellsFactory.json');
            },
            getDarkFactory: function () {
               return $http.get( location + 'resources/darkSpellsFactory.json');
            },
            getSpellsStaging: function () {
               return $http.get( location + 'resources/spellsCamp.json');
            }

         }
   }]);

})();