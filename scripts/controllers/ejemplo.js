angular.module('clashHelper.services')

.factory('LimitFactory', function($http) {
        return {
            getCamps: function() {
                var response = [];
                return $http.get('../data/camps.json')
                    .success(function(data) {
                        response = data;
                    });
                return response;
            }, 
            getSpellsFactory: function() {
                var response = [];
                return $http.get('../data/spellsFactory.json')
                    .success(function(data) {
                        response = data;
                    });
                return response;
            }, 
            getBarracks: function() {
                var response = [];
                return $http.get('../data/barracks.json')
                    .success(function(data) {
                        response = data;
                    });
                return response;
            }, 
            getDarkBarracks: function() {
                var response = [];
                return $http.get('../data/darkBarracks.json')
                    .success(function(data) {
                        response = data;
                    });
                return response;
            }
        }
    })