'use strict';

angular.module('clashApp.controllers', [])
  .controller('ArmyController', ['$scope', '$http', 'troopFactory',
    function ($scope, $http, troopFactory ){

        $scope.selected = 1;    	
        $scope.services = {
            getLight: function(){
                troopFactory.getLight()
                    .success(function (data){
                        $scope.light = data;
                    });
            },
            getDark: function(){
                troopFactory.getDark()
                    .success(function (data){
                        $scope.dark = data;
                    });
            },
            getSpells: function (){
                troopFactory.getSpells()
                    .success(function (data){
                        $scope.spells = data;
                    });
            }
        }
        
        // Execute services to get data
        $scope.services.getSpells();
        $scope.services.getLight();
        $scope.services.getDark();

        $scope.cantidad = function (option) {
            var cantidad = 0;
            var aux = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        aux = $scope.light[i].amount * $scope.light[i].space;
                        cantidad += aux;
                    };
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        aux = $scope.dark[i].amount * $scope.dark[i].space;
                        cantidad += aux;
                    };
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        aux = $scope.spells[i].amount * $scope.spells[i].space;
                        cantidad += aux;
                    };
                    break;
            }
            return cantidad;
        }

        $scope.costo = function (option) {
            var costo = 0;
            var aux = 0;
            var index = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        index = $scope.light[i].lvl-1;
                        aux = $scope.light[i].cost[index] * $scope.light[i].amount;
                        costo += aux;
                    };
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        index = $scope.dark[i].lvl-1;
                        aux = $scope.dark[i].cost[index] * $scope.dark[i].amount;
                        costo += aux;
                    };
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        index = $scope.spells[i].lvl-1;
                        aux = $scope.spells[i].cost[index] * $scope.spells[i].amount;
                        costo += aux;
                    };
                    break;
            }
            return costo;
        }

        $scope.tiempo = function (option) {
            var tiempo = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        tiempo += ($scope.light[i].time * $scope.light[i].amount);
                    };
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        tiempo += ($scope.dark[i].time * $scope.dark[i].amount);
                    };
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        tiempo += ($scope.spells[i].time * $scope.spells[i].amount);
                    };
                    break;
            }
            return tiempo;
        }

}
]);