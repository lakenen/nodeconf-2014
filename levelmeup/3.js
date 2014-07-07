var level = require('level')
var db = level(process.argv[2])
function get(i) {
    db.get('key' + i, function (err, value) {
        if (!err) console.log('key%s = %s', i, value)
        if (i < 100) {
            get(i + 1);
        }
    })
}

get(0);
