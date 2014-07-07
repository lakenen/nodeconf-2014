var five = require("johnny-five"),
    board, sensor;

board = new five.Board();

board.on("ready", function() {
  // This example is for the TMP36 analog temperature sensor
  sensor = new five.Sensor("A0");

  var celsiusValue;
  function analogToCelsius(analogValue) {
    // For the TMP36 sensor specifically
    return ((analogValue * 0.004882814) - 0.5) * 100;
  }

  sensor.on("data", function() {
    // Obtain temperature from current analog value
    celsiusValue    = analogToCelsius(this.value);
  });

  var dnode = require('dnode');

  var server = dnode({
      getTemperature : function (f) { f(celsiusValue) },
  }).listen(1337);
});
