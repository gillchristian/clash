//Factory for troops and buildings data.

angular.module('clashApp.services', [])
   .factory('troopFactory', ['$http',
      function ($http) {
         var location = window.location.protocol + '//' + 'localhost';
         return {
            getLight: function () {
               var response = [];
               return $http.get( location + '/clash/resources/lightTroops.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDark: function () {
               var response = [];
               return $http.get( location + '/clash/resources/darkTroops.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getSpells: function () {
               var response = [];
               return $http.get( location + '/clash/resources/spells.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            }
         }
      }
   ]);