'use strict';

/**
 * Controllers of the Medallia App
 */
angular.module('medalliaApp.services', [])
  .factory('slidesFactory', ['$http',
    function ($http){
    	var location = window.location.protocol + '//' + window.location.hostname;
    	var slidesFactory = {};

    	slidesFactory.getQuotes = function() {
    		return $http.get(location + '/Maquetado/slides/desafio.json')
    	};

    	slidesFactory.getPositions = function() {
    		return $http.get(location + '/Maquetado/slides/hiring.json');
    	};

    	return slidesFactory;
}
]);