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
        
        /// Execute services to get data
        $scope.services.getSpells();
        $scope.services.getLight();
        $scope.services.getDark();

        $scope.cantidad = function () {
            var cantidad = 0;
            var aux = 0;
            for (var i = $scope.light.length - 1; i >= 0; i--) {
                aux = $scope.light[i].amount * $scope.light[i].space;
                cantidad += aux;
            };
            return cantidad;
        }

        $scope.costo = function () {
            var costo = 0;
            var aux = 0;
            var index = 0;
            for (var i = $scope.light.length - 1; i >= 0; i--) {
                index = $scope.light[i].lvl-1;
                aux = $scope.light[i].cost[index] * $scope.light[i].amount;
                costo += aux;
                console.log("index, unit cost, aux, costo");
                console.log(index);
                console.log($scope.light[i].cost[index]);
                console.log(costo);
                console.log(aux);
            };
            return costo;
        }

        $scope.tiempo = function () {
            var tiempo = 0;
            for (var i = $scope.light.length - 1; i >= 0; i--) {
                tiempo += ($scope.light[i].time * $scope.light[i].amount);
            };
            return tiempo;
        }

}
]);