var DEFAULTCAPACITY = 20

function Airport() {
  this.capacity = DEFAULTCAPACITY
  this.planes = []
};

Airport.prototype.land = function(plane) {
  if (this.planes.length >= this.capacity) {
    throw "Airport is full"
  } else if (Weather.forecast().isStormy) {
    throw "Poor weather prevents landing"
  } else {
    plane.land();
    this.planes.push(plane)
  }
};

Airport.prototype.takeOff = function(plane) {
  if (Weather.forecast().isStormy) {
    throw "Poor weather prevents takeoff"
  } else {
    plane.takeOff();
    this.planes.splice(plane)
  }
};

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity
}
