'use strict';

/**
 * Controllers of the Medallia App
 */
angular.module('medalliaApp.controllers', [])
  .controller('hiringCtrl', ['$http', 'slidesFactory',
    function ($http, slidesFactory){

    	var vm = this;

    	slidesFactory.getPositions()
    		.success(function (data) {
    			vm.positions = data;
    		});


}
])


  .controller('desafioCtrl', ['$http', 'slidesFactory',
    function ($http, slidesFactory){

    	var vm = this;

    	slidesFactory.getQuotes()
    		.success(function (data) {
    			vm.quotes = data;
    		});
}
]);


