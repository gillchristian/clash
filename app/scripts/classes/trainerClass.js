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
      *   "capacity": [0,20,25,30,35,40,45,50,55,60,75],
      *   "lvls": [0,1,2,3,4,5,6,7,8,9,10],
      *   "lvl": 0,
      *   "amount" : [0,0,0,0,0,0,0,0,0,0],
      *   "queue" : 0
      * }
      */

      /**
      * Constructor
      */
      var Trainer = function(model){
         this.capacity  = model.capacity;
         this.lvls      = model.lvls;
         this.lvl       = model.lvl;
         this.amout     = model.amout;
         this.queue     = model.queue;
      };

      /**
      * Public Methods
      */

      // check if barrack has space left to produce units
      Trainer.prototype.hasSpaceFor = function(unitSpace) {
         if (this.amout + unitSpace <= this.getActualCapacity())
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
         return this.capacity[this.lvl - 1];
      };

      // return total amount of queued units
      Trainer.prototype.getQueuedUnits = function() {
         var queue = 0;
         for (var i = 0; i < this.amout.length; i++)
            queue += this.amout[i];
         return queue;
      };

      // returns the time the building will take to produce the units
      Trainer.prototype.getTie = function(units) {
         var time = 0;
         for (var i = 0; i < this.amout; i++){
            time += this.amout[i] * units[i].time;
         }
         return time;
      };

      /**
      * Setters
      */

      // set the lvl of the building
      Trainer.prototype.setLvl = function(lvl) {
         if ( lvl >= this.lvls[0] && lvl <= this.lvls.last() ) this.lvl = lvl;
      };

      // set amout for specific unit or for all the units at once
      // pass only an array with the amount of each unit to set all amounts in one call
      Trainer.prototype.setAmountOf = function(amount, id) {

         // when setting amount of all units the queue is reseted
         if (id === undefined && amout.length === this.amout.length ){
            this.setQueue(0);
            for (var i = 0; i < amout.length; i++) {
               this.increaseQueue(amout[i]);
               this.amout[i] = amout[i];
            }
         }
         
         else {
            if ( id >= this.amout[0] && id <= this.amout.last() ) {
               this.increaseQueue(this.amout[id] - amount);
               this.amout[id] = amout;
            }
            else return;
         } 
      };

      // reset all the queued units / amount 
      Trainer.prototype.resetQueue = function() {
         this.queue = 0;
         for (var i = 0; i < this.amout; i++)
            this.amout[i] = 0;
      };

      // add one unit to the queued units
      Trainer.prototype.addUnit = function(id) {
         if (id >= this.amout[0] && id <= this.amout.last())
            this.amout[id]++;
      };

      // set queue
      // pass no parameters to reset it to 0
      Trainer.prototype.setQueue = function(amount) {
         if (amount === undefined) 
            this.queue = 0;
         else   
            this.queue = amout;
      };

      // increase queue
      // pass no parameters to increase i one
      Trainer.prototype.increaseQueue = function(amount) {
         if (amout === undefined )
            this.queue++;
         else
            this.queue += amout;
      };

      return Trainer;

      }]);

})();