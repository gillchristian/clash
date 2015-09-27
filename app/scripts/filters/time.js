(function(){
'use strict';

//Filter to show time in "xd xh xm xs" format

angular.module('clashApp.filters', [])
    .filter('creationTime', function (){
        return function(seconds) {
            
            var days = Math.floor(seconds / 86400);
            var hours = Math.floor((seconds % 86400) / 3600);
            var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
            seconds = Math.floor(((seconds % 86400) % 3600) % 60);
            var timeString = '';
            if(days > 0) timeString += (days > 1) ? (days + "d ") : (days + "d ");
            if(hours > 0) timeString += (hours > 1) ? (hours + "h ") : (hours + "h ");
            if(minutes > 0) timeString += (minutes > 1) ? (minutes + "m ") : (minutes + "m ");
            if (seconds> 0) timeString += (seconds > 1) ? (seconds + "s") : (seconds + "s");
            return timeString ? timeString : 0;
        }        
    }
);
})();