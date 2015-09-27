(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.classes')
   .factory('TrainerClass', [
      function(){

      /**
      * Trainer building class -----------------------------
      * this class models a troop training building
      * {
      *   "name": "Barrack"
      *   "capacity": [0,20,25,30,35,40,45,50,55,60,75],
      *   "lvls": [0,1,2,3,4,5,6,7,8,9,10],
      *   "lvl": 0,
      *   "amount" : [0,0,0,0,0,0,0,0,0,0],
      * }
      */

      /**
      * Constructor
      */
      var Trainer = function(model){
         this.folder    = model.folder;
         this.building  = model.building;
         this.name      = model.name;

         this.capacity  = model.capacity;
         this.lvls      = model.lvls;
         this.lvl       = model.lvl;
         this.amount    = model.amount;

         this.showTroops = true;
      };

      /**
      * Public Methods
      */

      // check if barrack has space left to produce units
      Trainer.prototype.hasSpaceFor = function(unitSpace) {
         return this.getQueue() + unitSpace <= this.getActualCapacity() ? true : false
      };

      // can produce a unit
      Trainer.prototype.canProduce = function(firstlvl) {
         return this.lvl > firstlvl ? true : false;
      };

      /**
      * Getters
      */

      // returns the capacity at the actual lvl
      Trainer.prototype.getActualCapacity = function() {
         return this.capacity[this.lvl];
      };

      // return total amount of queued units
      Trainer.prototype.getQueue = function() {
         var queue = 0;
         for (var i = 0; i < this.amount.length; i++)
            queue += this.amount[i];
         return queue;
      };

      Trainer.prototype.getCost = function(units) {
         var cost = 0;
         for (var i = 0; i < this.amount.length; i++) {
            cost += this.amount[i] * units[i].getActualCost();
         };
         return cost;
      };

      /**
      * Setters
      */

      // set the lvl of the building
      Trainer.prototype.setLvl = function(lvl) {
         if ( lvl >= this.lvls[0] && lvl <= this.lvls.last() ) this.lvl = lvl;
      };

      // reset all the queued units / amount 
      Trainer.prototype.resetAmount = function() {
         for (var i = 0; i < this.amount.length; i++){
            this.amount[i] = 0;
         }
      };

      // add one unit to the queued units
      Trainer.prototype.addUnit = function(id) {
            this.amount[id]++;
      };

      return Trainer;

      }]);

})();