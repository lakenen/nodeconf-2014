var five = require('johnny-five')
var board = new five.Board()
board.on('ready', function () {
    var led = new five.Led(9);
    var sensor = new five.Sensor("A0");
    sensor.within([ 600, Infinity ], function() {
        led.on();
    });
    sensor.within([ 0, 600 ], function() {
        led.off();
    });
});
