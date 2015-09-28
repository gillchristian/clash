(function(){

'use strict';

//Factory for the UnitType Class

angular.module('clashApp.classes', [])
   .factory('unitTypeClass', [ 'unitClass', 'TrainerClass',
      function( unitClass, TrainerClass ){
      
      /**
      * Unit type class
      *
      * modesl all the units of a type (elixir troops, dark troops, spells, etc)
      * and the buildings that produce them
      * the methods made possible to comunicate troops and trainers
      *
      * Constructor
      */
      var UnitType = function(unitModel, unitsName, trainerModel, trainersName ){
         this.differentUnits = unitModel.length;
         this.differentTrainers = trainerModel.length;

         this.trainersName = trainersName;
         this.unitsName = unitsName;

         // init the different units
         this.units = [];
         for (var i = 0; i < this.differentUnits; i++) this.units.push( new unitClass(unitModel[i]) );

         // init the different trainer buildings
         this.trainers = [];
         for (var i = 0; i < this.differentTrainers; i++) this.trainers.push( new TrainerClass(trainerModel[i]) );
         
         for (var i = 0; i < this.differentTrainers; i++)
            for(var g = 0; g < this.differentUnits; g++)
               this.trainers[i].unitSpaces[g] = this.units[g].space;

      };

      /**
      * Public methods
      */
      // returns the space taken by its units
      UnitType.prototype.spacesUsed = function() {
         var spacing = 0;
         for (var i =  0; i < this.differentUnits; i++) {
             spacing += this.units[i].getSpaceUsed();
         }
         return spacing;
      };

      // total cost of its units 
      UnitType.prototype.getCost = function() {
         var cost = 0;
         for (var i =  0; i < this.differentUnits; i++) {
            cost += this.units[i].getCost();
         }
         return cost;
      };

      // time needed to finish all units
      UnitType.prototype.getTime = function() {
         var time = 0;

         for (var i =  0; i < this.differentUnits; i++) {
             time += this.units[i].getTime();
         }
         return time;
      };

      // returns the time an specific trainer will take to produce all its units
      UnitType.prototype.getTrainerTime = function(index) {
         var time = 0;
         for (var i = 0; i < this.differentUnits; i++) {
            time += this.trainers[index].amount[i] * this.units[i].time;
         };
         return time;
      };


      // troop assingment MOTHER FUCKER!!!
      // loops through units and buldings assingning units to buildings
      UnitType.prototype.assingmentLoop = function() {
         // since all units on queue are asigned on the loop
         // is important to have al queues at 0
         this.resetBuildingsQueue();
         // loop trough different units
         for (var i = 0; i < this.differentUnits; i++) {
            if (this.units[i].amount > 0 && this.units[i].lvl > 0)
               // assign each same unit on queue
               for (var g = 0; g < this.units[i].amount; g++)
                  this.assignUnit(i);
         }

      };
      
      // arrValues.indexOf('Sam') > -1

      // assigns a unit to a building
      UnitType.prototype.assignUnit = function(index) {
         // init helper variables for comparison and temporal saving
         var possibleBuildings = [];
         var previousTime = 10000000;
         var bestBuilding = -1;
         // pick the possible buildings
         for (var i = 0; i < this.differentTrainers; i++)
            if (this.trainers[i].hasSpaceFor(index) && this.trainers[i].canProduce(index))
               possibleBuildings.push(i);
         // find the best building with the lower time 
         for (var i = 0; i < possibleBuildings.length; i++){
            if (this.getTrainerTime(possibleBuildings[i]) + this.units[index].time < previousTime) {
               bestBuilding = possibleBuildings[i];
               previousTime = this.getTrainerTime(possibleBuildings[i]) + this.units[index].time;
            }  
         }
         // if it fit, it builds!!!
         bestBuilding != -1 ? this.trainers[bestBuilding].addUnit(this.units[index].id) : '';
      };

      // reset the buildings queue and amounts
      UnitType.prototype.resetBuildingsQueue = function() {
         for (var i = 0; i < this.differentTrainers; i++) {
            this.trainers[i].resetAmount();
         };
      };

      return UnitType;

   }]);

})();