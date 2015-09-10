(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.services')
   .factory('StagingBuildingClass', [
      function(){

      // ----------------------------------------------------
      // staging building class -----------------------------
      // ----------------------------------------------------
      var StagingBuilding = function(buildingModel){
         this.buildingModel = buildingModel;
      };

      // staging buildings methods --------------------------
      // ----------------------------------------------------

      // max amount of units alocated -----------------------
      StagingBuilding.prototype.maxAmount = function() {
         var max = 0;

         if (typeof this.buildingModel !== 'undefined') {
             for (var i = this.buildingModel.length - 1; i >= 0; i--) {
                 max += this.buildingModel[i].capacity[this.buildingModel[i].lvl];
             };

         }
      };

      // capacity exceeded check ----------------------------
      StagingBuilding.prototype.limitExceeded = function(Units) {
         var total = 0;
         
         for (var i = 0; i < Units.length; i++ ) {
            total += Units[i].spacesUsed();
         }
         
         if (this.maxAmount() < total) return true;
         else return false;
      };

      return {
         StagingBuilding: StagingBuilding
       };

   }]);

})();