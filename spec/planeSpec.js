describe("Plane", function() {
  var boeing;

  beforeEach(function() {
    boeing = new Plane();
  });

  it("knows if it is flying or not", function() {
    expect(boeing.isFlying).toBe(true);
  });

  it("no longer flies after landing at an airport", function() {
    boeing.land(false)
    expect(boeing.isFlying).toBe(false);
  });
})
