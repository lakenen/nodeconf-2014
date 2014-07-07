var five = require("johnny-five"),
    board, sensor;

board = new five.Board();

board.on("ready", function() {
  // This example is for the TMP36 analog temperature sensor
  sensor = new five.Sensor("A0");
  var piezo = new five.Piezo(9);

  var led = new five.Led(13);
  var toggle = false;
  var button = new five.Button(5);
  button.on('press', function () {
      toggle = !toggle;
      console.log('turning off led (button)')
      led.off();
      led.stop();
  });

  var celsiusValue;
  function analogToCelsius(analogValue) {
    // For the TMP36 sensor specifically
    return ((analogValue * 0.004882814) - 0.5) * 100;
  }

  sensor.on("data", function() {
    // Obtain temperature from current analog value
    celsiusValue = analogToCelsius(this.value);
    if (celsiusValue > 50 && !toggle) {
      console.log('turning on led')
      toggle = true;
      led.strobe();
      piezo.song("cdfda ag cdfdg gf ", "111111442111111442");
    } else if (celsiusValue < 50) {
      console.log('turning off led')
      toggle = false;
      led.stop();
      led.off();
    }
  });
});
