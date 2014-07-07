var sprintf = require('sprintf');

module.exports=function (db, date, cb) {
    var arr = [];
    var end = new Date(date.replace(/(\d{4}-\d{2}-)(\d{2})/, function (m, b, e) {
        return b + sprintf('%1d', (parseInt(e) + 1));
    }));
    db.createReadStream({ start: date, end: end.toISOString() }).on('data', function (data) {
        arr.push(data.value);
    })
    .on('error', cb)
    .on('end', function () {
        cb(null, arr);
    });
};
