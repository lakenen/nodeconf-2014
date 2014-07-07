

var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "scenario"});

require('./4')(log, function (val) {
    console.log(val);
});
