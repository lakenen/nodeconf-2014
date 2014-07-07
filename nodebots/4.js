var five = require('johnny-five');
var board = new five.Board();
board.on('ready', function () {
    // var led = new five.Led(13);
    var button = new five.Button(5);
    button.on('press', function () {

    });

    var servo = new five.Servo(11);
    var pot = new five.Sensor("A0");
    pot.scale(0, 180).on("change", function() {
      // this.value will reflect a scaling from 0-1023 to 0-180
      servo.to(this.value);
    });

    board.repl.inject({
        pot: pot,
        servo: servo,
        button: button
    });
});
