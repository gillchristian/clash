angular.module('clashApp.services', [])
   .factory('troopFactory', ['$http',
      function ($http) {
         var location = window.location.protocol + '//' + 'gillchristian.com';
         return {
            getLight: function () {
               return $http({
                  method: 'GET',
                  url: location + '/clash/resources/light.php',
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               });
            },
            getDark : function () {
               return $http ({
                  method: 'GET',
                  url: location + '/clash/resources/dark.php',
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               });
            },
            getSpells : function () {
               return $http ({
                  method: 'GET',
                  url: location + '/clash/resources/spells.php',
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               });
            }

         }
      }
   ]);