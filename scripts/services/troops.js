//Factory for troops and buildings data.

angular.module('clashApp.services', [])
   .factory('troopFactory', ['$http',
      function ($http) {
         var location = window.location.href;
         return {
            getLightTroops: function () {
               var response = [];
               return $http.get( location + 'resources/lightTroops.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkTroops: function () {
               var response = [];
               return $http.get( location + 'resources/darkTroops.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getLightSpells: function () {
               var response = [];
               return $http.get( location + 'resources/lightSpells.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkSpells: function () {
               var response = [];
               return $http.get( location + 'resources/darkSpells.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            }
         }
      }
   ]);
