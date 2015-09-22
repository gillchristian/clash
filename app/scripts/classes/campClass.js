(function() {
   'use strict';

angular.module('clashApp.classes')
   .factory('CampClass', [
      function() {
      
      // {
      //     "capacity": [0,20,30,35,40,45,50,55,60],
      //     "lvl": 0, 
      //     "lvls": [0,1,2,3,4,5,6,7,8]
      // }
         
      /**
      * Constructor
      */
      var Camp = function (model) {
         
         this.capacity  = model.capacity;
         this.lvls      = model.lvls;
         this.lvl       = model.lvl;
         this.folder    = model.folder;
         this.building  = model.building;
         this.name      = model.name;
      }

      /**
      * Public Methods
      *
      *
      * Getters
      */

      // returns the capacity at the actual lvl
      Camp.prototype.getActualCapacity = function() {
         return this.capacity[this.lvl - 1];
      };

      return Camp;

   }]);

})();