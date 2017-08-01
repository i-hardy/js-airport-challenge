describe("Plane", function() {
  var boeing;

  beforeEach(function() {
    boeing = new Plane();
  });

  it("no longer flies after landing at an airport", function() {
    boeing.land();
    expect(boeing.isFlying).toBe(false);
  });

  it("is flying after takeoff", function() {
    boeing.takeOff();
    expect(boeing.isFlying).toBe(true);
  })
})
