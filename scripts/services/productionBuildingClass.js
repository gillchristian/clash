(function(){

'use strict';

//Factory for troops and buildings data.

angular.module('clashApp.services')
	.factory('productionBuildingClass', [
		function(){

		// ----------------------------------------------------
		// production building class --------------------------
		// ----------------------------------------------------
		var ProductionBuilding = function(buildingModel){
			this.buildingModel = buildingModel;
		};

		// Production buildings methods -----------------------
		// ----------------------------------------------------

		// building queued units (spaces) ---------------------
		ProductionBuilding.prototype.queuedSpaces = function(index, units) {
			var total = 0;
			for (var i = units.length; i > 0; i--) {
				total += this.buildingModel[index].amount[i];
			}
			return total;
		};

		// building queued units (spaces) ---------------------
		ProductionBuilding.prototype.time = function(index, units) {
			var time = 0;

			for (var i = units.length; i > 0; i--) {
				time += (units[i - 1] * this.buildingModel[index].amount[i]);
			}
			return time;
		};

		return {
			productionBuilding: ProductionBuilding
		};

		}]);

})();