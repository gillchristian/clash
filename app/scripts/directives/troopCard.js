(function() {
   'use strict';
   angular.module('clashApp.directives', [])
      .directive('troopCard', [
         function() {
            return {
               restric: 'E',
               templateUrl: 'app/views/templates/troopCard.html',
               scope: {
                  unit: '=',
                  trainers: '=',
                  watch: '&'
               }
            }
         }]);


})();