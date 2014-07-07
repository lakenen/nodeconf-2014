var level = require('level')
var db = level(process.argv[2])
var lines = require('fs').readFileSync(process.argv[3], 'utf8').split(/\n/);
db.batch(lines.map(function (l) {
    var line = l.split(',');
    return {
        type: line[0],
        key: line[1],
        value: line[2]
    };
}))
