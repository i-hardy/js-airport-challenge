describe("Airport", function() {
  var gatwick;
  var boeing

  beforeEach(function() {
    gatwick = new Airport();
    boeing = new Plane("boeing");
    concorde = new Plane("concorde");
  });

  it("should have a default capacity", function() {
    expect(gatwick.capacity).toEqual(DEFAULTCAPACITY)
  });

  it("should have an empty array of planes", function() {
    expect(gatwick.planes).toEqual([])
  });

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
  });

  it("should be able to change capacity", function() {
    gatwick.setCapacity(50)
    expect(gatwick.capacity).toEqual(50)
  });

  it("can't land planes in a full airport", function() {
    for(i = 0; i < 20; i++) {
      gatwick.land(new Plane)
    }
    expect(function() { gatwick.land(boeing) }).toThrow("Airport is full")
  });
})
