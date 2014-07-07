var five = require("johnny-five"),
  dgram = require('dgram'),
  board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(11);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // piezo.song("cdfda ag cdfdg gf ", "111111442111111442");
  piezo.song("adg", "444");
});
