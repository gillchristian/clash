'use strict';

angular.module('clashApp.controllers', [])
  .controller('CalculatorController', ['$scope', '$http', 'troopFactory', 'buildingFactory',
    function ($scope, $http, troopFactory, buildingFactory ){

        // Init Variables 
        $scope.light = [];
        $scope.light_barracks = [];
        $scope.dark_barracks = [];
        $scope.dark = [];
        $scope.dark.amount = [];
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

        //Calculate the total unite queue in a barrack
        $scope.barrack_total = function (type, index) {
            var cantidad = 0;
            switch (type) {
                case 'light':
                    for (var i = 10; i > 0; i--) {
                        cantidad += $scope.light_barracks[index].amount[i];
                    }
                    break;
                case 'dark':
                    for (var i = 6; i > 0; i--) {
                        cantidad += $scope.dark_barracks[index].amount[i];
                    }
                    break;
            }
            return cantidad;
        }

        //Calculate the total time per barrack
        $scope.barrack_time = function (type, index) {
            var tiempo = 0;
            switch (type) {
                case 'light':
                        for (var i = 10; i > 0; i--) {
                            tiempo += ($scope.light[i-1].time * $scope.light_barracks[index].amount[i]);
                        }
                    break;
                case 'dark':
                    for (var i = 6; i > 0; i--) {
                        tiempo += ($scope.dark[i-1].time * $scope.dark_barracks[index].amount[i]);
                    }
                    break;
            }
            return tiempo;
        }

        //Troops assignment to barracks methods to maximize efficiency in production time
        $scope.troopsAsignment = function (type) {
            
            switch(type){
                case 'light':
                    for (var i = $scope.light.length - 1; i >= 0; i--) {
                        for (var g = $scope.light_barracks.length - 1; g >= 0; g--) {
                                $scope.light_barracks[g].amount[$scope.light[i].id] = 0;
                            };
                    };

                        if (check) {
                            if ($scope.light[i].amount > 0) {
                                
                                $scope.asing_unit('light' ,i, $scope.light[i].amount);
                            };
                        };
                    break;
                
                case 'dark':
                    for (var i = $scope.dark.length - 1; i >= 0; i--) {
                        for (var g = $scope.dark_barracks.length - 1; g >= 0; g--) {
                                $scope.dark_barracks[g].amount[$scope.dark[i].id] = 0;
                            };
                    };

                        if (check) {
                            if ($scope.dark[i].amount > 0) {
                                
                                $scope.asing_unit('dark' ,i, $scope.dark[i].amount);
                            };
                        };
                    break;
            }
        }

        $scope.asing_unit = function (type, index, amount) {
            var barrack_index;

            switch (type){
                case 'light':
                    for (var i = 0; i < amount; i++) {
                        
                        barrack_index = $scope.select_barrack('light',index);
                        if ($scope.barrack_total('light', barrack_index) + $scope.light[index].space <= $scope.light_barracks[barrack_index].capacity[$scope.light_barracks[barrack_index].lvl]) {
                            $scope.light_barracks[barrack_index].amount[$scope.light[index].id]++;
                        };
                    };
                    break;
                
                case 'dark':
                    for (var i = 0; i < amount; i++) {
                            
                            barrack_index = $scope.select_barrack('dark',index);
                            if ($scope.barrack_total('dark', barrack_index) + $scope.dark[index].space <= $scope.dark_barracks[barrack_index].capacity[$scope.dark_barracks[barrack_index].lvl]) {
                                $scope.dark_barracks[barrack_index].amount[$scope.dark[index].id]++;
                            };
                        };
                        break;
            }
        }

        $scope.select_barrack = function (type, index) {
            var diference = 10000000;
            var lower_barrack = 0;
            var conditionA, conditionB, conditionC;
            
            $scope.available_barracks = [];

            switch(type) {
                case 'light':
                    for (var i = 0; i < $scope.light_barracks.length; i++) {
                        conditionA= $scope.light[index].id <= $scope.light_barracks[i].lvl;
                        conditionB = ($scope.light_barracks[i].capacity[$scope.light_barracks[i].lvl] - $scope.barrack_total('light',i)) >= $scope.light[index].space;
                        conditionC = $scope.light_barracks[i].lvl >= $scope.light[index].id;
                        if (conditionA && conditionB && conditionC) {
                            $scope.available_barracks.push(i);
                        }
                    };

                    for (var i = 0; i < $scope.available_barracks.length; i++) {
                        
                        if ( ($scope.barrack_time('light', i) + $scope.light[index].time) < diference ) {
                            lower_barrack = $scope.available_barracks[i];
                            diference = $scope.barrack_time('light', i) + $scope.light[index].time;
                        };
                    };
                    break;

                case 'dark':
                    for (var i = 0; i < $scope.dark_barracks.length; i++) {
                        conditionA= $scope.dark[index].id <= $scope.dark_barracks[i].lvl;
                        conditionB = ($scope.dark_barracks[i].capacity[$scope.dark_barracks[i].lvl] - $scope.barrack_total('dark',i)) >= $scope.dark[index].space;
                        conditionC = $scope.dark_barracks[i].lvl >= $scope.dark[index].id;
                        if (conditionA && conditionB && conditionC) {
                            $scope.available_barracks.push(i);
                        }
                    };

                    for (var i = 0; i < $scope.available_barracks.length; i++) {
                        
                        if ( ($scope.barrack_time('dark', i) + $scope.dark[index].time) < diference ) {
                            lower_barrack = $scope.available_barracks[i];
                            diference = $scope.barrack_time('dark', i) + $scope.dark[index].time;
                        };
                    };
                    break;
            }
            
            return lower_barrack;

        }

        //Watch light and dark troops totals to trigger troop asignment to barracks 
        $scope.$watch( "spacing('light')", function(newVal, oldVal){
            if (!newVal) return;
            var check = false;

            for (var i = $scope.light_barracks.length - 1; i >= 0; i--) {
                if ($scope.light_barracks[i].lvl > 0){
                    check = true;
                }
            };
            if (check) {
                $scope.troopsAsignment('light');
            }
            
        });

        $scope.$watch( "spacing('dark')", function(newVal, oldVal){
            if (!newVal) return;
            var check = false;

            for (var i = $scope.dark_barracks.length - 1; i >= 0; i--) {
                if ($scope.dark_barracks[i].lvl > 0){
                    check = true;
                }
            };
            if (check) {
                $scope.troopsAsignment('dark');
            }
            
        });


}
]);