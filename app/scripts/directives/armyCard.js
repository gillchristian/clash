(function() {
   'use strict';
   angular.module('clashApp.directives', [])
      .directive('armyCard', [
         function() {
            return {
               restric: 'E',
               templateUrl: 'app/views/templates/armyCard.html',
               scope: {
                  unit: '='
               }
            }
         }]);


})();