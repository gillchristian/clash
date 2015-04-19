'use strict';

angular.module('clashApp.controllers', [])
  .controller('CalculatorController', ['$scope', '$http', 'troopFactory', 'buildingFactory',
    function ($scope, $http, troopFactory, buildingFactory ){

        // Init Variables 
        $scope.light = [];
        $scope.dark = [];
        $scope.spells = [];
        $scope.max_amount = [];

        //Services manipulation
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
            },
            getBarracks: function (){
                buildingFactory.getBarracks()
                    .success(function (data){
                        $scope.light_barracks = data;
                    })
            },
            getDarkBarracks: function (){
                buildingFactory.getDarkBarracks()
                    .success(function (data){
                        $scope.dark_barracks = data;
                    })
            },
            getCamps: function (){
                buildingFactory.getCamps()
                    .success(function (data){
                        $scope.camps = data;
                    })
            },
            getFactory: function (){
                buildingFactory.getFactory()
                    .success(function (data){
                        $scope.spell_factory = data;
                    })
            }
        }
        
        //Execute services to get data
        $scope.services.getSpells();
        $scope.services.getLight();
        $scope.services.getDark();
        $scope.services.getBarracks();
        $scope.services.getDarkBarracks();
        $scope.services.getCamps();
        $scope.services.getFactory();


        //Calculate the space ocupated by troops
        $scope.spacing = function (option) {
            var spacing = 0;
            var aux = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        aux = $scope.light[i].amount * $scope.light[i].space;
                        spacing += aux;
                    }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        aux = $scope.dark[i].amount * $scope.dark[i].space;
                        spacing += aux;
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        aux = $scope.spells[i].amount * $scope.spells[i].space;
                        spacing += aux;
                    }
                    break;
                case 'total.troops':
                    spacing = $scope.spacing('light') + $scope.spacing('dark');
                    break;
            }
            return spacing;
        }

        //Calculate the amount of troops
        $scope.cantidad = function (option) {
            var cantidad = 0;
            var aux = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        aux = $scope.light[i].amount;
                        cantidad += aux;
                    }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        aux = $scope.dark[i].amount;
                        cantidad += aux;
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        aux = $scope.spells[i].amount;
                        cantidad += aux;
                    }
                    break;
            }
            return cantidad;
        }

        //Calculate the total cost
        $scope.costo = function (option) {
            var costo = 0;
            var aux = 0;
            var index = 0;
            switch (option) {
                case 'light':
                        for (var i = $scope.light.length - 1; i >= 0; i--) {
                            index = $scope.light[i].lvl-1;
                            if (typeof $scope.light[i].cost[index] !== 'undefined' && typeof $scope.light[i].amount !== 'undefined'){
                                    aux = $scope.light[i].cost[index] * $scope.light[i].amount;
                                    costo += aux;
                            }
                        }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        index = $scope.dark[i].lvl-1;
                        if (typeof $scope.dark[i].cost[index] !== 'undefined' && typeof $scope.dark[i].amount !== 'undefined'){
                            aux = $scope.dark[i].cost[index] * $scope.dark[i].amount;
                            costo += aux;
                        }
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        index = $scope.spells[i].lvl-1;
                        if (typeof $scope.spells[i].cost[index] !== 'undefined' && typeof $scope.spells[i].amount !== 'undefined'){
                            aux = $scope.spells[i].cost[index] * $scope.spells[i].amount;
                            costo += aux;
                        }
                    }
                    break;
                case 'total.light':
                    costo = $scope.costo('light') + $scope.costo('spells');
                    break;
            }
            return costo;
        }

        //Calculate the total time
        $scope.tiempo = function (option) {
            var tiempo = 0;
            switch (option) {
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        tiempo += ($scope.light[i].time * $scope.light[i].amount);
                    }
                    break;
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        tiempo += ($scope.dark[i].time * $scope.dark[i].amount);
                    }
                    break;
                case 'spells':
                    for (var i = $scope.spells.length - 1; i >= 0; i--) {
                        tiempo += ($scope.spells[i].time * $scope.spells[i].amount);
                    }
                    break;
            }
            return tiempo;
        }

        //Max amount of troops and spells calculation
        $scope.max_amount = function (option) {
            var max = 0;
            switch (option){
                case 'troops':
                    if (typeof $scope.camps !== 'undefined'){
                        for (var i = $scope.camps.length - 1; i >= 0; i--) {
                            max += $scope.camps[i].capacity[$scope.camps[i].lvl];
                        };
                        
                    }
                    break;
                case 'spells':
                        if (typeof $scope.spell_factory !== 'undefined') {
                            for (var i = $scope.spell_factory.length - 1; i >= 0; i--) {
                                max = $scope.spell_factory[i].capacity[$scope.spell_factory[i].lvl];
                            };    
                        };                    
                    break;
            }
            return max;
            
        }

        //Troop and spells max amount exceeded check
        $scope.limit = function (option) {
            var answer = false;
            switch (option){
                case 'troops':
                    if ( $scope.max_amount('troops') < $scope.spacing('total.troops') ){
                        answer = true;
                    }
                    break;
                case 'spells':
                    if ( $scope.max_amount('spells') < $scope.spacing('spells') ){
                        answer = true;
                    }
                    break;
            }
            return answer;
        }


        /*$scope.troopsAsignment = function () {
            for (var i = $scope.cantidad('light') - 1; i >= 0; i--) {

                for (var i = 0; i <= $scope.availiable_barracks(); i++) {
                    $scope.light_barracks[i].lvl
                };
            };
        }*/

}
]);