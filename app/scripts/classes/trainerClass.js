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
         console.log();
         if (this.getQueue() + unitSpace <= this.getActualCapacity())
            return true;
         else return false;
      };

      // can produce a unit
      Trainer.prototype.canProduce = function(firstlvl) {
         if ( this.lvl >= firstlvl )
            return true;
         else
            return false;
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

      /**
      * Setters
      */

      // set the lvl of the building
      Trainer.prototype.setLvl = function(lvl) {
         if ( lvl >= this.lvls[0] && lvl <= this.lvls.last() ) this.lvl = lvl;
      };

      // // set amount for specific unit or for all the units at once
      // // pass only an array with the amount of each unit to set all amounts in one call
      // Trainer.prototype.setAmountOf = function(amount, id) {

      //    // when setting amount of all units the queue is reseted
      //    if (id === undefined && amount.length === this.amount.length ){
      //       for (var i = 0; i < amount.length; i++) {
      //          this.amount[i] = amount[i];
      //       }
      //    }
         
      //    else {
      //       if ( id >= this.amount[0] && id <= this.amount.last() ) {
      //          this.amount[id] = amount;
      //       }
      //       else return;
      //    } 
      // };

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