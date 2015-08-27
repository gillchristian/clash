//Factory for troops and buildings data.

angular.module('clashApp.services')
   .factory('buildingFactory', ['$http',
      function ($http) {
         var location = window.location.href;
         return {
            getBarracks: function () {
               var response = [];
               return $http.get( location + 'resources/barracks.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkBarracks: function () {
               var response = [];
               return $http.get( location + 'resources/darkBarracks.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getCamps: function () {
               var response = [];
               return $http.get( location + 'resources/camps.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getLightFactory: function () {
               var response = [];
               return $http.get( location + 'resources/lightSpellsFactory.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkFactory: function () {
               var response = [];
               return $http.get( location + 'resources/darkSpellsFactory.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            }

         }
      }
   ]);