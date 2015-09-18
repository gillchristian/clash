(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.services', [])
   .factory('troopFactory', ['$http',
      function ($http) {
         var location = window.location.href + 'assets/resources';
         return {
            getLightTroops: function () {
               return $http.get( location + '/lightTroops.json');
            },
            getDarkTroops: function () {
               return $http.get( location + '/darkTroops.json');
            },
            getLightSpells: function () {
               return $http.get( location + '/lightSpells.json');
            },
            getDarkSpells: function () {
               return $http.get( location + '/darkSpells.json');
            }
         }
   }]);

})();