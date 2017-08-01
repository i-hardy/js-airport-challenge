function Plane(name) {
  this._name = name;
  this.isFlying = true;
}

Plane.prototype.land = function() {
  this.isFlying = false;
}

Plane.prototype.takeOff = function() {
  this.isFlying = true;
}
