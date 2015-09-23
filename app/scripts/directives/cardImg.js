(function() {
   'use strict';
   angular.module('clashApp.directives')
      .directive('cardImg', [
         function () {
            return {
               restrict: 'E',
               scope: {
                  u: '=unit'
               },
               templateUrl: 'app/views/templates/cardImg.html',
               link: function (scope, elm, attr) {
                  var u = scope.u;
                  console.log(attr.baseUrl);
                  if(scope.u.folder.match(/spell/i) !== null)  scope.src = attr.baseUrl + u.folder + '/' + u.unit + '.png' ; 
                  else scope.src = attr.baseUrl + u.folder + '/' + u.unit + '-' + u.lvl + '.png';
                  }
               }
         }]);
})();