(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.classes')
   .factory('StagingBuildingClass', [
      function(){

      // {
      //     "capacity": [0,20,30,35,40,45,50,55,60],
      //     "lvl": 0, 
      //     "lvls": [0,1,2,3,4,5,6,7,8]
      // }

      // staging building class
      var StagingBuilding = function(model){
         this.buildingModel = model;
      };

      // staging buildings methods 

      // max amount of units alocated
      StagingBuilding.prototype.maxAmount = function() {
         var max = 0;
         for (var i = this.buildingModel.length - 1; i >= 0; i--) {
           max += this.buildingModel[i].capacity[this.buildingModel[i].lvl];
         };
         return max;
      };

      // capacity exceeded check
      StagingBuilding.prototype.limitExceeded = function(Units) {
         var total = 0;
         for (var i = 0; i < Units.length; i++ ) {
            total += Units[i].spacesUsed();
         }
         if (this.maxAmount() < total) return true;
         else return false;
      };

      return StagingBuilding;

   }]);

})();

/*
[
    {
        "capacity": [0,20,30,35,40,45,50,55,60],
        "lvl": 0, 
        "lvls": [0,1,2,3,4,5,6,7,8]
    },
    {
        "capacity": [0,20,30,35,40,45,50,55,60],
        "lvl": 0, 
        "lvls": [0,1,2,3,4,5,6,7,8]
    },
    {
        "capacity": [0,20,30,35,40,45,50,55,60],
        "lvl": 0, 
        "lvls": [0,1,2,3,4,5,6,7,8]
    },
    {
        "capacity": [0,20,30,35,40,45,50,55,60],
        "lvl": 0, 
        "lvls": [0,1,2,3,4,5,6,7,8]
    }
]
*/