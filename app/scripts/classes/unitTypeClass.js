(function(){

'use strict';

//Factory for the UnitType Class

angular.module('clashApp.classes')
   .factory('unitTypeClass', [ 'unitClass',
      function( unitClass ){
      
      /**
      * Unit type class
      *
      * modesl all the units of a type (elixir troops, dark troops, spells, etc)
      *
      *
      * Constructor
      */
      var UnitType = function(model, name){
         this.differentUnits = model.length;

         this.name = name;

         this.units = [];
         for (var i = 0; i < this.differentUnits; i++) this.units.push( new unitClass(model[i]) );
      };

      /**
      * Public methods
      */
      // returns the space taken by its units
      UnitType.prototype.spacesUsed = function() {
         var spacing = 0;
         for (var i =  0; i < this.differentUnits - 1; i++) {
             spacing += this.units[i].getSpaceUsed();
         }
         return spacing;
      };

      // total cost of its units 
      UnitType.prototype.getCost = function() {
         var cost = 0;

         for (var i =  0; i < this.differentUnits - 1; i++) {
            cost += this.units[i].getActualCost();
         }
         return cost;
      };

      // time needed to finish all units
      UnitType.prototype.getTime = function() {
         var time = 0;

         for (var i =  0; i < this.differentUnits - 1; i++) {
             time += this.units[i].getTime();
         }
         return time;
      };    

      return UnitType;

   }]);

})();