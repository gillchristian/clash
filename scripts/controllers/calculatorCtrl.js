(function(){

'use strict';

angular.module('clashApp.controllers', [])
    .controller('CalculatorController', ['$scope', '$http', 'troopFactory', 'buildingFactory', 'calculatorFactory', 'productionBuildingClass', 'stagingBuildingClass', 'unitTypeClass', '$q', 
        function ($scope, $http, troopFactory, buildingFactory, calculatorFactory, productionBuildingClass, stagingBuildingClass, unitTypeClass, $q) {

            var vm = this;

/* ----- this should not be necesary
            // Init Variables
            vm.light_troops = [];
            vm.dark_troops = [];
            vm.light_barracks = [];
            vm.dark_barracks = [];
            vm.dark_troops.amount = [];
            vm.max_amount = [];
            vm.light_spells = [];
            vm.dark_spells = [];
*/
            vm.url = 'http://gillchristian.com/clash/img/';

            //Services manipulation
            var servicesPromises = [
                // unit types promises
                troopFactory.getLightTroops(),
                troopFactory.getDarkTroops(),
                troopFactory.getLightSpells(),
                troopFactory.getDarkSpells(),

                // production buildings promises
                buildingFactory.getBarracks(),
                buildingFactory.getDarkBarracks(),
                buildingFactory.getLightFactory(),
                buildingFactory.getDarkFactory(),

                //  stagin buildings promises
                buildingFactory.getCamps(),
                buildingFactory.getSpellsStaging()
            ];

            // resolve all the promises together and do the *everything* inside the promise --> "synchronously"
            $q.all( servicesPromises ).then(function(response){

                // unit types instances
                vm.light_troops     = new unitTypeClass.unitType(response[0].data);
                vm.dark_troops      = new unitTypeClass.unitType(response[1].data);
                vm.light_spells     = new unitTypeClass.unitType(response[2].data);
                vm.dark_spells      = new unitTypeClass.unitType(response[3].data);

                // production buildings instances
                vm.light_barracks   = new productionBuildingClass.productionBuilding(response[4].data);
                vm.dark_barracks    = new productionBuildingClass.productionBuilding(response[5].data);
                vm.light_factory    = new productionBuildingClass.productionBuilding(response[6].data);
                vm.dark_factory     = new productionBuildingClass.productionBuilding(response[7].data);
                //  staging buildings instances
                vm.camps            = new stagingBuildingClass.stagingBuilding(response[8].data);
                vm.spellsCamp       = new stagingBuildingClass.stagingBuilding(response[9].data);
            

                //Watch light and dark troops totals to trigger troop asignment to barracks
                $scope.$watch("vm.spacing('light')", function(newVal, oldVal) {
                    if (!newVal) return;
                    var check = false;

                    for (var i = vm.light_barracks.length - 1; i >= 0; i--) {
                        if (vm.light_barracks[i].lvl > 0) {
                            check = true;
                        }
                    };
                    if (check) {
                        vm.troopsAsignment('light');
                    }

                });

                $scope.$watch("vm.spacing('dark')", function(newVal, oldVal) {
                    if (!newVal) return;
                    var check = false;

                    for (var i = vm.dark_barracks.length - 1; i >= 0; i--) {
                        if (vm.dark_barracks[i].lvl > 0) {
                            check = true;
                        }
                    };
                    if (check) {
                        vm.troopsAsignment('dark');
                    }

                });

        
            }); // ! then sucches function
    }]);

})();