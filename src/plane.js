function Plane(name) {
  this._name = name;
  this.isFlying = true;
}

Plane.prototype.airborne = function(flying) {
  this.isFlying = flying;
};
