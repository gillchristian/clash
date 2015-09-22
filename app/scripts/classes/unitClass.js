(function(){

'use strict';

//Factory for the Unit Class

angular.module('clashApp.classes')
   .factory('unitClass', [
      function(){

      /** unit class -----------------------------------------
      * this class models a single unit
      * the model is the object describing the unit
      * its lvls, creation time, etc :
      * {
      *     "id": 1,
      *     "unit": "barbarian",
      *     "name": "Barbarian",
      *     "cost": [0,25,40,60,100,150,200,250],
      *     "lvls": [0, 1, 2, 3,  4,  5,  6,  7],
      *     "lvl": 0,
      *     "time": 20,
      *     "space": 1,
      *     "amount": 0
      * }
      * /

      /**
      * Constructor
      */
      var Unit = function(model){
         // public properties, assigned to 'this'
         this.id        = model.id;
         this.unit      = model.unit;
         this.folder    = model.folder;
         this.name      = model.name;
         this.cost      = model.cost;
         this.lvls      = model.lvls;
         this.lvl       = model.lvl;
         this.time      = model.time;
         this.space     = model.space;
         this.amount    = model.amount;
      };

      /**
      * Public Methods
      *
      *
      * Getters
      */

      // returns the cost at the actual lvl
      Unit.prototype.getActualCost = function() {
         return this.cost[this.lvl];
      };

      // returns the total cost 
      Unit.prototype.getCost = function() {
         return this.cost[this.lvl] * this.amount;
      };

      // returns the space the units take
      Unit.prototype.getSpaceUsed = function() {
         return this.space * this.amount;
      };

      // returns the time it takes to produce all units
      Unit.prototype.getTime = function() {
         return this.time * this.amount;
      };

      /**
      * Setters
      */

      // set the lvl of the unit
      Unit.prototype.setLvl = function(lvl) {
         if ( lvl >= this.lvls[0] && lvl <= this.lvls.last() ) this.lvl = lvl;
      };

      return Unit;

   }]);

})();