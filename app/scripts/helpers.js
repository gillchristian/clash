// random int between [min and max]
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// return array last value
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};