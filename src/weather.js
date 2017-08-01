function Weather() {
  this.isStormy = (Math.floor((Math.random() * 10) + 1) === 10)
}

Weather.forecast = function () {
  return new Weather
}
