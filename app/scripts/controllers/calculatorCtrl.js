(function(){

'use strict';

angular.module('clashApp.controllers')
    .controller('CalculatorController', ['$scope', 'troopFactory', 'buildingFactory', '$q', 'unitTypeClass', 'StagingBuildingClass',
        function ($scope, troopFactory, buildingFactory, $q, unitTypeClass , StagingBuildingClass) {

        var vm = this;

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
            vm.lightArmy     = new unitTypeClass(response[0].data, 'Light Troops', response[4].data, 'Light Barracks');
            vm.darkArmy      = new unitTypeClass(response[1].data, 'Dark Troops', response[5].data, 'Dark Barracks');
            vm.lightSpells     = new unitTypeClass(response[2].data, 'Light Spells', response[6].data, 'Light Factory');
            vm.darkSpells      = new unitTypeClass(response[3].data , 'Dark Spells', response[7].data, 'Dark Factory');

            // // //  staging buildings instances
            vm.camps           = new StagingBuildingClass(response[8].data, 'Camps');
            vm.spellStorage    = new StagingBuildingClass(response[9].data);

            // having all units and buildings in arrays is helpful to make some good use of the ng-repeat
            vm.unitTypes = [
                vm.lightArmy,
                vm.darkArmy,
                vm.lightSpells,
                vm.darkSpells
            ];

            vm.buildings = [
                vm.lightArmy.trainers,
                vm.darkArmy.trainers,
                vm.lightSpells.trainers,
                vm.darkSpells.trainers,
                vm.camps
            ]

            function theLoop () {
                vm.lightArmy.assingmentLoop();
                vm.darkArmy.assingmentLoop();
                // vm.lightSpells.assingmentLoop();
                // vm.darkSpells.assingmentLoop();
            }

            vm.theLoop = theLoop;

            //Watch light and dark troops totals to trigger troop asignment to barracks
            $scope.$watch("vm.lightArmy.spaceUsed()", function(newVal, oldVal) {
                if (!newVal) return;
                vm.lightArmy.assingmentLoop();

            });

            $scope.$watch("vm.darkArmy.spaceUsed()", function(newVal, oldVal) {
                if (!newVal) return;

                vm.darkArmy.assingmentLoop();

            });
    
        }); // ! then sucches function
    }]);

})();