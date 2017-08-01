function Plane() {
  this.isFlying = true;
}

Plane.prototype.land = function(flying) {
  this.isFlying = flying;
};
