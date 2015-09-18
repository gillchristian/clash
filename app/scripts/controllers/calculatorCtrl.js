(function(){

'use strict';

angular.module('clashApp.controllers')
    .controller('CalculatorController', ['$scope', 'troopFactory', 'buildingFactory', '$q', 'unitTypeClass', 'productionBuildingClass', 'StagingBuildingClass',
        function ($scope, troopFactory, buildingFactory, $q, unitTypeClass, productionBuildingClass , StagingBuildingClass) {

        var vm = this;

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
            vm.lightTroops     = new unitTypeClass(response[0].data, 'Light Barracks');
            vm.darkTroops      = new unitTypeClass(response[1].data, 'Dark Barracks');
            vm.lightSpells     = new unitTypeClass(response[2].data, 'Light Spells');
            vm.darkSpells      = new unitTypeClass(response[3].data, 'Dark Spells');

            // // production buildings instances

            vm.lightBarracks   = new productionBuildingClass(response[4].data);
            vm.darkBarracks    = new productionBuildingClass(response[5].data);
            vm.lightFactory    = new productionBuildingClass(response[6].data);
            vm.darkFactory     = new productionBuildingClass(response[7].data);
            // // //  staging buildings instances
            vm.camps           = new StagingBuildingClass(response[8].data);
            vm.spellStorage    = new StagingBuildingClass(response[9].data);

            // having all units and buildings in arrays is helpful to make some good use of the ng-repeat
            vm.unitTypes = [
                vm.lightTroops,
                vm.darkTroops,
                vm.lightSpells,
                vm.darkSpells
            ];
            vm.trainers = [
                vm.lightBarracks,
                vm.darkBarracks,
                vm.lightFactory,
                vm.darkFactory
            ];

            //Watch light and dark troops totals to trigger troop asignment to barracks
            $scope.$watch("vm.lightTroops.spaceUsed()", function(newVal, oldVal) {
                if (!newVal) return;
                vm.lightTroops.assingmentLoop();

            });

            $scope.$watch("vm.darkTroops.spaceUsed()", function(newVal, oldVal) {
                if (!newVal) return;

                vm.darkTroops.assingmentLoop();

            });
    
        }); // ! then sucches function
    }]);

})();