(function(){

'use strict';

//Factory for the UnitType Class

angular.module('clashApp.services')
   .factory('unitTypeClass', [
      function(){

      // ----------------------------------------------------
      // unit class -----------------------------------------
      // ----------------------------------------------------
      var UnitType = function(unitsModel){
         this.unitsModel = unitsModel;
      };

      // unit methods ---------------------------------------
      // ----------------------------------------------------

      // spaces ocupated ------------------------------------
      UnitType.prototype.spacesUsed = function() {
         var spacing = 0, aux;

         for (var i = this.unitsModel.length - 1; i >= 0; i--) {
             aux = this.unitsModel[i].amount * this.unitsModel[i].space;
             spacing += aux;
         }
         return spacing;
      };

      // total cost of units --------------------------------
      UnitType.prototype.cost = function() {
         var cost = 0, aux, index;

         for (var i = this.unitsModel.length - 1; i >= 0; i--) {
             index = this.unitsModel[i].lvl - 1;
             if (typeofthis.unitsModel[i].cost[index] !== 'undefined' && typeofthis.unitsModel[i].amount !== 'undefined') {
                 aux = this.unitsModel[i].cost[index] * this.unitsModel[i].amount;
                 cost += aux;
             }
         }
         return cost;
      };

      // time ocupated --------------------------------------
      UnitType.prototype.time = function() {
         var time = 0;

         for (var i = this.unitsModel.length - 1; i >= 0; i--) {
             time += (this.unitsModel[i].time * this.unitsModel[i].amount);
         }
         return time;
      };

      return {
         unitType: UnitType,
       };

   }]);

})();