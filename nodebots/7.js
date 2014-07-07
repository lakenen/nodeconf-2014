var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
    var servo = new five.Servo(9);
    var sensor = new five.Sensor("A2");
    sensor.scale(0, 180).on("change", function() {
      // this.value will reflect a scaling from 0-1023 to 0-180
      servo.to(this.value);
    });
});
