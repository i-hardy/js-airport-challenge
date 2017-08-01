describe("Weather", function() {
  var weather;

  it("returns if weather is stormy or not", function() {
    spyOn(Math, "floor").and.returnValue(5);
    expect(Weather.forecast().isStormy).toEqual(false);
  });
});
