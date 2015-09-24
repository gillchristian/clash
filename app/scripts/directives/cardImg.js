(function() {
   'use strict';
   angular.module('clashApp.directives')
      .directive('cardImg', ['$location',
         function ($location) {
            return {
               restrict: 'E',
               scope: {
                  unit: '=',
                  classes: '='
               },
               templateUrl: 'app/views/templates/cardImg.html',
               link: function (scope, elm, attr) {
                  if (scope.unit.folder.match(/spell/i) !== null)  scope.putLVL = false;
                  else scope.putLVL = true;
               }
            }
      }]);
})();