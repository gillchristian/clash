function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 500);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
  this.petalCount = 1000;
};

var flower = new LateBloomer();
flower.bloom();  // after 1 second, triggers the 'declare' method
flower.bloom();  // after 1 second, triggers the 'declare' method