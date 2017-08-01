function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
  plane.airborne(false)
  this.planes.push(plane)
};

Airport.prototype.takeOff = function(plane) {
  plane.airborne(true)
  this.planes.splice(plane)
};
