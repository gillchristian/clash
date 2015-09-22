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
            cost += this.units[i].getActualCost();
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
         this.resetBuildingsQueue();
         for (var i = 0; i < this.differentUnits; i++) {
            if (this.units[i].amount > 0)
               for (var g = 0; g < this.units[i].amount; g++)
                  this.assignUnit(i);
         }

      };
      
      // returns the id of the building that can produce the unit with the lower queue
      UnitType.prototype.assignUnit = function(index) {
         var possibleBuildings = [];
         var previousTime = 10000000;
         var bestBuilding = -1;
         for (var i = 0; i < this.differentTrainers; i++)
            if (this.trainers[i].hasSpaceFor(this.units[index].space) && this.trainers[i].canProduce(this.units[index].id))
               possibleBuildings.push(i);
         for (var i = 0; i < possibleBuildings.length; i++){
            if (this.getTrainerTime(possibleBuildings[i]) + this.units[index].time < previousTime) {
               bestBuilding = possibleBuildings[i];
               previousTime = this.getTrainerTime(possibleBuildings[i]) + this.units[index].time;
            }
            
         }

         // if it, fit it builds!!!
         this.trainers[bestBuilding].addUnit(this.units[index].id);
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


/* ##########################################################################
   ##########################################################################  
   ##########################################################################  */

// (function(){

// 'use strict';

// //Factory for the UnitType Class

// angular.module('clashApp.classes')
//    .factory('unitTypeClass', [ 'unitClass',
//       function( unitClass ){
      
//       /**
//       * Unit type class
//       *
//       * modesl all the units of a type (elixir troops, dark troops, spells, etc)
//       *
//       *
//       * Constructor
//       */
//       var UnitType = function(model, name, trainer){
//          this.differentUnits = model.length;

//          this.name = name;
//          this.trainer = 

//          this.units = [];
//          for (var i = 0; i < this.differentUnits; i++) this.units.push( new unitClass(model[i]) );
//       };

//       /**
//       * Public methods
//       */
//       // returns the space taken by its units
//       UnitType.prototype.spacesUsed = function() {
//          var spacing = 0;
//          for (var i =  0; i < this.differentUnits - 1; i++) {
//              spacing += this.units[i].getSpaceUsed();
//          }
//          return spacing;
//       };

//       // total cost of its units 
//       UnitType.prototype.getCost = function() {
//          var cost = 0;

//          for (var i =  0; i < this.differentUnits - 1; i++) {
//             cost += this.units[i].getActualCost();
//          }
//          return cost;
//       };

//       // time needed to finish all units
//       UnitType.prototype.getTime = function() {
//          var time = 0;

//          for (var i =  0; i < this.differentUnits - 1; i++) {
//              time += this.units[i].getTime();
//          }
//          return time;
//       };    

//       return UnitType;

//    }]);

// })();
