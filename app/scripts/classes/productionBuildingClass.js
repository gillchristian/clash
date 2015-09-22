(function(){

'use strict';

/**
* ----- DEPRECATED!!! -----
* ----- DEPRECATED!!! -----
* ----- DEPRECATED!!! -----
* ----- DEPRECATED!!! -----
* ----- DEPRECATED!!! -----
*/


//Factory for troops and buildings data.

angular.module('clashApp.classes')
	.factory('productionBuildingClass',  [ 'TrainerClass',
		function( TrainerClass ){

		/**
		* Production buildings methods
		*
		* models all the buildings producing the same kind of units
		*
      *
      * Constructor
      */		
		var ProductionBuilding = function(model, name){
			this.differentBuildings = model.length;
			this.showTroops = true;

			this.name = name;
			this.buildings = [];
         for (var i = 0; i < this.differentBuildings; i++) this.buildings.push( new TrainerClass(model[i]) ) ;
		};

      /**
      * Public methods
      */

		// troop assingment MOTHER FUCKER!!!
		// loops through units and buldings assingning units to buildings
		ProductionBuilding.prototype.assingmentLoop = function(Unit) {
			this.resetBuildingsQueue();
			for (var i = 0; i < Unit.differentUnits; i++)
				if (Unit[i].amount > 0)
					this.assignUnit(Unit[i]);

		};
		
		// returns the id of the building that can produce the unit with the lower queue
		ProductionBuilding.prototype.assignUnit = function(Unit) {
			var possibleBuildings = [];
			var previusTime = 10000000;
			var bestBuilding = -1;
			for (var i = 0; i < this.differentBuildings; i++)
				if (this.buildings[i].hasSpaceFor(Unit.space) && this.buildings[i].canProduce(Unit.id))
					possibleBuildings.puhs(i);
			for (var i = 0; i < possibleBuildings.length; i++)
				if (this.buildings[ possibleBuildings[i] ] + Unit.time < previusTime) {
					bestBuilding = possibleBuildings[i];
					previusTime = this.buildings[ possibleBuildings[i] ] + Unit.time;
				}
      	// if it, fit it builds!!!
      	this.buildings[bestBuilding].addUnit(Unit.id);
		};

		return ProductionBuilding;

		}]);

})();


/* not neccesary since we never want to know how many units are queued in all the buildings
		// return building queued units (spaces)
		ProductionBuilding.prototype.queuedSpaces = function(index, units) {
			var total = 0;
			for (var i = units.length; i > 0; i--) {
				total += this.buildingModel[index].amount[i];
			}
			return total;
		};

not neccesary because is already a method of the TrainerClass
		// building queued units (spaces) ---------------------
		ProductionBuilding.prototype.time = function(index, units) {
			var time = 0;

			for (var i = units.length; i > 0; i--) {
				time += (units[i - 1] * this.buildingModel[index].amount[i]);
			}
			return time;
		};

		// building queued units (spaces) ---------------------
		productionBuildingClass.prototype.reset = function(index) {
			this.buildingModel[index].amount = 0;
		};
*/