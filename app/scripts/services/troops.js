(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.services', [])
   .factory('troopFactory', ['$http',
      function ($http) {
         var location = window.location.href;
         return {
            getLightTroops: function () {
               return $http.get( location + 'resources/lightTroops.json');
            },
            getDarkTroops: function () {
               return $http.get( location + 'resources/darkTroops.json');
            },
            getLightSpells: function () {
               return $http.get( location + 'resources/lightSpells.json');
            },
            getDarkSpells: function () {
               return $http.get( location + 'resources/darkSpells.json');
            }
         }
   }]);

})();