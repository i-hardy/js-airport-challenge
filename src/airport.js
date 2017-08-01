function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
  plane.land(false)
  this.planes.push(plane)
};
