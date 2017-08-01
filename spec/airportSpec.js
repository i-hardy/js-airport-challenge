describe("Airport", function() {
  var gatwick;
  var boeing

  beforeEach(function() {
    gatwick = new Airport();
    boeing = new Plane();
  });

  it("should have an empty array of planes", function() {
    expect(gatwick.planes).toEqual([])
  })

  it("should be able to land planes", function() {
    spyOn(boeing, "land");
    gatwick.land(boeing)
    expect(gatwick.planes).toContain(boeing);
    expect(boeing.land).toHaveBeenCalledWith(false);
  });
})
