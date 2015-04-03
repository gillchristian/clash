//Factory for troops and buildings data.

angular.module('clashApp.services', [])
   .factory('troopFactory', ['$http',
      function ($http) {
         var location = window.location.protocol + '//' + 'gillchristian.com';
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
            },
            getBarracks: function () {
               var response = [];
               return $http.get( location + '/clash/resources/barracks.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getDarkBarracks: function () {
               var response = [];
               return $http.get( location + '/clash/resources/darkBarracks.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getCamps: function () {
               var response = [];
               return $http.get( location + '/clash/resources/camps.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            },
            getFactory: function () {
               var response = [];
               return $http.get( location + '/clash/resources/spellsFactory.json')
                  .success(function(data) {
                     response = data;
                  });
               return response;
            }

         }
      }
   ]);