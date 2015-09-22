(function(){
   'use strict';

   angular.module('clashApp.directives')
      .directive('buildingCard', [
         function(){
            return {
               restrict: 'E',
               templateUrl: 'app/views/templates/buildingCard.html',
               scope: {
                  building: '=',
                  type: '=',
                  index: '=buildingId'
               }
            }


         }]);
})();