var DEFAULTCAPACITY = 20

function Airport() {
  this.capacity = DEFAULTCAPACITY
  this.planes = []
};

Airport.prototype.land = function(plane) {
  if (this.planes.length < this.capacity) {
    plane.airborne(false)
    this.planes.push(plane)
  } else {
    throw "Airport is full"
  }
};

Airport.prototype.takeOff = function(plane) {
  plane.airborne(true)
  this.planes.splice(plane)
};

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity
}
