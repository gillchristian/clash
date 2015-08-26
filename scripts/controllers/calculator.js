'use strict';

angular.module('clashApp.controllers', [])
    .controller('CalculatorController', ['$scope', '$http', 'troopFactory', 'buildingFactory',
        function ($scope, $http, troopFactory, buildingFactory) {

            var vm = this;

            // Init Variables
            vm.light = [];
            vm.light_barracks = [];
            vm.dark_barracks = [];
            vm.dark = [];
            vm.dark.amount = [];
            vm.lightSpells = [];
            vm.max_amount = [];

            //Services manipulation
            vm.services = {
                getLight: function() {
                    troopFactory.getLight()
                        .success(function(data) {
                            vm.light = data;
                        });
                },
                getDark: function() {
                    troopFactory.getDark()
                        .success(function(data) {
                            vm.dark = data;
                        });
                },
                getLightSpells: function() {
                    troopFactory.getLightSpells()
                        .success(function(data) {
                            vm.lightSpells = data;
                        });
                },
                getDarkSpells: function() {
                    troopFactory.getDarkSpells()
                        .success(function(data) {
                            vm.darkSpells = data;
                        });
                },
                getBarracks: function() {
                    buildingFactory.getBarracks()
                        .success(function(data) {
                            vm.light_barracks = data;
                        })
                },
                getDarkBarracks: function() {
                    buildingFactory.getDarkBarracks()
                        .success(function(data) {
                            vm.dark_barracks = data;
                        })
                },
                getCamps: function() {
                    buildingFactory.getCamps()
                        .success(function(data) {
                            vm.camps = data;
                        })
                },
                getLightFactory: function() {
                    buildingFactory.getLightFactory()
                        .success(function(data) {
                            vm.lightSpellsFactory = data;
                        })
                },
                getDarkFactory: function() {
                    buildingFactory.getDarkFactory()
                        .success(function(data) {
                            vm.darkSpellsFactory = data;
                        })
                }
            }

            //Execute services to get data
            vm.services.getLightSpells();
            vm.services.getDarkSpells();
            vm.services.getLight();
            vm.services.getDark();
            vm.services.getBarracks();
            vm.services.getDarkBarracks();
            vm.services.getCamps();
            vm.services.getLightFactory();
            vm.services.getDarkFactory();


            //Calculate the space ocupated by troops
            vm.spacing = function(option) {
                var spacing = 0;
                var aux = 0;
                switch (option) {
                    case 'light':
                        for (var i = vm.light.length - 1; i >= 0; i--) {
                            aux = vm.light[i].amount * vm.light[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark.length - 1; i >= 0; i--) {
                            aux = vm.dark[i].amount * vm.dark[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'lightSpells':
                        for (var i = vm.lightSpells.length - 1; i >= 0; i--) {
                            aux = vm.lightSpells[i].amount * vm.lightSpells[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'darkSpells':
                        for (var i = vm.darkSpells.length - 1; i >= 0; i--) {
                            aux = vm.darkSpells[i].amount * vm.darkSpells[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'total.troops':
                        spacing = vm.spacing('light') + vm.spacing('dark');
                        break;
                    case 'total.spells':
                        spacing = vm.spacing('darkSpells') + vm.spacing('lightSpells');
                        break;
                }
                return spacing;
            }

            //Calculate the amount of troops
            vm.cantidad = function(option) {
                var cantidad = 0;
                var aux = 0;
                switch (option) {
                    case 'light':
                        for (var i = vm.light.length - 1; i >= 0; i--) {
                            aux = vm.light[i].amount;
                            cantidad += aux;
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark.length - 1; i >= 0; i--) {
                            aux = vm.dark[i].amount;
                            cantidad += aux;
                        }
                        break;
                    case 'lightSpells':
                        for (var i = vm.lightSpells.length - 1; i >= 0; i--) {
                            aux = vm.lightSpells[i].amount;
                            cantidad += aux;
                        }
                        break;
                    case 'darkSpells':
                        for (var i = vm.darkSpells.length - 1; i >= 0; i--) {
                            aux = vm.darkSpells[i].amount;
                            cantidad += aux;
                        }
                        break;
                }
                return cantidad;
            }


            //Calculate the total cost
            vm.costo = function(option) {
                var costo = 0;
                var aux = 0;
                var index = 0;
                switch (option) {
                    case 'light':
                        for (var i = vm.light.length - 1; i >= 0; i--) {
                            index = vm.light[i].lvl - 1;
                            if (typeof vm.light[i].cost[index] !== 'undefined' && typeof vm.light[i].amount !== 'undefined') {
                                aux = vm.light[i].cost[index] * vm.light[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark.length - 1; i >= 0; i--) {
                            index = vm.dark[i].lvl - 1;
                            if (typeof vm.dark[i].cost[index] !== 'undefined' && typeof vm.dark[i].amount !== 'undefined') {
                                aux = vm.dark[i].cost[index] * vm.dark[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'lightSpells':
                        for (var i = vm.lightSpells.length - 1; i >= 0; i--) {
                            index = vm.lightSpells[i].lvl - 1;
                            if (typeof vm.lightSpells[i].cost[index] !== 'undefined' && typeof vm.lightSpells[i].amount !== 'undefined') {
                                aux = vm.lightSpells[i].cost[index] * vm.lightSpells[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'darkSpells':
                        for (var i = vm.darkSpells.length - 1; i >= 0; i--) {
                            index = vm.darkSpells[i].lvl - 1;
                            if (typeof vm.darkSpells[i].cost[index] !== 'undefined' && typeof vm.darkSpells[i].amount !== 'undefined') {
                                aux = vm.darkSpells[i].cost[index] * vm.darkSpells[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'total.light':
                        costo = vm.costo('light') + vm.costo('lightSpells');
                        break;
                    case 'total.dark':
                        costo = vm.costo('dark') + vm.costo('darkSpells');
                        break;
                }
                return costo;
            }

            //Calculate the total time
            vm.tiempo = function(option) {
                var tiempo = 0;
                switch (option) {
                    case 'light':
                        for (var i = vm.light.length - 1; i >= 0; i--) {
                            tiempo += (vm.light[i].time * vm.light[i].amount);
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark.length - 1; i >= 0; i--) {
                            tiempo += (vm.dark[i].time * vm.dark[i].amount);
                        }
                        break;
                    case 'lightSpells':
                        for (var i = vm.lightSpells.length - 1; i >= 0; i--) {
                            tiempo += (vm.lightSpells[i].time * vm.lightSpells[i].amount);
                        }
                        break;
                    case 'darkSpells':
                        for (var i = vm.darkSpells.length - 1; i >= 0; i--) {
                            tiempo += (vm.darkSpells[i].time * vm.darkSpells[i].amount);
                        }
                        break;
                }
                return tiempo;
            }

            //Max amount of troops and lightSpells calculation
            vm.max_amount = function(option) {
                var max = 0;
                switch (option) {
                    case 'troops':
                        if (typeof vm.camps !== 'undefined') {
                            for (var i = vm.camps.length - 1; i >= 0; i--) {
                                max += vm.camps[i].capacity[vm.camps[i].lvl];
                            };

                        }
                        break;
                    case 'spells':
                        if (typeof vm.lightSpellsFactory !== 'undefined' && typeof vm.darkSpellsFactory !== 'undefined') {
                            for (var i = vm.lightSpellsFactory.length - 1; i >= 0; i--) {
                                max += vm.lightSpellsFactory[i].capacity[vm.lightSpellsFactory[i].lvl];
                            };
                            for (var i = vm.darkSpellsFactory.length - 1; i >= 0; i--) {
                                max += vm.darkSpellsFactory[i].capacity[vm.darkSpellsFactory[i].lvl];
                            };
                        };
                        break;
                }
                return max;

            }

            //Troop and lightSpells max amount exceeded check
            vm.limit = function(option) {
                var answer = false;
                switch (option) {
                    case 'troops':
                        if (vm.max_amount('troops') < vm.spacing('total.troops')) {
                            answer = true;
                        }
                        break;
                    case 'spells':
                        if (vm.max_amount('spells') < vm.spacing('total.spells')) {
                            answer = true;
                        }
                        break;
                }
                return answer;
            }

            //Calculate the total unit queue in a barrack
            vm.barrack_total = function(type, index) {
                var cantidad = 0;
                switch (type) {
                    case 'light':
                        for (var i = 10; i > 0; i--) {
                            cantidad += vm.light_barracks[index].amount[i];
                        }
                        break;
                    case 'dark':
                        for (var i = 6; i > 0; i--) {
                            cantidad += vm.dark_barracks[index].amount[i];
                        }
                        break;
                }
                return cantidad;
            }

            //Calculate the total time per barrack
            vm.barrack_time = function(type, index) {
                var tiempo = 0;
                switch (type) {
                    case 'light':
                        for (var i = 10; i > 0; i--) {
                            tiempo += (vm.light[i - 1].time * vm.light_barracks[index].amount[i]);
                        }
                        break;
                    case 'dark':
                        for (var i = 6; i > 0; i--) {
                            tiempo += (vm.dark[i - 1].time * vm.dark_barracks[index].amount[i]);
                        }
                        break;
                }
                return tiempo;
            }

            //Troops assignment to barracks methods to maximize efficiency in production time
            vm.troopsAsignment = function(type) {

                switch (type) {
                    case 'light':
                        for (var i = vm.light.length - 1; i >= 0; i--) {
                            for (var g = vm.light_barracks.length - 1; g >= 0; g--) {
                                vm.light_barracks[g].amount[vm.light[i].id] = 0;
                            };
                            if (vm.light[i].amount > 0) {
                                vm.asing_unit('light', i, vm.light[i].amount);
                            };
                        };
                        break;

                    case 'dark':
                        for (var i = vm.dark.length - 1; i >= 0; i--) {
                            for (var g = vm.dark_barracks.length - 1; g >= 0; g--) {
                                vm.dark_barracks[g].amount[vm.dark[i].id] = 0;
                            };
                            if (vm.dark[i].amount > 0) {
                                vm.asing_unit('dark', i, vm.dark[i].amount);
                            };
                        };

                        break;
                }
            }

            vm.asing_unit = function(type, index, amount) {
                var barrack_index;

                switch (type) {
                    case 'light':
                        for (var i = 0; i < amount; i++) {

                            barrack_index = vm.select_barrack('light', index);
                            if (vm.barrack_total('light', barrack_index) + vm.light[index].space <= vm.light_barracks[barrack_index].capacity[vm.light_barracks[barrack_index].lvl]) {
                                vm.light_barracks[barrack_index].amount[vm.light[index].id]++;
                            };
                        };
                        break;

                    case 'dark':
                        for (var i = 0; i < amount; i++) {

                            barrack_index = vm.select_barrack('dark', index);
                            if (vm.barrack_total('dark', barrack_index) + vm.dark[index].space <= vm.dark_barracks[barrack_index].capacity[vm.dark_barracks[barrack_index].lvl]) {
                                vm.dark_barracks[barrack_index].amount[vm.dark[index].id]++;
                            };
                        };
                        break;
                }
            }

            vm.select_barrack = function(type, index) {
                var diference = 10000000;
                var lower_barrack = 0;
                var conditionA, conditionB, conditionC;

                vm.available_barracks = [];

                switch (type) {
                    case 'light':
                        for (var i = 0; i < vm.light_barracks.length; i++) {
                            conditionA = vm.light[index].id <= vm.light_barracks[i].lvl;
                            conditionB = (vm.light_barracks[i].capacity[vm.light_barracks[i].lvl] - vm.barrack_total('light', i)) >= vm.light[index].space;
                            conditionC = vm.light_barracks[i].lvl >= vm.light[index].id;
                            if (conditionA && conditionB && conditionC) {
                                vm.available_barracks.push(i);
                            }
                        };

                        for (var i = 0; i < vm.available_barracks.length; i++) {

                            if ((vm.barrack_time('light', i) + vm.light[index].time) < diference) {
                                lower_barrack = vm.available_barracks[i];
                                diference = vm.barrack_time('light', i) + vm.light[index].time;
                            };
                        };
                        break;

                    case 'dark':
                        for (var i = 0; i < vm.dark_barracks.length; i++) {
                            conditionA = vm.dark[index].id <= vm.dark_barracks[i].lvl;
                            conditionB = (vm.dark_barracks[i].capacity[vm.dark_barracks[i].lvl] - vm.barrack_total('dark', i)) >= vm.dark[index].space;
                            conditionC = vm.dark_barracks[i].lvl >= vm.dark[index].id;
                            if (conditionA && conditionB && conditionC) {
                                vm.available_barracks.push(i);
                            }
                        };

                        for (var i = 0; i < vm.available_barracks.length; i++) {

                            if ((vm.barrack_time('dark', i) + vm.dark[index].time) < diference) {
                                lower_barrack = vm.available_barracks[i];
                                diference = vm.barrack_time('dark', i) + vm.dark[index].time;
                            };
                        };
                        break;
                }

                return lower_barrack;

            }

            //Watch light and dark troops totals to trigger troop asignment to barracks
            $scope.$watch("spacing('light')", function(newVal, oldVal) {
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

            $scope.$watch("spacing('dark')", function(newVal, oldVal) {
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


        }
    ]);