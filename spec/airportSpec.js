describe("Airport", function() {
  var gatwick;
  var boeing

  beforeEach(function() {
    gatwick = new Airport();
    boeing = new Plane("boeing");
    concorde = new Plane("concorde");
  });

  it("should have an empty array of planes", function() {
    expect(gatwick.planes).toEqual([])
  })

  it("should be able to land planes", function() {
    spyOn(boeing, "airborne");
    gatwick.land(boeing)
    expect(gatwick.planes).toContain(boeing);
    expect(boeing.airborne).toHaveBeenCalledWith(false);
  });

  it("should allow planes to take off", function() {
    gatwick.land(boeing)
    gatwick.land(concorde)
    gatwick.takeOff(boeing)
    expect(gatwick.planes).not.toContain(boeing);
  })
})
