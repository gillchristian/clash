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
            getLightSpells: function () {
               var response = [];
               return $http.get( location + '/clash/resources/lightSpells.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkSpells: function () {
               var response = [];
               return $http.get( location + '/clash/resources/darkSpells.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            }
         }
      }
   ]);
