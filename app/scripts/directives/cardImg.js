(function() {
   'use strict';
   angular.module('clashApp.directives')
      .directive('cardImg', ['$location',
         function ($location) {
            return {
               restrict: 'E',
               scope: {
                  u: '=unit'
               },
               templateUrl: 'app/views/templates/cardImg.html',
               link: function (scope, elm, attr) {
                  var u = scope.u;
                  if(scope.u.folder.match(/spell/i) !== null)  scope.src = "assets/images/" + u.folder + '/' + u.unit + '.png' ; 
                  else scope.src = "assets/images/" + u.folder + '/' + u.unit + '-' + u.lvl + '.png';
                  }
               }
         }]);
})();