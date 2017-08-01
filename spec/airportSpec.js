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

  describe("land", function() {
    it("should be able to land planes", function() {
      spyOn(boeing, "land");
      spyOn(Math, "floor").and.returnValue(5);
      gatwick.land(boeing)
      expect(gatwick.planes).toContain(boeing);
      expect(boeing.land).toHaveBeenCalled();
    });

    it("can't land planes in a full airport", function() {
      spyOn(Math, "floor").and.returnValue(5);
      for(i = 0; i < 20; i++) {
        gatwick.land(new Plane)
      }
      expect(function() { gatwick.land(boeing) }).toThrow("Airport is full")
    });

    it("can't land planes when it's stormy", function() {
      spyOn(Math, "floor").and.returnValue(10);
      expect(function() { gatwick.land(boeing) }).toThrow("Poor weather prevents landing")
    });
  });

  describe("takeOff", function() {
    it("should allow planes to take off", function() {
      spyOn(boeing, "takeOff");
      spyOn(Math, "floor").and.returnValue(5);
      gatwick.land(boeing)
      gatwick.land(concorde)
      gatwick.takeOff(boeing)
      expect(gatwick.planes).not.toContain(boeing);
      expect(boeing.takeOff).toHaveBeenCalled();
    });

    it("should prevent takeoff when it's stormy", function() {
      spyOn(Math, "floor").and.returnValue(10);
      expect(function() { gatwick.takeOff(boeing) }).toThrow("Poor weather prevents takeoff")
    });
  });

  describe("setCapacity", function() {
    it("should be able to change capacity", function() {
      gatwick.setCapacity(50)
      expect(gatwick.capacity).toEqual(50)
    });
  });
});
