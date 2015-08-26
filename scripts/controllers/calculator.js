'use strict';

angular.module('clashApp.controllers', [])
    .controller('CalculatorController', ['$scope', '$http', 'troopFactory', 'buildingFactory',
        function ($scope, $http, troopFactory, buildingFactory) {

            var vm = this;

            // Init Variables
            vm.light_troops = [];
            vm.dark_troops = [];
            vm.light_barracks = [];
            vm.dark_barracks = [];
            vm.dark_troops.amount = [];
            vm.max_amount = [];
            vm.light_spells = [];
            vm.dark_spells = [];

            vm.url = 'http://gillchristian.com/clash/img/';

            //Services manipulation
            vm.services = {
                getLightTroops: function() {
                    troopFactory.getLightTroops()
                        .success(function(data) {
                            vm.light_troops = data;
                        });
                },
                getDarkTroops: function() {
                    troopFactory.getDarkTroops()
                        .success(function(data) {
                            vm.dark_troops = data;
                        });
                },
                getLightSpells: function() {
                    troopFactory.getLightSpells()
                        .success(function(data) {
                            vm.light_spells = data;
                        });
                },
                getDarkSpells: function() {
                    troopFactory.getDarkSpells()
                        .success(function(data) {
                            vm.dark_spells = data;
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
                            vm.light_factory = data;
                        })
                },
                getDarkFactory: function() {
                    buildingFactory.getDarkFactory()
                        .success(function(data) {
                            vm.dark_factory = data;
                        })
                }
            }

            //Execute services to get data
            vm.services.getLightSpells();
            vm.services.getDarkSpells();
            vm.services.getLightTroops();
            vm.services.getDarkTroops();
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
                        for (var i = vm.light_troops.length - 1; i >= 0; i--) {
                            aux = vm.light_troops[i].amount * vm.light_troops[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark_troops.length - 1; i >= 0; i--) {
                            aux = vm.dark_troops[i].amount * vm.dark_troops[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'light_spells':
                        for (var i = vm.light_spells.length - 1; i >= 0; i--) {
                            aux = vm.light_spells[i].amount * vm.light_spells[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'dark_spells':
                        for (var i = vm.dark_spells.length - 1; i >= 0; i--) {
                            aux = vm.dark_spells[i].amount * vm.dark_spells[i].space;
                            spacing += aux;
                        }
                        break;
                    case 'total.troops':
                        spacing = vm.spacing('light') + vm.spacing('dark');
                        break;
                    case 'total.spells':
                        spacing = vm.spacing('dark_spells') + vm.spacing('light_spells');
                        break;
                }
                return spacing;
            }

            //Calculate the total cost
            vm.costo = function(option) {
                var costo = 0;
                var aux = 0;
                var index = 0;
                switch (option) {
                    case 'light':
                        for (var i = vm.light_troops.length - 1; i >= 0; i--) {
                            index = vm.light_troops[i].lvl - 1;
                            if (typeof vm.light_troops[i].cost[index] !== 'undefined' && typeof vm.light_troops[i].amount !== 'undefined') {
                                aux = vm.light_troops[i].cost[index] * vm.light_troops[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark_troops.length - 1; i >= 0; i--) {
                            index = vm.dark_troops[i].lvl - 1;
                            if (typeof vm.dark_troops[i].cost[index] !== 'undefined' && typeof vm.dark_troops[i].amount !== 'undefined') {
                                aux = vm.dark_troops[i].cost[index] * vm.dark_troops[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'light_spells':
                        for (var i = vm.light_spells.length - 1; i >= 0; i--) {
                            index = vm.light_spells[i].lvl - 1;
                            if (typeof vm.light_spells[i].cost[index] !== 'undefined' && typeof vm.light_spells[i].amount !== 'undefined') {
                                aux = vm.light_spells[i].cost[index] * vm.light_spells[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'dark_spells':
                        for (var i = vm.dark_spells.length - 1; i >= 0; i--) {
                            index = vm.dark_spells[i].lvl - 1;
                            if (typeof vm.dark_spells[i].cost[index] !== 'undefined' && typeof vm.dark_spells[i].amount !== 'undefined') {
                                aux = vm.dark_spells[i].cost[index] * vm.dark_spells[i].amount;
                                costo += aux;
                            }
                        }
                        break;
                    case 'total.light':
                        costo = vm.costo('light') + vm.costo('light_spells');
                        break;
                    case 'total.dark':
                        costo = vm.costo('dark') + vm.costo('dark_spells');
                        break;
                }
                return costo;
            }

            //Calculate the total time
            vm.time = function(option) {
                var time = 0;
                switch (option) {
                    case 'light':
                        for (var i = vm.light_troops.length - 1; i >= 0; i--) {
                            time += (vm.light_troops[i].time * vm.light_troops[i].amount);
                        }
                        break;
                    case 'dark':
                        for (var i = vm.dark_troops.length - 1; i >= 0; i--) {
                            time += (vm.dark_troops[i].time * vm.dark_troops[i].amount);
                        }
                        break;
                    case 'light_spells':
                        for (var i = vm.light_spells.length - 1; i >= 0; i--) {
                            time += (vm.light_spells[i].time * vm.light_spells[i].amount);
                        }
                        break;
                    case 'dark_spells':
                        for (var i = vm.dark_spells.length - 1; i >= 0; i--) {
                            time += (vm.dark_spells[i].time * vm.dark_spells[i].amount);
                        }
                        break;
                }
                return time;
            }

            //Max amount of troops and light_spells calculation
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
                        if (typeof vm.light_factory !== 'undefined' && typeof vm.dark_factory !== 'undefined') {
                            for (var i = vm.light_factory.length - 1; i >= 0; i--) {
                                max += vm.light_factory[i].capacity[vm.light_factory[i].lvl];
                            };
                            for (var i = vm.dark_factory.length - 1; i >= 0; i--) {
                                max += vm.dark_factory[i].capacity[vm.dark_factory[i].lvl];
                            };
                        };
                        break;
                }
                return max;

            }

            //Troop and light_spells max amount exceeded check
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
                var total = 0;
                switch (type) {
                    case 'light':
                        for (var i = 10; i > 0; i--) {
                            total += vm.light_barracks[index].amount[i];
                        }
                        break;
                    case 'dark':
                        for (var i = 6; i > 0; i--) {
                            total += vm.dark_barracks[index].amount[i];
                        }
                        break;
                }
                return total;
            }

            //Calculate the total time per barrack
            vm.barrack_time = function(type, index) {
                var barrackTime = 0;
                switch (type) {
                    case 'light':
                        for (var i = 10; i > 0; i--) {
                            barrackTime += (vm.light_troops[i - 1].time * vm.light_barracks[index].amount[i]);
                        }
                        break;
                    case 'dark':
                        for (var i = 6; i > 0; i--) {
                            barrackTime += (vm.dark_troops[i - 1].time * vm.dark_barracks[index].amount[i]);
                        }
                        break;
                }
                return barrackTime;
            }

            //Troops assignment to barracks methods to maximize efficiency in production time
            vm.troopsAsignment = function(type) {

                switch (type) {
                    case 'light':
                        for (var i = vm.light_troops.length - 1; i >= 0; i--) {
                            for (var g = vm.light_barracks.length - 1; g >= 0; g--) {
                                vm.light_barracks[g].amount[vm.light_troops[i].id] = 0;
                            };
                            if (vm.light_troops[i].amount > 0) {
                                vm.asing_unit('light', i, vm.light_troops[i].amount);
                            };
                        };
                        break;

                    case 'dark':
                        for (var i = vm.dark_troops.length - 1; i >= 0; i--) {
                            for (var g = vm.dark_barracks.length - 1; g >= 0; g--) {
                                vm.dark_barracks[g].amount[vm.dark_troops[i].id] = 0;
                            };
                            if (vm.dark_troops[i].amount > 0) {
                                vm.asing_unit('dark', i, vm.dark_troops[i].amount);
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
                            if (vm.barrack_total('light', barrack_index) + vm.light_troops[index].space <= vm.light_barracks[barrack_index].capacity[vm.light_barracks[barrack_index].lvl]) {
                                vm.light_barracks[barrack_index].amount[vm.light_troops[index].id]++;
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
                            conditionA = vm.light_troops[index].id <= vm.light_barracks[i].lvl;
                            conditionB = (vm.light_barracks[i].capacity[vm.light_barracks[i].lvl] - vm.barrack_total('light', i)) >= vm.light_troops[index].space;
                            conditionC = vm.light_barracks[i].lvl >= vm.light_troops[index].id;
                            if (conditionA && conditionB && conditionC) {
                                vm.available_barracks.push(i);
                            }
                        };

                        for (var i = 0; i < vm.available_barracks.length; i++) {

                            if ((vm.barrack_time('light', i) + vm.light_troops[index].time) < diference) {
                                lower_barrack = vm.available_barracks[i];
                                diference = vm.barrack_time('light', i) + vm.light_troops[index].time;
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